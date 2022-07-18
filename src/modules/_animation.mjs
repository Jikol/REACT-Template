export default class Animation {
    static fadeIn(selector) {
        return new Promise((resolve) => {
            this.controlInteractiveItems(false);
            selector = Animation.convertSelector(selector);
            selector.classList.add("fade-in");
            selector.onanimationend = () => {
                selector.classList.remove("fade-in");
                Animation.controlInteractiveItems(true);
                resolve();
            };
        });
    }

    static fadeOut(selector) {
        return new Promise((resolve) => {
            this.controlInteractiveItems(false);
            selector = Animation.convertSelector(selector);
            selector.classList.add("fade-out");
            selector.onanimationend = () => {
                selector.classList.remove("fade-out");
                Animation.controlInteractiveItems(true);
                resolve();
            };
        });
    }

    static convertSelector(selector) {
        if (selector.length) {
            return selector[0];
        }
        return selector;
    }

    static controlInteractiveItems(mode) {
        const interactiveItems = document.querySelectorAll("button");
        interactiveItems.forEach((item) => {
            item.disabled = !mode;
        });
    }
}
