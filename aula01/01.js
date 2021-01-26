epxio.send = function (cmd, payload) {
	payload.page = epxio.page;
	data = JSON.stringify({"emit": cmd, "payload": payload});
	epxio.iframe.contentWindow.postMessage(data,
			epxio.origin);
};

epxio.ajax = function (cmd, payload) {
	payload.page = epxio.page;
	data = JSON.stringify({"ajax": cmd, "payload": payload});
	epxio.iframe.contentWindow.postMessage(data,
			epxio.origin);
};
