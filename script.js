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
const toggles = document.querySelectorAll(".dropdown-chevron");

// Toggler chevron
toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    });
});

// Cards options

const prefCards = document.querySelectorAll(".preference-option");
const beanCards = document.querySelectorAll(".bean-type-option");
const qtyCards = document.querySelectorAll(".quantity-option");
const grindCards = document.querySelectorAll(".grind-option");
const delivCards = document.querySelectorAll(".delivery-option");

const optionPref = document.querySelectorAll(".option.preference-option");
const optionBean = document.querySelectorAll(".option.bean-type-option");
const optionQty = document.querySelectorAll(".option.quantity-option");
const optionGrind = document.querySelectorAll(".option.grind-option");
const optionDeliv = document.querySelectorAll(".option.delivery-option");

const cardsArea = document.querySelector(".dropdowns");

//Cards titles values
let prefCardValue = document.querySelector("#order-summary span.coffeeType");
let beanCardValue = document.querySelector("#order-summary span.coffeeBean");
let qtyCardValue = document.querySelector("#order-summary span.coffeeQty");
let grindCardValue = document.querySelector("#order-summary span.coffeeGrind");
let delivCardValue = document.querySelector("#order-summary span.coffeeDeliv");

//Selected options list - left screen
const selectPref = document.querySelector("li.planner-selector.preference");
const selectBean = document.querySelector("li.planner-selector.bean-type");
const selectQty = document.querySelector("li.planner-selector.quantity");
const selectGrind = document.querySelector("li.planner-selector.grind");
const selectDeliv = document.querySelector("li.planner-selector.delivery");

//Elements for disabling Grind option if Capsule is selected
const capsule = document.getElementById("capsOpt");
const grindDropDown = document.querySelector(".grind-dropdown .dropdown-chevron");
const preferGrind = document.querySelector(".grind-dropdown");

function isPrefActive() {
    prefCards.forEach((card) => {
        card.addEventListener("click", function () {
            prefCards.forEach((btn) => btn.classList.remove("active"));
            card.classList.add("active");
            if (this.classList.contains("active") && capsule.classList.contains("active")) {
                //If Capsule is selected
                preferGrind.classList.add("disable");
                selectGrind.classList.add("disable");
                grindDropDown.classList.add("disable");
                grindDropDown.classList.remove("active");
                selectPref.classList.add("prefActive");
                prefCardValue.textContent = this.childNodes[1].textContent;
                grindCardValue.textContent = "_____";
            } else if (this.classList.contains("active") && !capsule.classList.contains("active")) {
                prefCardValue.textContent = this.childNodes[1].textContent;
                selectPref.classList.add("prefActive");
                preferGrind.classList.remove("disable");
                selectGrind.classList.remove("disable");
                grindDropDown.classList.remove("disable");
                grindDropDown.classList.remove("active");
            }
        });
    });
}

function isBeanActive() {
    beanCards.forEach((card) => {
        card.addEventListener("click", function () {
            beanCards.forEach((btn) => btn.classList.remove("active"));
            card.classList.add("active");
            if ((this.classList.contains = "active")) {
                beanCardValue.textContent = this.childNodes[1].textContent;
                selectBean.classList.add("prefActive");
            }
        });
    });
}
function isQtyActive() {
    qtyCards.forEach((card) => {
        card.addEventListener("click", function () {
            qtyCards.forEach((btn) => btn.classList.remove("active"));
            card.classList.add("active");
            if ((this.classList.contains = "active")) {
                qtyCardValue.textContent = this.childNodes[1].textContent;
                selectQty.classList.add("prefActive");
            }
        });
    });
}
function isGrindActive() {
    grindCards.forEach((card) => {
        card.addEventListener("click", function () {
            grindCards.forEach((btn) => btn.classList.remove("active"));
            card.classList.add("active");
            if ((this.classList.contains = "active")) {
                grindCardValue.textContent = this.childNodes[1].textContent;
                selectGrind.classList.add("prefActive");
            }
        });
    });
}

function isDelivActive() {
    delivCards.forEach((card) => {
        card.addEventListener("click", function () {
            delivCards.forEach((btn) => btn.classList.remove("active"));
            card.classList.add("active");
            if ((this.classList.contains = "active")) {
                delivCardValue.textContent = this.childNodes[1].textContent;
                selectDeliv.classList.add("prefActive");
            }
        });
    });
}

cardsArea.addEventListener("click", function () {
    isPrefActive();
    isBeanActive();
    isQtyActive();
    isGrindActive();
    isDelivActive();
    isOrderComplete();
});

//Activate Create my plan! button

const createPlanBtn = document.getElementById("createPlan");
createPlanBtn.disabled = true;

function isOrderComplete() {
    if (
        prefCardValue.textContent === "_____" &&
        beanCardValue.textContent === "_____" &&
        qtyCardValue.textContent === "_____" &&
        //grindCardValue.textContent === "_____" &&
        delivCardValue.textContent === "_____"
    ) {
        createPlanBtn.disabled = true;
    } else {
        createPlanBtn.disabled = false;
        createPlanBtn.classList.add("active");
    }
}

//Ordar Summary Modal
const bkPage = document.querySelector(".background-modal");
const bkPageActive = document.querySelector(".background-modal.active");
const modal = document.querySelector(".modal");
const checkoutBtn = document.querySelector(".modal-bottom .btn");

function goBack() {
    if (bkPage.classList.contains("active")) {
        bkPage.classList.remove("active");
        modal.classList.remove("active");
    }
}

bkPage.addEventListener("click", goBack);

createPlanBtn.addEventListener("click", () => {
    bkPage.classList.add("active");
    modal.classList.add("active");
    orderSummary();
});
checkoutBtn.addEventListener("click", () => {
    window.location = "index.html";
});

//Order summary modal
const prefOrderSummary = document.querySelector(".coffeeTypeOrder");
const beanOrderSummary = document.querySelector(".coffeeBeanOrder");
const qtyOrderSummary = document.querySelector(".coffeeQtyOrder");
const grindOrderSummary = document.querySelector(".coffeeGrindOrder");
const delivOrderSummary = document.querySelector(".coffeeDelivOrder");

function orderSummary() {
    prefOrderSummary.textContent = prefCardValue.textContent;
    beanOrderSummary.textContent = beanCardValue.textContent;
    qtyOrderSummary.textContent = qtyCardValue.textContent;
    grindOrderSummary.textContent = grindCardValue.textContent;
    delivOrderSummary.textContent = delivCardValue.textContent;
}
