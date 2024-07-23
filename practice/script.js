var student = {
    name: "haleem",
    grade: "second",
    gpa: 3.78,
    birthYear: 2001,
    course: {
        creditHours: 3,
        name: "math",
        grade: "A"
    },
    getAge: function() {
        return 2024 - this.birthYear;
    }
};

document.getElementById("p").innerHTML = student.name.toUpperCase() + " " + student.getAge();
student.gender = "male";
delete student.birthYear;

function grade(gpa) {
    if (gpa >= 3.7) return "Excellent";
    else if (gpa < 3.7 && gpa > 3.5) return "Very good";
    else return "Good"; 
}

document.getElementById("p2").innerHTML = student.course.name;
document.getElementById("p3").innerHTML = grade(student.gpa);

var t = "";
for (let x in student) {
    if (typeof student[x] === 'function') {
        continue;
    } else if (typeof student[x] === 'object') {
        for (let y in student[x]) {
            t += student[x][y] + " ";
        }
    } else {
        t += student[x] + " ";
    }
}
document.getElementById("p4").innerHTML = t;

const a1 = Object.keys(student);
const a2 = Object.values(student);
document.getElementById("p5").innerHTML = a1 + '<br>' + a2;

var t2 = "";
for (let [x, y] of Object.entries(student)) {
    if (typeof y === 'function') {
        continue;
    } else if (typeof y === 'object') {
        for (let [zKey, zValue] of Object.entries(y)) {
            t2 += x + ":" + zKey + ":" + zValue + "<br>";
        }
    } else {
        t2 += x + ":" + y + "<br>";
    }
}
document.getElementById("p6").innerHTML = t2;

document.getElementById("p7").innerHTML = JSON.stringify(student);