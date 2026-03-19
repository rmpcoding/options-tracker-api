// import app from "./src/app.js";
// import { connectToDB } from "./src/config/mongoose.js";

// const PORT = process.env.PORT || 8080;

// // connectToDB();

// app.listen(PORT, () => {
//   console.log(`App listening on PORT http://localhost:${PORT} 🚀`);
// });

import app from './src/app'
import connectDB from './src/config/db/connect-db'
import config from './src/config/config'

function appListen() {
  return app.listen(config.port, () => {
    console.log(`App listening on PORT http://localhost:${config.port} 🚀`)
  })
}

let server: any;

async function startServer() {
  try {
    server = await connectDB(appListen)
  } catch (error) {
    
  }
}

// connectDB(appListen)


async function gracefulShutdown() {
  console.log('Received shutdown signal, shutting down gracefully...')
  if (server) {
    server.close(() => {
      console.log('Closed out remaining connections')
      process.exit(0)
    })
  } else {
    process.exit(0)
  }
}

const unexpectedErrorHandler = (error: any) => {
  // logger.info('Unexpected error:', error);
  console.log('Unexpected error:', error)
  gracefulShutdown();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

startServer();
