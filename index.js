const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from Docker!');
});

app.listen(port, () => { console.log('Our App Is Up , cool And Running!'); });
module.exports = app
