function fixUrl(elem){
    let reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/([a-zA-Z0-9_]+))$/g;
    if (reg.test(elem.href)) {
        elem.href = elem.href.replace(reg, "tg://resolve?domain=$4");
        return true;
    }
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/([a-zA-Z0-9_]+)\/([0-9]*))$/g;
    if (reg.test(elem.href)) {
        elem.href = elem.href.replace(reg, "tg://resolve?domain=$4&post=$5");
        return true;
    }

    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/joinchat\/([a-zA-Z0-9_\-]+))$/g;
    if (reg.test(elem.href)) {
        elem.href = elem.href.replace(reg, "tg://resolve?invite=$4");
        return true;
    }

    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/addstickers\/([a-zA-Z0-9_]+))$/g;
    if (reg.test(elem.href)) {
        elem.href = elem.href.replace(reg, "tg://addstickers?set=$4");
        return true;
    }
    return false;
}