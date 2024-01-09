
function age() {
    let age = parseInt(document.getElementById('age').value);

    if (age < 18) {
        alert("You're a child");
    }
    else if (age >= 18 ) {
        alert("You're an adult");
    }

    console.log("age: " + age);
}