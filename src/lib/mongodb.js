import { MongoClient } from 'mongodb';

// Check if MongoDB URI is available
const uri = process.env.MONGODB_URI;

if (!uri && process.env.NODE_ENV !== 'development') {
  console.warn('MongoDB URI not provided. Database functionality will be limited.');
}

let client;
let clientPromise;

if (uri) {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
} else {
  // Mock client for build process when no URI is available
  clientPromise = Promise.reject(new Error('MongoDB URI not configured'));
}

export default clientPromise; 