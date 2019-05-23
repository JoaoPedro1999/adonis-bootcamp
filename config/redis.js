'use strict'

/*
|--------------------------------------------------------------------------
| Redis Configuaration
|--------------------------------------------------------------------------
|
| Here we define the configuration for redis server. A single application
| can make use of multiple redis connections using the redis provider.
|
*/

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | connection
  |--------------------------------------------------------------------------
  |
  | Redis connection to be used by default.
  |
  */
  connection: Env.get('REDIS_CONNECTION', 'local'),

  /*
  |--------------------------------------------------------------------------
  | local connection config
  |--------------------------------------------------------------------------
  |
  | Configuration for a named connection.
  |
  */
  local: {
    host: 'redis-17361.c114.us-east-1-4.ec2.cloud.redislabs.com:17361',
    port: 6379,
    password: 'WA2TOCJ04vLaslKRWS4SoTXzbUo0brVg',
    db: 'adonis',
    keyPrefix: ''
  },

  /*
  |--------------------------------------------------------------------------
  | cluster config
  |--------------------------------------------------------------------------
  |
  | Below is the configuration for the redis cluster.
  |
  */
  cluster: {
    clusters: [
      {
        host: 'redis-17361.c114.us-east-1-4.ec2.cloud.redislabs.com:17361',
        port: 6379,
        password: 'WA2TOCJ04vLaslKRWS4SoTXzbUo0brVg',
        db: 'adonis'
      },
      {
        host: 'redis-17361.c114.us-east-1-4.ec2.cloud.redislabs.com:17361',
        port: 6380,
        password: 'WA2TOCJ04vLaslKRWS4SoTXzbUo0brVg',
        db: 'adonis'
      }
    ]
  }
}
