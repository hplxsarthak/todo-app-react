import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//  Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQlxvwCpQ_sEdnoDO0YsP90tc30rthmDA",
  authDomain: "todo-list-235e4.firebaseapp.com",
  projectId: "todo-list-235e4",
  storageBucket: "todo-list-235e4.appspot.com",
  messagingSenderId: "776406699357",
  appId: "1:776406699357:web:c54797144053eb79ce6cb4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
