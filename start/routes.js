const Route = use('Route')

Route.post('/users', 'UserController.store').validator('User')
Route.post('/session', 'SessionController.store').validator('Session')

Route.post('/passwords', 'ForgotPasswordCOntroller.store').validator(
  'ForgotPassword'
)
Route.put('/passwords', 'ForgotPasswordCOntroller.update').validator('Session')

Route.get('/files/:id', 'FileController.show')

Route.group(() => {
  Route.post('files', 'FileController.store')

  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([[['projects.store'], ['Project']]]))

  Route.resource('projects.tasks', 'TaskController')
    .apiOnly()
    .validator(new Map([[['projects.tasks.store'], ['Task']]]))
}).middleware(['auth'])
