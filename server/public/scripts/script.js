// variables to start annual and monthly calcualtions
var annualSalary = 0;
var monthlyCost = 0;
var employeeCount = 1;
$(document).ready(start);

// class EmployeeObject {
//   constructor (firstName, lastName, idNum, jobTitle, annualSalary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.idNum = idNum;
//     this.jobTitle = jobTitle;
//     this.annualSalary = annualSalary;
//   }
//   monthlyCost () {
//     return  Number(this.annaulSalary/12);
//   }
// } // end EmployeeObject Class
//
// var employee = new EmployeeObject($('#firstName').val(), $('#firstName').val(), $('#lastName').val(),
// $('#idNumber').val(), $('#jobTitle').val(), $('#annaulSalary').val()); // new employee object.
//
// I started off by making an employee object, which I could still use. As I was making the object I realized that
// I could just use the input values instead of creating an object. I saw that most people in slack used an object
// I just didn't understand exactly why we would have to since we can just use the input values. So, I wanted to document
// my thought process.

function start () {
  salarySum();
  $('#employeeTableBody').on('click', '#remove', removeEmployee);
  $('#submitBtn').on('click', addEmployee);
}

// Function to add user input to the table.
function addEmployee () {
  var $row = $('<tr>');
  $row.append('<td>' + employeeCount++ + '</td>');
  $row.append('<td>' + $('#firstName').val() + '</td>');
  $row.append('<td>' + $('#lastName').val() + '</td>');
  $row.append('<td>' + $('#idNumber').val() + '</td>');
  $row.append('<td>' + $('#jobTitle').val() + '</td>');
  $row.append('<td class="sal">' + $('#annualSal').val() + '</td>');
  $row.append('<td class="cost">' + Math.round(($('#annualSal').val()/12)) + '</td>');
  $row.append('<td id="row"> <button type="button" id="remove">Delete</button> </td>'); // remove employee button
  $('#totalSalaries').text('Total:' + salarySum()); // totals salary after adding salarySum function
  $('#monthlyCosts').text('Total:' + monthlySum()); // totals monthly Costs
  $('#employeeTableBody').append($row);
  $('input').val(''); // empties input fields once submit button is pressed.
}// end addEmployee

// Function to total salaries that user enters.
function salarySum () {
  return annualSalary += Number($('#annualSal').val());
}// end salarySum

// Function to total monthly costs
function monthlySum () {
  return monthlyCost += Number(Math.round($('#annualSal').val()/12));
}// end monthlySum

// Function to remove an employee when button is clicked.
function removeEmployee () {
  $(this).parent().parent().remove();
  // removes deleted employee salary from total;
  var empSalary = $(this).closest('tr').find('.sal').text();
  annualSalary -= empSalary;
  $('#totalSalaries').text('Total:' + salarySum());
  // removes deleted employee monthly cost from total;
  var empCost = $(this).closest('tr').find('.cost').text();
  monthlyCost -= empCost;
  $('#monthlyCosts').text('Total:' + monthlySum());

} // end removeEmployee
