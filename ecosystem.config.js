
module.exports = {
  apps: [
    {
      name: 'my-app',
      script: './server.js',
      env: {
        NODE_ENV: 'DEV',
        PORT: 8081
      },
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}