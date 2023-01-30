  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAS248KWGzduWBnsNLs2Hn5RVzXubsJ6f8",
    authDomain: "doguito-petshop-edea6.firebaseapp.com",
    projectId: "doguito-petshop-edea6",
    storageBucket: "doguito-petshop-edea6.appspot.com",
    messagingSenderId: "929524484675",
    appId: "1:929524484675:web:33cf112d41044bcd4822f6",
    measurementId: "G-GSKJVTNL6T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);