  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAzdauLRqxp1zCxnhpZFqVK2EF7Y-DSzFM",
    authDomain: "doguito-petshop.firebaseapp.com",
    projectId: "doguito-petshop",
    storageBucket: "doguito-petshop.appspot.com",
    messagingSenderId: "985460390772",
    appId: "1:985460390772:web:a28e2e690dab69ba8e4a21",
    measurementId: "G-9QZ6QCQVJ0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
