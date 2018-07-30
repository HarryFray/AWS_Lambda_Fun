'use strict'

const express = require('express');
let app = express();



app.get('/', (req, res) => {
  res.send('Hello World!')
})

let port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

