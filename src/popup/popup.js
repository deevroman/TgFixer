const fixInput = event => {
    const fixedLink = fixUrl(event.target.value);
    if (fixedLink) {
        const a = document.createElement("a")
        a.textContent = fixedLink
        a.setAttribute("href", fixedLink)
        document.getElementById("output-link").replaceChildren(a)
    } else {
        document.getElementById("output-link").replaceChildren()
    }
};

document.getElementById("input-link").addEventListener('input', fixInput);
