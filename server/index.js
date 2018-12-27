// The entrey point file
const app = require('./app');

const port = app.get('port');
app.listen(port, () => console.log(`The server is running at port ${port}`));
