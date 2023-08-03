const express = require('express')
const route = express.Router()
const access_token = require('../../server/index/access_token')


route.get('/access-token', access_token);       
module.exports = route