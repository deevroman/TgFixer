const fixAllOnPage = () => {
    document.querySelectorAll("a[href*='t.me'], a[href*='telegram.me'], a[href*='telegram.dog']").forEach(elem => {
        const fixed_url = fixUrl(elem.href);
        if (fixed_url) {
            elem.href = fixed_url;
            if (elem.getAttribute("target") === "_blank") {
                elem.removeAttribute("target")
            }
        }
    });
};

const sleep = async ms => {
    await new Promise(r => setTimeout(r, ms))
};

const main = async () => {
    for (const delay of [0, 500, 500, 500, 500, 500, 500, 1000, 1000, 5000, 5000, 5000, 5000, 5000, 5000]) {
        await sleep(delay)
        fixAllOnPage()
    }
    // calling setInterval all the time is a bad idea,
    // especially if the user has a lot of tabs or uses a mobile device.
    // Instead, it is better to wake up after user interaction.
    document.addEventListener("click", main, {once: true})
    document.addEventListener("scrollend", main, {once: true})
};

void main()
