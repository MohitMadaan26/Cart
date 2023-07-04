import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import App from './App';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJuaqyw5fBVp1a3ENhnlOsKhcVGDsPsy4",
  authDomain: "cart-87bd7.firebaseapp.com",
  projectId: "cart-87bd7",
  storageBucket: "cart-87bd7.appspot.com",
  messagingSenderId: "521440599415",
  appId: "1:521440599415:web:f986756715704e193b1572"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const rootElement = document.getElementById('root');

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
};

renderApp();
