const fixUrl = elem => {
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
    // posts links
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/s\/([a-zA-Z0-9_]+)\?before=([0-9]+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://resolve?domain=$4&post=$5");
    }
    // channel links
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/s\/([a-zA-Z0-9_]+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://resolve?domain=$4");
    }
    // direct message links
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/m\/([a-zA-Z0-9_]+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://message?slug=$4");
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
    // sticker and emoji links
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/(addstickers|addemoji)\/([a-zA-Z0-9_]+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://$4?set=$5");
    }
    // language links
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/(setlanguage)\/([a-zA-Z0-9_]+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://$4?lang=$5");
    }
    // slug links
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/(addlist|addtheme|addstyle|call|invoice|giftcode|nft|auction)\/([a-zA-Z0-9_]+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://$4?slug=$5");
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
    // phone number
    reg = /^((https:\/\/|http:\/\/)?(telegram\.me|telegram\.dog|t\.me)\/\+([0-9]+))$/g;
    if (reg.test(elem)) {
        return elem.replace(reg, "tg://resolve?phone=$4");
    }

    return false;
}