
module.exports = {
  apps: [
    {
      name: 'my-app2',
      script: './server.js',
      env: {
        NODE_ENV: 'DEV',
        PORT: 8082
      },
      instances: 4,
      exec_mode: 'cluster'
    }
  ]
}