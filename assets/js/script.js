// age calculation
function age() {
    let age = parseInt(document.getElementById('age').value);
    let child = document.getElementById('child-card');
    let adult = document.getElementById('adult-card');

    if (age < 18 && age > 0) {
        // alert("You're a child");
        child.style.display = "block";
        adult.style.display = "none";

    }
    else if (age >= 18 ) {
        adult.style.display = "block";
        child.style.display = "none";
    }
    else if (age <= 0) {
        alert("Please enter a valid age");
    }

    console.log("age: " + age);
}

// responsive navbar
// function Navbar() {
//     if (window.matchMedia("(max-width: 768px)").matches) {
//         document.getElementById("nav-bar").style.display = "none";
//         console.log("object");
//     }
//     else {
//         document.getElementById("nav-bar").style.display = "block";
//     }
// }

// navbar close
function responsiveNavbar() {
    let navBar = document.getElementById("navbar");
    // let overlay = window.document.querySelectorAll('section');

    if (navBar.style.display === "block") {
        navBar.style.display = "none";
        console.log("closed navbar");
    }
    else {
        navBar.style.display = "block";
        console.log("opened navbar");
    }
}





// window navbar close 
let navBar = document.querySelector(".icon");
let nav = document.getElementById("navbar");

// navBar.addEventListener("click", () => {
//     // let overlay = window.document.querySelectorAll('section');
//     if (nav.style.display === "block") {
//         nav.style.display = "none";
//         console.log("close navbar");
//     }
//     else {
//         nav.style.display = "block";
//         console.log("open navbar");
//     }
// });

navBar.addEventListener("click", responsiveNavbar);

document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
        responsiveNavbar();
    }
    console.log(event.target);
});




// const nav = document.querySelectorAll(".main-menu");
//     console.log(nav);



// multiplication table
// function table1(){
//     for(let i = 1; i <= 10; i++) {
//         document.write("<br>");
//         for(let j = 1; j <= 10; j++) {
//             // row += `${i*j}\t`;
//             console.log(i + " * " + j + " = " + i * j);
//         }
//         // console.log(row);
//     }  
// }


// vowels
// function vowelsCount(strng) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     let countVowels = 0;

//     for (char in strng) {
//         if (vowels.includes(strng[char])) {
//             countVowels++;
//         }
//     }
//     console.log(countVowels);
// }

// vowelsCount("A brown fox jumped over the lazy dog");