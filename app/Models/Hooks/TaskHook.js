'use strict'

// const kue = use('Kue')
// const Job = use('App/Jobs/NewTaskMail')
const Mail = use('Mail')
const Helpers = use('Helpers')

const TaskHook = (exports = module.exports = {})

TaskHook.sendNewTaskEmail = async taskInstance => {
  const { email, username } = await taskInstance.user().fetch()
  const file = await taskInstance.file().fetch()

  const { title } = taskInstance

  await Mail.send(
    ['emails.new_task'],
    { username, title, hasAttachment: !!file },
    message => {
      message
        .to(email)
        .from('joaopedrobeckland@gmail.com', 'João Pedro | Rocketseat')
        .subject('Nova tarefa para você')

      if (file) {
        message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
          filename: file.name
        })
      }
    }
  )
}
