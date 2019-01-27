const express = require('express');

const app = express();

app.get('/api/helloworld', (req, res) => {
    const result = "Hello World"

    res.json(result);
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);