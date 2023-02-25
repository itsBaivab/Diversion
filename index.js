const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in, redirect to dashboard.html
      window.location.href = ".\\public\\index.html";
      // console.log("hi");
      return 0;
    } else {
      // No user is signed in, redirect to login.html
      window.location.href = "index.html";
      return 0;
    }
  });
