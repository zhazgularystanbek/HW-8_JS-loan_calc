const form = document.querySelector("#loan-form");
form.addEventListener("submit", calculateResult); 
  const output=document.querySelector("#output");
  const loader=document.querySelector("#loader");
  output.style.display = "none";
  loader.style.display = "none";
  const img=document.querySelector("img");
  const err=document.querySelector(".error");


function calculateResult (e) {
    const amount = document.querySelector("#amount");
    const interest = document.querySelector("#interest");
    const years = document.querySelector("#years");

    const monthlyPayment=document.querySelector("#monthly-payment");
    const total=document.querySelector("#total");
    const totalInterest=document.querySelector("#total-interest");

    const loanAmount=parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/1200;
    const loanTerms=parseFloat(years.value)*12;

    const result = (loanAmount*(calculatedInterest+(calculatedInterest/(Math.pow(1+calculatedInterest, loanTerms)-1))));

    if (isFinite(result)) {
        monthlyPayment.value = result.toFixed(2);
        total.value = (result * loanTerms).toFixed(2);
        totalInterest.value = (result * loanTerms - loanAmount).toFixed(2);
        loader.style.display ="block";
        err.style.display="none";
        output.style.display ="none";
        function setTime(){
          loader.style.display="none";
          output.style.display="block";
          err.style.display="none"
        }
        setTimeout(setTime, 1500);
    } else {
      err.style.display="block";
      output.style.display="none"
    }
    e.preventDefault();
}