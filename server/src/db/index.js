import mongoose from 'mongoose';
import config from '../config';

class Database {
  constructor() {
    this.dbConnect();
  }
  dbConnect() {
    mongoose
      .connect(config.databaseUrl[config.environment], {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })
      .then(() => {
        console.log('Database connected successfully');
      })
      .catch(() => {
        console.log('Database connection failed');
      });
  }
}
export default new Database();
