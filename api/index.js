const express = require('express');
const router = express.Router();

require('./routes/screen')(router);
module.exports = router;
