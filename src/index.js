import 'module-alias/register';
import app from './app';
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
