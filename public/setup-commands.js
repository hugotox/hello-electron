const { ipcMain } = require('electron')
const { spawn } = require('child_process')

module.exports = () => {
  console.log('setting up commands')

  ipcMain.on('asynchronous-message', (event, arg) => {
    const command = spawn('ls', ['-la'])

    command.stdout.on('data', (data) => {
      event.reply('asynchronous-reply', `stdout: ${data}`)
    })

    command.stderr.on('data', (data) => {
      event.reply(`'asynchronous-reply',stderr: ${data}`)
    })

    command.on('close', (code) => {
      event.reply('asynchronous-reply', `child process exited with code ${code}`)
    })
  })
}
