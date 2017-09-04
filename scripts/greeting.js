var exec = require('child_process').exec

module.exports = robot => {
  robot.hear(/你好/, res => {
    res.send('主人，您好！')
  })
  robot.hear(/列出当前目录/, res => {
    exec('tree -L 1', (error, stdout) => {
      console.log(stdout)
      res.send(stdout)
    })
  })
}

