document.querySelectorAll("a[href*='t.me'], a[href*='telegram.org'], a[href*='telegram.dog']").forEach(function (elem) {
    let fixed_url = fixUrl(elem.href);
    if (fixed_url) {
        elem.href = fixed_url;
    }
});
