
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