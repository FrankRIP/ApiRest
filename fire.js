var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {

  apiKey: "AIzaSyC8tuN1yodpDZvMkaq5PLSdf0PHgsbOLIc",
  authDomain: "esp32-papuchis.firebaseapp.com",
  databaseURL: "https://esp32-papuchis-default-rtdb.firebaseio.com",
  projectId: "esp32-papuchis",
  storageBucket: "esp32-papuchis.appspot.com",
  messagingSenderId: "525344411410",
  appId: "1:525344411410:web:d22e7428467391b90c2dcb",
  measurementId: "G-P760SZ9JY4"

};
const fire = firebase.initializeApp(config);
module.exports = fire;