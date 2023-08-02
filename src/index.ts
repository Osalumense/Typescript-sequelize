import app from './app'
import config from './config/AppConfig'

const PORT = config.PORT

app.listen(PORT, async () => {
  console.log(`Server up and running on ${PORT}`);
});