function fixInput(event) {
    let fixedLink = fixUrl(event.target.value);
    if (fixedLink) {
        document.getElementById("output-link").innerHTML = "<a href='" + fixedLink + "'>" + fixedLink + "</a>";
    } else {
        document.getElementById("output-link").innerHTML = "";
    }
}

document.getElementById("input-link").addEventListener('input', fixInput);
