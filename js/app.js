(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const chooseColor = document.querySelectorAll(".choose-color-btn");
    const contentItem = document.querySelectorAll(".content-item");
    const color_change_open = evt => {
        const target = evt.currentTarget;
        const button = target.dataset.button;
        const contentActive = document.querySelectorAll(`.${button}`);
        chooseColor.forEach((item => {
            item.classList.remove("choose-color-btn--active");
        }));
        target.classList.add("choose-color-btn--active");
        contentItem.forEach((item => {
            item.classList.remove("content-item--active");
        }));
        contentActive.forEach((item => {
            item.classList.toggle("content-item--active");
        }));
    };
    chooseColor.forEach((elem => {
        elem.addEventListener("click", color_change_open);
    }));
    window["FLS"] = true;
    isWebp();
})();