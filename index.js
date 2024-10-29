const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, world v1.0.12! The API is running.');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
