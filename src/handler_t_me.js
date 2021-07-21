browser.webRequest.onBeforeRequest.addListener(
    function (details) {
        return {
            redirectUrl: fixUrl(details.url.match(/t.me\/(.+)/)[1])
        };
    }, {
        urls: [
            "*://t.me/*",
            "*://www.t.me/*",
        ],
        types: ["main_frame", "sub_frame"]
    }, ["blocking"]
);