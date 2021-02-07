const express = require('express')

const app = express()

app.use(express.static('./dist'))

app.listen(88, () => {
    console.log('sever running at http://127.0.0.1:88');
})