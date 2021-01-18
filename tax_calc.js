document.getElementById("calc").onclick = function () {

  let income = parseFloat(document.taxForm.income.value);
  let liability;

  if(income >= 0 && income <= 27050) {
    liability = income * 0.15;
  } else if(income > 27050 && income <= 65550) {
    liability = 4057.50 + (income - 27050) * 0.275;
  } else if (income > 65550 && income <= 136750) {
    liability = 14654 + (income - 65550) * 0.305;
  } else if (income > 136750 && income <= 297350) {
    liability = 36361 + (income - 136750) * 0.355;
  } else if (income > 297350) {
    liability = 93374 + (income - 297350) * 0.391;
  } else {
    alert("Input invalid: you have entered a negative number or non numeric input and your request can not be processed.");
    liability="Invalid entry";
  }

  if (typeof(liability) === "number" || typeof(liability) === "float") {
    liability = liability.toFixed(2);
  }

  document.taxForm.liability.value = liability;

  document.getElementById('message').innerHTML = "<h4>Thank you for using this tool and good luck with your taxes!</h4>"

}
