var request = require('request')

module.exports = robot => {
  robot.catchAll(res => {
    let data = {
      json: {
        "key": "9ef1dd95a1554759b1662c0b9908db08",
        "info": res.message.text,
      }
    }
    request.post('http://www.tuling123.com/openapi/api', data, (error, response, body) => {
        if (!error && response.statusCode == 200 && body) {
          res.send(body);
        } else {
          res.send(error)
        }
      })
  })
}
