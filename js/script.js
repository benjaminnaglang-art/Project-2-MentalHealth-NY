const bars = document.querySelector("#bars");
const icon = document.querySelector("#bars > i");

const openNav = () => {
    /* navigation */
    document.querySelector("nav > ul").classList.toggle("show");
    /* icon */
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
    /* aria-expanded */
    const expanded = bars.getAttribute("aria-expanded") === "true";
    bars.setAttribute("aria-expanded", expanded ? "false" : "true");
    /* aria-label */
    const isClosed = bars.getAttribute("aria-label") === "open navigation";
    bars.setAttribute("aria-label", isClosed ? "close navigation" : "open navigation");
};

bars.addEventListener("click", openNav);