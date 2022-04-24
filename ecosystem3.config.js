
module.exports = {
  apps: [
    {
      name: 'my-app3',
      script: './server.js',
      env: {
        NODE_ENV: 'DEV',
        PORT: 8083
      },
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}