function toggleActive() {
    document.querySelector(".hb-menu").classList.toggle('active');
    document.querySelector(".sideBar-bg").classList.toggle('active');
}

function toggleActiveDropdown() {
    document.querySelector(".facility-drop-down-div").classList.toggle("active");
    document.querySelector(".drop-down-arrow").classList.toggle("active");
    document.querySelector(".facility-list").classList.toggle("active");
    document.querySelector(".tester").classList.toggle("active");
}

function toggleFindUsActive() {
    document.querySelector(".Findus-dropdown").classList.toggle("active");
    document.querySelector(".drop-down-arrow-2").classList.toggle("active");
    document.querySelector(".locationImageContainer").classList.toggle("clicked");
}
