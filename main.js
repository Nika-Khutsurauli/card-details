const number = document.querySelector('#number');
const card_number = document.querySelector('#card-number');
const nameCustomer = document.querySelector('#name');
const cardCustomer = document.querySelector('#card-customer');
const validExp = document.querySelector('#valid-thru-text');
const validcardExp = document.querySelector('#expiration-vl');
const button = document.querySelector('#button');
const cvc = document.querySelector('#cvc');
const card_cvc = document.querySelector('#card-cvc');
const rightSide = document.querySelector('#right-side');
const thankYou = document.querySelector('#thankyou');




nameCustomer.addEventListener("keyup", () => {
  if(nameCustomer.value != ""){
    nameCustomer.style.borderColor = "green";
  }else{
    nameCustomer.style.borderColor = "red";
  }
})  
nameCustomer.addEventListener("click", () => {
  if(nameCustomer.value != ""){
    nameCustomer.style.borderColor = "green";
  }else{
    nameCustomer.style.borderColor = "red";
  }
})  
number.addEventListener("keyup", () => {
  
  if(number.value != ""){
    number.style.borderColor = "green";
  }
  else {
    number.style.borderColor = "red";
  }
})
number.addEventListener("click", () => {
  if(number.value != ""){
    number.style.borderColor = "green";
  }else{
    number.style.borderColor = "red";
  }
}) 
validExp.addEventListener("keyup", () => {
  if(validExp.value != ""){
    validExp.style.borderColor = "green";
  }
  else {
    validExp.style.borderColor = "red";
  }
})
validExp.addEventListener("click", () => {
  if(validExp.value != ""){
    validExp.style.borderColor = "green";
  }else{
    validExp.style.borderColor = "red";
  }
}) 
cvc.addEventListener("keyup", () => {
  if(cvc.value != ""){
    cvc.style.borderColor = "green";
  }
  else {
    cvc.style.borderColor = "red";
  }
})
cvc.addEventListener("click", () => {
  if(cvc.value != ""){
    cvc.style.borderColor = "green";
  }else{
    cvc.style.borderColor = "red";
  }
}) 





number.addEventListener("keyup", (e) => {
  
  if (!e.target.value) {
    card_number.innerText = "0000 0000 0000 0000";
  }
   else {
      const valuesOfInput = e.target.value.replaceAll(" ", "");

      if (e.target.value.length > 14) {
          e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
          card_number.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
          
      } else if (e.target.value.length > 9) {
          e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
          card_number.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
      } else if (e.target.value.length > 4) {
          e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
          card_number.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
      } else {
        card_number.innerHTML = valuesOfInput;
      }
  }
})
nameCustomer.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    cardCustomer.innerHTML = "JANE APPLESEED";
  } else {
    cardCustomer.innerHTML = e.target.value.toUpperCase();
  }
})
validExp.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    validcardExp.innerHTML = "02/40";
  } else {
      const valuesOfInput = e.target.value.replace("/", "");

      if (e.target.value.length > 2) {
          e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
          validcardExp.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
      } else {
        validcardExp.innerHTML = valuesOfInput;
      }
  }
})

cvc.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    card_cvc.innerHTML = "123";
  } else {
    card_cvc.innerHTML = e.target.value;
  }
})

  button.addEventListener("click", (e) => {
    e.preventDefault();
    if(nameCustomer.value == "" && number.value == "" && validExp.value == "" && cvc.value == ""){
      nameCustomer.style.borderColor = 'red';
      number.style.borderColor = 'red';
      validExp.style.borderColor = 'red';
      cvc.style.borderColor = 'red';
    }
    
    else if(nameCustomer.value != "" && number.value == "" && validExp.value == "" && cvc.value == ""){
      nameCustomer.style.borderColor = 'green';
      number.style.borderColor = 'red';
      validExp.style.borderColor = 'red';
      cvc.style.borderColor = 'red';
    }
    else if(nameCustomer.value != "" && number.value != "" && validExp.value == "" && cvc.value == ""){
      nameCustomer.style.borderColor = 'green';
      number.style.borderColor = 'green';
      validExp.style.borderColor = 'red';
      cvc.style.borderColor = 'red';
    }
    else if(nameCustomer.value != "" && number.value != "" && validExp.value != "" && cvc.value == ""){
      nameCustomer.style.borderColor = 'green';
      number.style.borderColor = 'green';
      validExp.style.borderColor = 'green';
      cvc.style.borderColor = 'red';
    }
    else if(nameCustomer.value != "" && number.value != "" && validExp.value == "" && cvc.value != ""){
      nameCustomer.style.borderColor = 'green';
      number.style.borderColor = 'green';
      validExp.style.borderColor = 'red';
      cvc.style.borderColor = 'green';
    }
    else if(nameCustomer.value == "" && number.value != "" && validExp.value == "" && cvc.value == ""){
      nameCustomer.style.borderColor = 'red';
      number.style.borderColor = 'green';
      validExp.style.borderColor = 'red';
      cvc.style.borderColor = 'red';
    }
    else if(nameCustomer.value == "" && number.value == "" && validExp.value != "" && cvc.value == ""){
      nameCustomer.style.borderColor = 'red';
      number.style.borderColor = 'red';
      validExp.style.borderColor = 'green';
      cvc.style.borderColor = 'red';
    }
    else if(nameCustomer.value == "" && number.value == "" && validExp.value == "" && cvc.value != ""){
      nameCustomer.style.borderColor = 'red';
      number.style.borderColor = 'red';
      validExp.style.borderColor = 'red';
      cvc.style.borderColor = 'green';
    }
    else{
      if(nameCustomer.value != "" && number.value != "" && validExp.value != "" && cvc.value != ""){
        rightSide.classList.remove("d-block");
        rightSide.classList.add('d-none');
        thankYou.classList.add('d-block');
        thankYou.classList.remove('d-none');
      }
    }
  })



