function fixInput(event) {
    let obj = new Object({href: event.target.value});
    if (fixUrl(obj)) {
        let fixedLink = obj.href;
        document.getElementById("output-link").innerHTML = "<a href='" + fixedLink + "'>" + fixedLink + "</a>";
    } else {
        document.getElementById("output-link").innerHTML = "";
    }
}

document.getElementById("input-link").addEventListener('input', fixInput);
