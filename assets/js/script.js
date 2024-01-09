// responsive navbar

function responsiveNavbar() {
    let navbar = document.getElementById("navbar");
    
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    }
    else {
        navbar.className = "navbar";
    }
    console.log("object is " + navbar);
}