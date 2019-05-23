'use strict'

const Config = use('Config')
const Env = use('Env')
const Youch = use('youch')
const Sentry = require('@sentry/node')
const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    }

    if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, request.request)
      const errorJSON = await youch.toJSON()
      response.status(error.status).send(errorJSON)
      return
    }

    // Production error
    response.status(error.status)
  }

  async report (error, { request, auth }) {
    Sentry.init({ dsn: Config.get('services.sentry.dsn') })
    Sentry.captureException(error, request, auth)
  }
}

module.exports = ExceptionHandler
