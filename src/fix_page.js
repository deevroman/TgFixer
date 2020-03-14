document.querySelectorAll('a').forEach(function (elem) {
    let reg = /^((https:\/\/|http:\/\/)?(telegram|t)\.me\/([a-zA-z0-9_]+))$/g;
    if (reg.test(elem.href)) {
        elem.href = elem.href.replace(reg, "tg://resolve?domain=$4");
    }
    reg = /^((https:\/\/|http:\/\/)?(telegram|t)\.me\/joinchat\/([a-zA-z0-9_]+))$/g;
    if (reg.test(elem.href)) {
        elem.href = elem.href.replace(reg, "tg://resolve?invite=$4");
    }
});
