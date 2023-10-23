

let toggleBtn = document.querySelector(".right-profile");
let check = 1;

document.querySelector("#toggle-btn").addEventListener("click", function () {

    if (check == 1) {
        toggleBtn.style.display = "flex";
        toggleBtn.style.justifyContent = "flex-end";
        toggleBtn.style.backgroundColor = "#003b9b";

        check = 0;

    } else {
        toggleBtn.style.display = "flex";
        toggleBtn.style.justifyContent = "flex-start";
        toggleBtn.style.backgroundColor = "#999999";

        check = 1;
    };
});


// ============ left section toggle coad ============ 

let leftSection = document.querySelector(".left-section");
let leftArrowBtn = document.querySelector("#left-arrow-btn");
let flag = 0

leftArrowBtn.addEventListener("click", function () {

    if (flag == 0) {

        leftSection.classList.add("left-section-toggle");
        leftArrowBtn.style.transform = "rotate(180deg)";
        flag = 1;
    } else {

        leftSection.classList.remove("left-section-toggle");
        leftArrowBtn.style.transform = "rotate(0deg)";
        flag = 0;
    }
});

// ============= right section toggle ==========================

let rightSection = document.querySelector(".right-section");
let rightBtn = document.querySelector("#right-btn");

rightBtn.addEventListener("click", function () {
    rightSection.classList.toggle("right-section-toggle")
})



document.querySelector("#img-btn").addEventListener("click", function () {

    let profileContainer = document.querySelector(".profile-container");

    profileContainer.classList.toggle("profile-container-show")
})


// ============= form section ===============================

document.querySelector("#login-btn").addEventListener("click", function () {
    document.querySelector(".form-container").classList.add("showLogin")
});

document.querySelector("#cancel").addEventListener("click", function () {
    document.querySelector(".form-container").classList.remove("showLogin")
})

document.querySelector("#sign-in-btn").addEventListener("click", function () {
    document.querySelector("#sign-in-section").classList.add("showLogin");

    document.querySelector(".form-container").classList.remove("showLogin")
})

document.querySelector("#cancel-two").addEventListener("click", function () {
    document.querySelector("#sign-in-section").classList.remove("showLogin")
})

document.querySelector("#sign-up-btn").addEventListener("click", function () {
    document.querySelector(".form-container").classList.add("showLogin");
    document.querySelector("#sign-in-section").classList.remove("showLogin");


})



