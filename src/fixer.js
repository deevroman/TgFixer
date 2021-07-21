function fixUrl(elem) {
    let reg;
    // usernames
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/([a-zA-Z0-9_]+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://resolve?domain=$4");
    }
    // channel posts
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/([a-zA-Z0-9_]+)\/([0-9]*))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://resolve?domain=$4&post=$5");
    }
    // bot with params
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/([a-zA-Z0-9_]+)\?start=([a-zA-Z0-9_]*))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://resolve?domain=$4&start=$5");
    }
    // invite links
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/joinchat\/([a-zA-Z0-9_\-]+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://join?invite=$4");
    }
    // stickerpacks links
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/addstickers\/([a-zA-Z0-9_]+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://addstickers?set=$4");
    }
    // socks proxy
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/socks\?(.+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://socks?$4");
    }
    // mtproto proxy
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/proxy\?(.+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://proxy?$4");
    }
    // share link
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/share\?(.+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://msg_url?$4");
    }

    return false;
}