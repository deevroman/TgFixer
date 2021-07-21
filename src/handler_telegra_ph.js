browser.webRequest.onBeforeRequest.addListener(
    function (details) {
        return {
            redirectUrl: "https://graph.org/" + details.url.match(/telegra.ph\/(.*)/)[1]
        };
    }, {
        urls: [
            "*://telegra.ph/*",
            "*://www.telegra.ph/*",
        ],
        types: ["main_frame", "sub_frame"]
    }, ["blocking"]
);