//------------------
//----NAVIGATION----
//------------------

const menuOpen = document.getElementById("nav-menu-lines");
const menuClose = document.getElementById("nav-menu-close");
const navLink = document.getElementById("nav-menu");
const menuBk = document.querySelector(".nav-bk");

menuOpen.addEventListener("click", () => {
    navLink.classList.add("active");
    menuBk.classList.add("active");
    menuClose.classList.add("active");
    menuOpen.classList.remove("active");
});
menuClose.addEventListener("click", () => {
    navLink.classList.remove("active");
    menuBk.classList.remove("active");
    menuOpen.classList.add("active");
    menuClose.classList.remove("active");
});

//------------------
//-----PLANNER
//------------------

//Chevron Toggler
const toggles = document.querySelectorAll(".dropdown-chevron");

const optionPref = document.querySelectorAll(".option.preference-option");
const optionBean = document.querySelectorAll(".option.bean-type-option");
const optionQty = document.querySelectorAll(".option.quantity-option");
const optionGrind = document.querySelectorAll(".option.grind-option");
const optionDeliv = document.querySelectorAll(".option.delivery-option");

const preferPref = document.querySelector(".preference-dropdown");
const preferBean = document.querySelector(".bean-type-dropdown");
const preferQty = document.querySelector(".quantity-dropdown");
const preferGrind = document.querySelector(".grind-dropdown");
const preferDeliv = document.querySelector(".delivery-dropdown");

const selectPref = document.querySelector("li.planner-selector.preference");
const selectBean = document.querySelector("li.planner-selector.bean-type");
const selectQty = document.querySelector("li.planner-selector.quantity");
const selectGrind = document.querySelector("li.planner-selector.grind");
const selectDeliv = document.querySelector("li.planner-selector.delivery");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
        if (preferPref.classList.contains("active")) {
            selectPref.classList.add("prefActive");
        } else {
            selectPref.classList.remove("prefActive");
        }
    });
});
toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        if (preferBean.classList.contains("active")) {
            selectBean.classList.add("prefActive");
        } else {
            selectBean.classList.remove("prefActive");
        }
    });
});
toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        if (preferQty.classList.contains("active")) {
            selectQty.classList.add("prefActive");
        } else {
            selectQty.classList.remove("prefActive");
        }
    });
});

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        if (preferGrind.classList.contains("active")) {
            selectGrind.classList.add("prefActive");
        } else {
            selectGrind.classList.remove("prefActive");
        }
    });
});

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        if (preferDeliv.classList.contains("active")) {
            selectDeliv.classList.add("prefActive");
        } else {
            selectDeliv.classList.remove("prefActive");
        }
    });
});

//Toggle click PREFERENCES - OPTION cards
for (let i = 0; i < optionPref.length; i++) {
    optionPref[i].addEventListener("click", toggleActivePref);
}

function toggleActivePref() {
    if (optionPref[1].classList.contains("active") || optionPref[2].classList.contains("active")) {
        this.classList.add("active");
        optionPref[1].classList.remove("active");
        optionPref[2].classList.remove("active");
    } else if (
        optionPref[0].classList.contains("active") ||
        optionPref[2].classList.contains("active")
    ) {
        this.classList.add("active");
        optionPref[0].classList.remove("active");
        optionPref[2].classList.remove("active");
    } else {
        this.classList.add("active");
        optionPref[0].classList.remove("active");
        optionPref[1].classList.remove("active");
    }
    this.classList.add("active");
}

//Toggle click BEAN TYPE - OPTION cards
for (let i = 0; i < optionBean.length; i++) {
    optionBean[i].addEventListener("click", toggleActiveBean);
}

function toggleActiveBean() {
    if (optionBean[1].classList.contains("active") || optionBean[2].classList.contains("active")) {
        this.classList.add("active");
        optionBean[1].classList.remove("active");
        optionBean[2].classList.remove("active");
    } else if (
        optionBean[0].classList.contains("active") ||
        optionBean[2].classList.contains("active")
    ) {
        this.classList.add("active");
        optionBean[0].classList.remove("active");
        optionBean[2].classList.remove("active");
    } else {
        this.classList.add("active");
        optionBean[0].classList.remove("active");
        optionBean[1].classList.remove("active");
    }
    this.classList.add("active");
}
//Toggle click QUANTITY - OPTION cards
for (let i = 0; i < optionQty.length; i++) {
    optionQty[i].addEventListener("click", toggleActiveQty);
}

