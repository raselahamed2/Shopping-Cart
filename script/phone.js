function updatePhoneNumber(isIncreses){
    const caseNumberField = document.getElementById('phone-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const priviousPhoneNumber = parseInt(caseNumberFieldString);

    let newPhoneNumber;

    if(isIncreses === true){
        newPhoneNumber = priviousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = priviousPhoneNumber - 1;
    }
    caseNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const caseTotalPrice = newPhoneNumber * 1219;
    const caseTotalElement = document.getElementById('phone-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber =  updatePhoneNumber(true);

    /* const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice; */
    updatePhoneTotalPrice(newPhoneNumber)

    calculatSubTotal();
});
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);

    /* const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice; */
    updatePhoneTotalPrice(newPhoneNumber)
    calculatSubTotal();
});