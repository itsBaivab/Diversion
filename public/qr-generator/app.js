function handleSubmit(event) {
	event.preventDefault();
	let text = document.getElementById("inptxt").value;
	let qrsrc =
		`http://api.qrserver.com/v1/create-qr-code/?data=${text}`;
	let qrimg = document.getElementById("qrimg");
	qrimg.src = qrsrc;
}


// function onScanSuccess(decodedText, decodedResult) {
//     // Handle on success condition with the decoded text or result.
//     console.log(`Scan result: ${decodedText}`, decodedResult);
// }

// var html5QrcodeScanner = new Html5QrcodeScanner(
// 	"reader", { fps: 10, qrbox: 250 });
// html5QrcodeScanner.render(onScanSuccess);