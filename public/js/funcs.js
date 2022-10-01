const menu = (menuButton) => {
    const menu = document.querySelector(".mobileMenu");
    const body = document.querySelector("body");
    const menuButtons = document.querySelectorAll(".menuButton");

    if (menu.classList.contains("mobileMenuActive")) {
        menu.classList.remove("mobileMenuActive");

        menuButtons.forEach(menuButton => {
            menuButton.classList.remove("menuButtonActive");
        });

        body.classList.remove("noScroll");
    } else {
        menu.classList.add("mobileMenuActive");

        menuButtons.forEach(menuButton => {
            menuButton.classList.add("menuButtonActive");
        });

        body.classList.add("noScroll");
    }
}

const langToggle = (element) => {
    const parent = element.parentElement;
    const currLang = element.dataset.lang;
    const currLangText = element.textContent.replaceAll(" ", "");

    if (element.classList.contains("lang") && !element.querySelector("img").classList.contains("transformed")) {
        element.querySelector("img").classList.add("transformed");
        parent.querySelector(".secondLang").classList.remove("notDisplayed");
    } else if (element.classList.contains("lang")) {
        element.querySelector("img").classList.remove("transformed");
        parent.querySelector(".secondLang").classList.add("notDisplayed");
    }

    if (element.classList.contains("secondLang")) {

        const prevLangText = element.textContent.replaceAll(" ", "");

        const img = parent.querySelector("img");
        parent.querySelector(".lang").innerHTML = currLangText;
        parent.querySelector(".lang").appendChild(img);

        element.innerHTML = prevLangText;

        setCookie("lang", currLang, options = {
            "max-age": 31536000
        });

        parent.querySelector(".lang").querySelector("img").classList.remove("transformed");
        element.classList.add("notDisplayed");

        location.reload();
    }
}

const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


const setCookie = (name, value, options = {}) => {
    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

const scrollToElement = (elementId) => {
    const element = document.querySelector(`#${elementId}`);

    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}

const preloader = () => {
    const video = document.querySelector(".videoBlock video");
    video.play();

    const preloader = document.querySelector(".preloader");
    preloader.remove();

    const menu = document.querySelector(".menu");
    menu.classList.add("fadeInDown");

    const topBlock = document.querySelector(".topBlock");
    topBlock.classList.add("topBlockAfterPreloader");

    const topBlockText = document.querySelector(".topBlockText");
    topBlockText.classList.add("fadeInUp");
}

const send = async (link) => {
    const form = document.querySelector(".form");

    if (form.querySelector("#rules").checked == false) {
        return;
    }

    const dataRaw = form.querySelectorAll("input, textarea")

    let data = {}

    for (let i = 0; i < dataRaw.length; i++) {
        let element = dataRaw[i]

        data[element.name] = element.value

        if (element.required && element.value.length == 0) {
            alert("Not all fields are filled in")
            return;
        }
    }

    console.log(data)

    // const data = {
    //     name: form.querySelector("#name").value,
    //     email: form.querySelector("#email").value,
    // };

    const response = await fetch(link, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.message == "ok") {

        for (let i = 0; i < dataRaw.length; i++) {
            let element = dataRaw[i]

            if (element.type == "checkbox") {
                element.checked = false;
            } else {
                element.value = ""   
            }
        }
    }
}

const stickyMenu = () => {
    const stickyMenu = document.querySelector(".sticky");
    const stickyMenuMobileButton = document.querySelector("#stickyMobile");
    const stickyOpenMobile = document.querySelector(".mobileOpenSticky");

    if (window.innerHeight * 0.7 <= window.scrollY) {
        stickyMenu.classList.remove("notDisplayed");
        stickyMenu.classList.add("fadeInDown");

        stickyMenuMobileButton.classList.contains("notDisplayed") ? stickyMenuMobileButton.classList.remove("notDisplayed") : "";
        stickyMenuMobileButton.classList.add("fadeInDown");

        stickyOpenMobile.classList.remove("notDisplayed");
        stickyOpenMobile.classList.add("fadeInDown");

    } else {
        stickyMenu.classList.add("notDisplayed");

        stickyMenuMobileButton.classList.add("notDisplayed");

        stickyOpenMobile.classList.add("notDisplayed");
    }

    window.innerHeight <= window.scrollY ? stickyMenu.classList.add("fixed") : stickyMenu.classList.remove("fixed");

    window.innerHeight <= window.scrollY ? stickyMenuMobileButton.classList.add("fixedMobileButton") : stickyMenuMobileButton.classList.remove("fixedMobileButton");

    window.innerHeight <= window.scrollY ? stickyOpenMobile.classList.add("fixedOpen") : stickyOpenMobile.classList.remove("fixedOpen");
}

window.addEventListener("load", () => {
    preloader();

    stickyMenu();
});

window.addEventListener("scroll", () => {
    stickyMenu();
});
