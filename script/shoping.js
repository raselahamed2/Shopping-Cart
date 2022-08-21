/* document.getElementById('btn-case-pluse').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const priviousCaseNumber = parseInt(caseNumberFieldString);

    const newCaseNumber = priviousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const priviousCaseNumber = parseInt(caseNumberFieldString);

    const newCaseNumber = priviousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
}) */

function updateCaseNumber(isIncreses){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const priviousCaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber;

    if(isIncreses === true){
        newCaseNumber = priviousCaseNumber + 1;
    }
    else{
        newCaseNumber = priviousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}
document.getElementById('btn-case-pluse').addEventListener('click', function(){
    const newCaseNumber =  updateCaseNumber(true);

    /* const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice; */
    updateCaseTotalPrice(newCaseNumber)
    calculatSubTotal();
});
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);

    /* const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice; */
    updateCaseTotalPrice(newCaseNumber)
    calculatSubTotal();
});