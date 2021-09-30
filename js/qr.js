$(function() {
	function getParam(name, url) {
		if (!url) url = window.location.href;
    	name = name.replace(/[\[\]]/g, "\\$&");
    	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    		results = regex.exec(url);
    	if (!results) return null;
    	if (!results[2]) return '';
    	return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
	$("#qrcode").html('');
	$("#qrcode").qrcode({
		width: 640,
		height: 640,
		correctLevel: 1, // 誤り訂正レベルをQRErrorCorrectLevel.Lに設定
		text: getParam('url')
	});
});