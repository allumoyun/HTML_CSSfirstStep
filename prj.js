function fon() {
	let main1 = document.querySelector('div.main');
	if (main1) main1.className = 'main2';
	else document.querySelector('div.main2').className = 'main';
}