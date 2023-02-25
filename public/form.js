const form = document.querySelector('#add-details');
const db = firebase.firestore();



form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('Users').add({
        name: form.name.value,
        gender: form.gender.value,
        number: form.number.value,
        bloodgroup: form.bloodgroup.value,
        nationality: form.nationality.value,
        aadhar: form.aadhar.value
    });
    // form.name.value = "";
    // redirect to another page
    window.location.href =".//Dashboard//dashboard.html"
})
