const { ipcMain } = require('electron')
const { spawn } = require('child_process')

const setupCommands = () => {
  console.log('setting up commands')

  ipcMain.on('asynchronous-message', (event, command, args) => {
    const process = spawn(command, args)

    process.stdout.on('data', (data) => {
      event.reply('asynchronous-reply', `stdout: ${data}`)
    })

    process.stderr.on('data', (data) => {
      event.reply(`'asynchronous-reply',stderr: ${data}`)
    })

    process.on('close', (code) => {
      event.reply('asynchronous-reply', `child process exited with code ${code}`)
    })
  })
}

module.exports = { setupCommands }
