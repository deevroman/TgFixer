browser.webRequest.onBeforeRequest.addListener(
    function (details) {
        let url;
        const path = details.url.match(/t.me\/(.+)/)[1];
        // stickerpacks
        if (path.startsWith("addsticker")) {
            url = "tg://" + path.replace("/", "?set=");
        }
        // socks proxy
        else if (path.startsWith("socks")) {
            url = "tg://" + path;
        }
        // invite
        else if (path.startsWith("joinchat")) {
            url = "tg://" + path.replace("joinchat/", "join?invite=");
        }
        // channel posts and bots with params
        else {
            url = "tg://resolve?domain=" + path.replace("/", "&post=").replace("?", "&");
        }
        return {
            redirectUrl: url
        };
    }, {
        urls: [
            "*://t.me/*",
            "*://www.t.me/*",
        ],
        types: ["main_frame", "sub_frame"]
    }, ["blocking"]
);