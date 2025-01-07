var DD1IsToggled = false;
var DD2IsToggled = false;
var DD3IsToggled = false;
var DD4IsToggled = false;


function DD1Toggle() {
    if (!DD1IsToggled) {
        DD1IsToggled = true;
        document.querySelector(".drop-down-container-one").classList.toggle("active");
    }
    else {
        DD1IsToggled = false;
        document.querySelector(".drop-down-container-one").classList.toggle("active");
    }
}

function DD2Toggle() {
    if (!DD2IsToggled) {
        DD2IsToggled = true;
        document.querySelector(".drop-down-container-two").classList.toggle("active");
    }
    else {
        DD2IsToggled = false;
        document.querySelector(".drop-down-container-two").classList.toggle("active");
    }  
}

function DD3Toggle() {
    if (!DD3IsToggled) {
        DD3IsToggled = true;
    }
    else {
        DD3IsToggled = false;
    }
    document.querySelector(".drop-down-container-three").classList.toggle("active");  
}

function DD4Toggle() {
    if (!DD4IsToggled) {
        DD4IsToggled = true;
    }
    else {
        DD4IsToggled = false;
    }
    document.querySelector(".drop-down-container-four").classList.toggle("active");  
}
var toggled = false;
function extendAll() {
    if (toggled == false) {
        document.querySelector(".extend-all-button").innerHTML = "collapse all";
        toggled = true;
    } else {
        document.querySelector(".extend-all-button").innerHTML = "extend all"
        toggled = false;
    }
    if (toggled == true) {
        if (!DD1IsToggled) {
            document.querySelector(".drop-down-container-one").classList.toggle("active");
            DD1IsToggled = true;
        }
        if (!DD2IsToggled) {
            document.querySelector(".drop-down-container-two").classList.toggle("active");
            DD2IsToggled = true;
        }
        if (!DD3IsToggled) {
            document.querySelector(".drop-down-container-three").classList.toggle("active");
            DD3IsToggled = true;
        }
        if (!DD4IsToggled) {
            document.querySelector(".drop-down-container-four").classList.toggle("active");
            DD4IsToggled = true;
        }
    } else {
        if (DD1IsToggled) {
            document.querySelector(".drop-down-container-one").classList.toggle("active");
            DD1IsToggled = false;
        }
        if (DD2IsToggled) {
            document.querySelector(".drop-down-container-two").classList.toggle("active");
            DD2IsToggled = false;
        }
        if (DD3IsToggled) {
            document.querySelector(".drop-down-container-three").classList.toggle("active");
            DD3IsToggled = false;
        }
        if (DD4IsToggled) {
            document.querySelector(".drop-down-container-four").classList.toggle("active");
            DD4IsToggled = false;
        }
    }
}
