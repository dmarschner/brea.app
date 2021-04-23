/*
*   Brea v1.0.0
*/ 

var $ = document;

/**
 * Toggles the "show" class on two navigation related elements.
 *
 * @return void.
 */
function toggleNavigation() {
    $.getElementById("nav").classList.toggle("show");
    $.getElementById("nav-btn-open").classList.toggle("show");
}

/**
 * Decrypts a string.
 *
 * @return void.
 */
function decrypt(encoded) {
    var address = atob(encoded);
    window.location.href = "mailto:" + address;
}
