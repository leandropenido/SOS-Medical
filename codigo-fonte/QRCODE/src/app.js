const buttonQR = document.querySelector('#bttn-id');
const qrCodeDownload = document.querySelector('#qrcodeDownload');


buttonQR.addEventListener('click', (e) => {
	const userName = document.querySelector('#username').value;
	
	const qrCodeDiv = document.querySelector('#qrcode');
	qrCodeDiv.innerHTML = '';
	
	qrCodeDiv.style.visibility = 'visible';
	const qrcode = new QRCode(qrCodeDiv, {
		text: userName,
		width: 256,
		height: 256,
		colorDark: '#000',
		colorLight: '#fff',
		correctLevel: QRCode.CorrectLevel.H,
	});
	qrCodeDownload.style.visibility = 'visible';
	qrCodeDownload.disabled = false;
});

qrCodeDownload.addEventListener('click', () => {
	const qrCodeDiv = document.querySelector('#qrcode img');

	if (qrCodeDiv) {
		const link = document.createElement('a');
		link.href = qrCodeDiv.src;
		link.download = 'qrcode.png';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	} else {
		alert('Download falhou, por favor tente novamente');
	}

});


const greeting = () => {
	const hour = new Date().getHours();
	const emoji  = String.fromCodePoint(0x1f44b);
	if (hour >= 6 && hour < 12) {
		document.getElementById('greeting').innerHTML = 'Bom dia ' + emoji;
	} else if (hour >= 12 && hour < 18) {
		document.getElementById('greeting').innerHTML= 'Boa tarde ' + emoji;
	} else if (hour >= 18 || hour >= 0 && hour < 6) {
		document.getElementById('greeting').innerHTML = 'Boa noite ' + emoji;
	}
}
greeting();
