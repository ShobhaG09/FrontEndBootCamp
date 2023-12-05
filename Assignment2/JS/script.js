
const empId = document.getElementById('empId');
const empName = document.getElementById('empName');
const address = document.getElementById('address');
const designation=document.getElementById('designation')
const amount = document.getElementById('amount');
const date = document.getElementById('date');
const interest = document.getElementById('interest');
const Mdate = document.getElementById('Mdate');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const empIdValue = empId.value.trim();
    const empNameValue = empName.value.trim();
    


    if (empIdValue === '') {
        alert(empId, 'Please enter Employee Id ');
    }  else if (!isEmpId(empIdValue)) {
        setErrorFor(empId, 'Enter Valid Employee Id ');
    }else {
        setSuccessFor(empId);
    }

    if (empNameValue === '') {
        setErrorFor(empName, 'Please enter Employee Name ');
    } else if (!isEmpName(empNameValue)) {
        setErrorFor(empName, 'Enter Valid Employee Name ');
    } else {
        setSuccessFor(empName);
    }

    if (address === '') {
        setErrorFor(address, 'Please enter Employee Address');
    }else {
        setSuccessFor(address);
    }


    if (designation === '') {
        setErrorFor(designation, 'Please enter Employee Address');
    }else {
        setSuccessFor(designation);
    }
    if (amount === '') {
        setErrorFor(amount, 'Please Enter Loan Amount');
    } else {
        setSuccessFor(amount);
    }

    if (interest === '') {
        setErrorFor(interest, 'Please enter Interest');
    }else {
        setSuccessFor(interest);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmpId(empId) {
    return /^E-000(?:0\d|[1-9]\d*)$/.test(empId); //eg :E-000101 ,E-000261 etc
}

function isEmpName(empName){  
    return /^[a-zA-Z].*[\s\.]*$/g.test(empName); //it allow only string value with space  between first and last name .
}



function calculate() {
    //Look up the input and output elements in the document
    var amount = document.getElementById("amount");
    var interest = document.getElementById("interest");
    var Mdate = document.getElementById("Mdate");
   
   
    
  // Get the user's input from the input elements.
  // Convert interest from a percentage to a decimal, and convert from
  // an annual rate to a monthly rate. Convert payment period in years
  // to the number of monthly payments.
  var principal = parseFloat(amount.value);
  var interest = parseFloat(interest.value) / 100 / 12;
  var payments = parseFloat(Mdate.value) * 12;
 
  // compute the monthly payment figure
  var x = Math.pow(1 + interest, payments); //Math.pow computes powers
  var monthly = (principal*x*interest)/(x-1);
  
  // If the result is a finite number, the user's input was good and
  // we have meaningful results to display
  if (isFinite(monthly)){
    // Fill in the output fields, rounding to 2 decimal places
    payment.innerHTML = monthly.toFixed(2);
    total.innerHTML = (monthly * payments).toFixed(2);
    totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
    
  // Save the user's input so we can restore it the next time they visit
   save(amount.value, interest.value, Mdate.value);
  
   // Advertise: find and display local lenders, but ignore network errors
   try { // Catch any errors that occur within these curly braces
   getLenders(amount.value, interest.value, Mdate.value);
   }
    
    catch(e) { /* And ignore those errors */ }
   // Finally, chart loan balance, and interest and equity payments
   chart(principal, interest, monthly);
   }
   else {
   // Result was Not-a-Number or infinite, which means the input was
   // incomplete or invalid. Clear any previously displayed output.
   payment.innerHTML = ""; // Erase the content of these elements
   total.innerHTML = ""
   totalinterest.innerHTML = "";
 
   chart(); // With no arguments, clears the chart
   }
  }

  window.writeValues = function(form) {


    const empId = form.empId.value;
const empName = form.empName.value;
const address = form.address.value;
const designation=form.designation.value;
const amount = form.amount.value;
const date = form.date.value;
const interest = form.interest.value;
const Mdate = form.Mdate.value;
    

   
    document.getElementById('UserOutput').innerHTML = 'Employee Id : ' + empId + '<br> <hr>'+'Employee Name  :' + empName +'<br> <hr>'+ '  Address :' + address +'<br> <hr>'+ ' Designation :' + designation+'<br> <hr>'+'Amount :'+ amount +'<br> <hr>'+' Loan Date :'+date +'<br> <hr>'+'Interest :'+interest+'<br><hr>'+ 'Maturity Year :'+Mdate+'<br><hr>';
  
}