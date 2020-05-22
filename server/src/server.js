import app from './app';

const { PORT } = process.env;

app.listen(PORT);

console.log(`server listening on port ${PORT}`);
