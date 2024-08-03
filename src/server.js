const app = require('./app');
const { PORT } = require('./config/env');

app.listen(PORT || 8080, () => {
  console.log(`Server is running on port ${PORT}`);
});
