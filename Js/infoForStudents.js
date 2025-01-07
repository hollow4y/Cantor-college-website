var DD1IsToggled = false;
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
var DD2IsToggled = false;
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
var DD3IsToggled = false;
function DD3Toggle() {
    if (!DD3IsToggled) {
        DD3IsToggled = true;
    }
    else {
        DD3IsToggled = false;
    }
    document.querySelector(".drop-down-container-three").classList.toggle("active");  
}
var DD4IsToggled = false;
function DD4Toggle() {
    if (!DD4IsToggled) {
        DD4IsToggled = true;
    }
    else {
        DD4IsToggled = false;
    }
    document.querySelector(".drop-down-container-four").classList.toggle("active");  
}
var DD5IsToggled = false;
function DD5Toggle() {
    if (!DD5IsToggled) {
        DD5IsToggled = true;
    }
    else {
        DD5IsToggled = false;
    }
    document.querySelector(".drop-down-container-five").classList.toggle("active");  
}

var DD6IsToggled = false;
function DD6Toggle() {
    if (!DD6IsToggled) {
        DD6IsToggled = true;
    }
    else {
        DD6IsToggled = false;
    }
    document.querySelector(".drop-down-container-six").classList.toggle("active");  
}

var DD7IsToggled = false;
function DD7Toggle() {
    if (!DD7IsToggled) {
        DD7IsToggled = true;
    }
    else {
        DD7IsToggled = false;
    }
    document.querySelector(".drop-down-container-seven").classList.toggle("active");  
}

var DD8IsToggled = false;
function DD8Toggle() {
    if (!DD8IsToggled) {
        DD8IsToggled = true;
    }
    else {
        DD8IsToggled = false;
    }
    document.querySelector(".drop-down-container-eight").classList.toggle("active");  
}

var DD9IsToggled = false;
function DD9Toggle() {
    if (!DD9IsToggled) {
        DD9IsToggled = true;
    }
    else {
        DD9IsToggled = false;
    }
    document.querySelector(".drop-down-container-nine").classList.toggle("active");  
}

var DD10IsToggled = false;
function DD10Toggle() {
    if (!DD10IsToggled) {
        DD10IsToggled = true;
    }
    else {
        DD10IsToggled = false;
    }
    document.querySelector(".drop-down-container-ten").classList.toggle("active");  
}

var DD11IsToggled = false;
function DD11Toggle() {
    if (!DD11IsToggled) {
        DD11IsToggled = true;
    }
    else {
        DD11IsToggled = false;
    }
    document.querySelector(".drop-down-container-eleven").classList.toggle("active");  
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
        if (!DD5IsToggled) {
            document.querySelector(".drop-down-container-five").classList.toggle("active");
            DD5IsToggled = true;
        }
        if (!DD6IsToggled) {
            document.querySelector(".drop-down-container-six").classList.toggle("active");
            DD6IsToggled = true;
        }
        if (!DD7IsToggled) {
            document.querySelector(".drop-down-container-seven").classList.toggle("active");
            DD7IsToggled = true;
        }
        if (!DD8IsToggled) {
            document.querySelector(".drop-down-container-eight").classList.toggle("active");
            DD8IsToggled = true;
        }
        if (!DD9IsToggled) {
            document.querySelector(".drop-down-container-nine").classList.toggle("active");
            DD9IsToggled = true;
        }
        if (!DD10IsToggled) {
            document.querySelector(".drop-down-container-ten").classList.toggle("active");
            DD10IsToggled = true;
        }
        if (!DD11IsToggled) {
            document.querySelector(".drop-down-container-eleven").classList.toggle("active");
            DD11IsToggled = true;
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
        if (DD5IsToggled) {
            document.querySelector(".drop-down-container-five").classList.toggle("active");
            DD5IsToggled = false;
        }
        if (DD6IsToggled) {
            document.querySelector(".drop-down-container-six").classList.toggle("active");
            DD6IsToggled = false;
        }
        if (DD7IsToggled) {
            document.querySelector(".drop-down-container-seven").classList.toggle("active");
            DD7IsToggled = false;
        }
        if (DD8IsToggled) {
            document.querySelector(".drop-down-container-eight").classList.toggle("active");
            DD8IsToggled = false;
        }
        if (DD9IsToggled) {
            document.querySelector(".drop-down-container-nine").classList.toggle("active");
            DD9IsToggled = false;
        }
        if (DD10IsToggled) {
            document.querySelector(".drop-down-container-ten").classList.toggle("active");
            DD10IsToggled = false;
        }
        if (DD11IsToggled) {
            document.querySelector(".drop-down-container-eleven").classList.toggle("active");
            DD11IsToggled = false;
        }
    }
}