function toggleActiveQty() {
    if (optionQty[1].classList.contains("active") || optionQty[2].classList.contains("active")) {
        this.classList.add("active");
        optionQty[1].classList.remove("active");
        optionQty[2].classList.remove("active");
    } else if (
        optionQty[0].classList.contains("active") ||
        optionQty[2].classList.contains("active")
    ) {
        this.classList.add("active");
        optionQty[0].classList.remove("active");
        optionQty[2].classList.remove("active");
    } else {
        this.classList.add("active");
        optionQty[0].classList.remove("active");
        optionQty[1].classList.remove("active");
    }
    this.classList.add("active");
}
//Toggle click QUANTITY - OPTION cards
for (let i = 0; i < optionGrind.length; i++) {
    optionGrind[i].addEventListener("click", toggleActiveGrind);
}

function toggleActiveGrind() {
    if (
        optionGrind[1].classList.contains("active") ||
        optionGrind[2].classList.contains("active")
    ) {
        this.classList.add("active");
        optionGrind[1].classList.remove("active");
        optionGrind[2].classList.remove("active");
    } else if (
        optionGrind[0].classList.contains("active") ||
        optionGrind[2].classList.contains("active")
    ) {
        this.classList.add("active");
        optionGrind[0].classList.remove("active");
        optionGrind[2].classList.remove("active");
    } else {
        this.classList.add("active");
        optionGrind[0].classList.remove("active");
        optionGrind[1].classList.remove("active");
    }
    this.classList.add("active");
}
//Toggle click DELIVERY - OPTION cards
for (let i = 0; i < optionDeliv.length; i++) {
    optionDeliv[i].addEventListener("click", toggleActiveDeliv);
}

function toggleActiveDeliv() {
    if (
        optionDeliv[1].classList.contains("active") ||
        optionDeliv[2].classList.contains("active")
    ) {
        this.classList.add("active");
        optionDeliv[1].classList.remove("active");
        optionDeliv[2].classList.remove("active");
    } else if (
        optionDeliv[0].classList.contains("active") ||
        optionDeliv[2].classList.contains("active")
    ) {
        this.classList.add("active");
        optionDeliv[0].classList.remove("active");
        optionDeliv[2].classList.remove("active");
    } else {
        this.classList.add("active");
        optionDeliv[0].classList.remove("active");
        optionDeliv[1].classList.remove("active");
    }
    this.classList.add("active");
}

//---------------------------
//---- VALUES RETENTION -----
//---------------------------

const orderSummary = document.getElementById("orderSummary");
var coffeeType = "_____";
var cofeeBean = "_____";
var cofeeQty = "_____";
var cofeeGrind = "_____";
var cofeeDeliv = "_____";

const grindDropDown = document.querySelector(".grind-dropdown .dropdown-chevron");

/* function isCapsuleSelected() {
    if (capsule.classList.contains("active")) {
        coffeeType === "Capsule";
        preferGrind.classList.add("disable");
        selectGrind.classList.add("disable");
        grindDropDown.classList.add("disable");
        preferGrind.classList.remove("active");
    } else {
        coffeeType = "_____";
    }
} */

/* isCapsuleSelected(); */

var elemToObserve = document.querySelector("#capsOpt.preference-option.option");

var prevClassState = elemToObserve.classList.contains("#capsOpt.preference-option.option");
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.attributeName == "class") {
            var currentClassState = mutation.target.classList.contains("active");
            if (prevClassState !== currentClassState) {
                prevClassState = currentClassState;
                if (currentClassState) {
                    coffeeType = "Capsule";
                    preferGrind.classList.add("disable");
                    selectGrind.classList.add("disable");
                    grindDropDown.classList.add("disable");
                    preferGrind.classList.remove("active");
                    console.log(coffeeType);
                } else {
                    coffeeType = "_____";
                    console.log(coffeeType);
                }
            }
        }
    });
});
observer.observe(elemToObserve, { attributes: true });
