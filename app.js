let billAmount, custom, noOfPeople, tipPercentage

function getTipPercentage(e){
  tipPercentage = parseFloat(e.value);
}

function calculations(){
  if(document.querySelector('[data-number-of-people]').value != ''){
    if(document.querySelector('[data-number-of-people]').value != 0){
      billAmount = parseFloat(document.querySelector('[data-bill-amount]').value);
      custom = parseFloat(document.querySelector('[data-custom]').value/100);
      noOfPeople = parseFloat(document.querySelector('[data-number-of-people]').value);  
      let tipAmount;
      if(custom == ''){
        tipAmount = tipPercentage*billAmount;
      }else{
        tipAmount = custom*billAmount;
      }
      document.querySelector('[data-tip-per-person]').innerHTML = `$${(tipAmount/noOfPeople).toFixed(2)}`;
      document.querySelector('[data-total-per-person]').innerHTML = `$${((tipAmount+billAmount)/noOfPeople).toFixed(2)}`;
    }
  }
}

setInterval(calculations, 1)

function reset(){
  document.querySelector('[data-bill-amount]').value = '';
  document.querySelector('[data-custom]').value = '';
  document.querySelector('[data-number-of-people]').value = '';
  document.querySelector('[data-tip-per-person]').innerHTML = `$0.00`;
  document.querySelector('[data-total-per-person]').innerHTML = `$0.00`;
}

calculations();
