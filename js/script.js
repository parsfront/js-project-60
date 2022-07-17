(function () {
    document.addEventListener("keyup", (event) => {
        if (event.target.matches(".count-chars")) {
            const value = event.target.value;
            const valueLength = event.target.value.length;
            const maxChars = event.target.getAttribute("data-max-chars");
            const remaining = maxChars - valueLength;
            if (valueLength > maxChars) {
                event.target.value = value.substr(0, maxChars);
                return;
            }
            event.target.nextElementSibling.innerHTML = remaining + " کارکتر باقی مانده";
        }
    });
})();
