const firebaseConfig = {
    apiKey: "AIzaSyDygFHAVHBtjI21kuhmhFsLltZWOwrUE5g",
    authDomain: "disneyplus-app-c20de.firebaseapp.com",
    projectId: "disneyplus-app-c20de",
    storageBucket: "disneyplus-app-c20de.appspot.com",
    messagingSenderId: "126863358902",
    appId: "1:126863358902:web:e52e862438e1a8dcec5f17",
    measurementId: "G-3J38G2XJKQ"
  };

  
  const firebaseApp = firebase.initialize(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;