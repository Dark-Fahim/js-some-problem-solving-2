/** Problem -01 ( Divide the Asset ) */
var area = 2030;
//write your code here
var areaDivide = area / 2
console.log(areaDivide);

// Problem -01 Solved


/** Problem -02 ( Cycle or Laptop ) */
var money = 45000;
//write your code here
if (money >= 25000) {
    console.log('Laptop');
}
else if (money >= 10000) {
    console.log('Cycle');
}
else {
    console.log('Chocolate');
}

// Problem -02 Solved

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for (var day = 1; day <= lastDay; day++) {
    if (day % 3 === 0) {
        console.log(day,'- medicine');
    }
    else {
        console.log(day,' - rest');
    }
}

// Problem -03 Solved


/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
if (fileName.includes('#') || fileName.includes('.pdf') || fileName.includes('.docx')) {
    console.log('Store');
}
else {
    console.log('Delete');
}

// Problem -04 Solved


/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhanku", roll: 1014, department: "cse" };
//write your code here
var generatedEmail = student['name'] + student['roll'] + '.' + student['department'] + '@ph.ac.bd'
console.log(generatedEmail);

// Problem -05 Solved

/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var salary = startingSalary;
for (var i = 1; i <= experience; i++) {
    var increasedSalaryPerYear = salary / 100 * 5
    salary = salary + increasedSalaryPerYear 
}
var currentSalary = parseFloat(salary.toFixed(2))
console.log(currentSalary);
// // Problem -06 Solved