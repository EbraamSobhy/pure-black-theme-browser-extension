function forceBlack() {
    document.querySelectorAll("*").forEach(el => {
        // Skip media elements entirely
        if (['IMG', 'VIDEO', 'SVG', 'PICTURE', 'CANVAS'].includes(el.tagName)) return;

        const style = getComputedStyle(el);

        // Only turn it black if it's not transparent and isn't a media element
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
