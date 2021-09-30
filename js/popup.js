$(function(){
	function displayQR(url) {
		chrome.tabs.getSelected(window.id, function(tab) {
			$("#qrcode").html('');
			if (url != null) {
				if (url.length > 300) {
					// 300文字を超える場合は別ページでQRを表示
					chrome.tabs.create({url: "qr.html?url=" + encodeURIComponent(url)});
					return;
				}
				$("#qrcode").qrcode({
					width: 256,
					height: 256,
					correctLevel: 1, // 誤り訂正レベルをQRErrorCorrectLevel.Lに設定
					text: url
				});
				$('#h1_title').html('');
			} else {
				if (tab.url.length > 300) {
					// 300文字を超える場合は別ページでQRを表示
					chrome.tabs.create({url: "qr.html?url=" + encodeURIComponent(tab.url)});
					return;
				}
				$("#qrcode").qrcode({
					width: 256,
					height: 256,
					correctLevel: 1, // 誤り訂正レベルをQRErrorCorrectLevel.Lに設定
					text: tab.url
				});
				$('#h1_title').html(tab.title);
			}
		});
	}
	$('.qr-reflect').on('click', function() {
		var url = $('#url').val();
		if (url != "") {
			displayQR(url);
		}
	});
	displayQR();
});