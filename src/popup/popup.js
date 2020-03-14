function fixUrl(event) {
    let reg = /^((https:\/\/|http:\/\/)?(telegram|t)\.me\/([a-zA-z0-9_]{1,}))$/g;
    if (reg.test(event.target.value)) {
        let fixedLink = event.target.value.replace(reg, "tg://resolve?domain=$4");
        document.getElementById("output-link").innerHTML = "<a href='" + fixedLink + "'>" + fixedLink + "</a>";
    } else {
        let reg = /^((https:\/\/|http:\/\/)?(telegram|t)\.me\/joinchat\/([a-zA-z0-9_]{1,}))$/g;
        if (reg.test(event.target.value)) {
            let fixedLink = event.target.value.replace(reg, "tg://resolve?invite=$4");
            document.getElementById("output-link").innerHTML = "<a href='" + fixedLink + "'>" + fixedLink + "</a>";
        } else {
            document.getElementById("output-link").innerHTML = "";
        }
    }
}

document.getElementById("input-link").addEventListener('input', fixUrl);