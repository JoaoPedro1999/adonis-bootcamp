'use strict'

const kue = use('Kue')
const Job = use('App/Jobs/NewTaskMail')

const TaskHook = (exports = module.exports = {})

TaskHook.sendNewTaskEmail = async taskInstance => {
  const { email, username } = await taskInstance.user().fetch()
  const file = await taskInstance.file().fetch()

  const { title } = taskInstance

  kue.dispatch(Job.key, { email, username, file, title }, { attempts: 3 })
}
