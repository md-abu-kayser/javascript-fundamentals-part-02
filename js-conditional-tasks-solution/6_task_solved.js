const age = 65;
const isStudent = false;

let fare = 800;

if (age < 10) {
  fare = 0;
} else if (isStudent === true) {
  fare = (fare * 50) / 100;
} else if (age >= 60) {
  fare = (fare * 85) / 100;
}

console.log(fare);
