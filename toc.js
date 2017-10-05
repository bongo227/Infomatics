window.addEventListener("scroll", () => {
    const selector = ".md-sidebar--secondary .md-nav--secondary > ul > li";
    const top_level_items = document.querySelectorAll(selector);
    let counter = -1
    
    top_level_items.forEach((element) => {
        if (element.querySelector("a").dataset.mdState == "blur") {
            counter += 1
        }
    }, this);

    top_level_items.forEach((element) => {
        nav = element.querySelector("nav");
        if (counter != 0) {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }

        counter -= 1;
    });

    console.log(counter);
});