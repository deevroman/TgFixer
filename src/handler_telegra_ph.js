browser.webRequest.onBeforeRequest.addListener(
    function (details) {
        const path = details.url.match(/telegra.ph\/(.+)/)[1];
        return {
            redirectUrl: "https://graph.org/" + path
        };
    }, {
        urls: [
            "*://telegra.ph/*",
            "*://www.telegra.ph/*",
        ],
        types: ["main_frame", "sub_frame"]
    }, ["blocking"]
);