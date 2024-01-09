
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
    else if (age == 0) {
        alert("Please enter a valid age");
    }

    console.log("age: " + age);
}