function forceBlack() {
    document.querySelectorAll("*").forEach(el => {
        if (['IMG', 'VIDEO', 'SVG', 'PICTURE', 'CANVAS'].includes(el.tagName)) return;

        const style = getComputedStyle(el);

        if (
            style.backgroundColor !== "rgba(0, 0, 0, 0)" &&
            style.backgroundColor !== "transparent"
        ) {
            el.style.backgroundColor = "#000";
        }

        if (style.color === "rgb(0, 0, 0)") {
            el.style.color = "#fff";
        }
    });
}

forceBlack();

new MutationObserver(forceBlack).observe(document.documentElement, {
    childList: true,
    subtree: true
});
