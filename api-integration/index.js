// API Token key and secret are available from control panel when API token is generated
const key = 'dacaffe7ce69dfd1071531e925f667905a1c981fb40d06c676880e84352cb3aa';
const secret = '5b70319201e9abad12a3458b32ed30cf634ef569ea47906e5012baf11cab5046';

// Hash time and key with secret
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', secret);
const epoch = Math.floor(Date.now() / 1000);
hmac.update(`${key}${epoch}`);
const hash = hmac.digest('hex');
const token = `${key}_${epoch}_${hash}`;

// send token as X-Deki-Client HTTP header to MindTouch API (https://github.com/request/request is used in this example)
const request = require('request');
request({
  url: 'https://success.example.com/@api/deki/pages/home/info',
  headers: {
    'X-Deki-Token': token
  }
}, (error, response, body) => {

  // ...
});

