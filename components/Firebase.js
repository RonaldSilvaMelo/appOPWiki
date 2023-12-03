import { initializeApp } from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBXXwQ8pY__09FLb22rjYluEqziOqFTtRM',
  authDomain: 'opw-db.firebaseapp.com',
  projectId: 'opw-db',
  storageBucket: 'opw-db.appspot.com',
  messagingSenderId: '742043601960',
  appId: '1:742043601960:web:f0eaf90afc3eddbfd0f91d',
  measurementId: 'G-85SB8T73YD',
};

const app = initializeApp(firebaseConfig);

export default app;
