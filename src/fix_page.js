document.querySelectorAll('a').forEach(function (elem) {
    let reg = /^((https:\/\/|http:\/\/)?(telegram|t)\.me\/([a-zA-z0-9_]{1,}))/g;
    elem.href = elem.href.replace(reg, "tg://resolve?domain=$4");
    // reg = /^((https:\/\/|http:\/\/)?(telegram|t)\.me\/joinChat\/([a-zA-z0-9_]{1,}))/g;
    // elem.href = elem.href.replace(reg, "tg://resolve?invite=$4");
});