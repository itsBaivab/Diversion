const express = require('express');
const firebase = require('firebase');
// Initialize Firebase
const firebaseConfig = {
  // TODO: Add your our config here
  apiKey: "AIzaSyAa1G7qBEyXxSvE7dUZ2ZYUv1aE7dGe-RE",                                                                                                                                                                                                                                              
  authDomain: "infoder-49968.firebaseapp.com",
  projectId: "infoder-49968",
  storageBucket: "infoder-49968.appspot.com",
  messagingSenderId: "95232425124",
  appId: "1:95232425124:web:9866678d60431754d87a31",
  measurementId: "G-GRY5CZHYLN"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Create a Firestore reference
const db = firestore();

// Define your routes and middleware
app.get('/users', (req, res) => {
  // Use the Firestore reference to fetch all users from the database
  db.collection('users').get()
    .then(snapshot => {
      const users = snapshot.docs.map(doc => doc.data());
      res.json(users);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error fetching users');
    });
});

app.post('/users', (req, res) => {
  // Use the Firestore reference to create a new user in the database
  const newUser = req.body;
  db.collection('users').add(newUser)
    .then(docRef => {
      res.json({ id: docRef.id, ...newUser });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error creating user');
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
