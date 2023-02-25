// Import the Firebase SDK
import { initializeApp, firestore } from 'firebase';
const form = document.querySelector(zx)

// Initialize Firebase with your project's configuration
const firebaseConfig = {
  // TODO: Replace with your own Firebase configuration
  apiKey: "AIzaSyAa1G7qBEyXxSvE7dUZ2ZYUv1aE7dGe-RE",
  authDomain: "infoder-49968.firebaseapp.com",
  projectId: "infoder-49968",
  storageBucket: "infoder-49968.appspot.com",
  messagingSenderId: "95232425124",
  appId: "1:95232425124:web:9866678d60431754d87a31",
  measurementId: "G-GRY5CZHYLN"
};
initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = firestore();

// Save data to Firestore
db.collection('users').add({
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 30
})
.then(docRef => {
  console.log('Data saved with ID:', docRef.id);
})
.catch(error => {
  console.error('Error saving data:', error);
});
