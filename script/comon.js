
function getTaxElementById(elementId){
    const phonetotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phonetotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTaxtElementValueById(elementId, value){
    const SubTotalElemnt = document.getElementById(elementId);
    SubTotalElemnt.innerText = value;
}
function calculatSubTotal(){
    const currentPhoneTotal = getTaxElementById('phone-total');
    const currentCaseTotal = getTaxElementById('case-total');


    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTaxtElementValueById('sub-total', currentSubTotal)

    //calculet tax 
    const taxtAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxtAmount = parseFloat(taxtAmountString);
    setTaxtElementValueById('taxt-amount', taxtAmount);

    const finalAmount = currentSubTotal + taxtAmount;
    setTaxtElementValueById('final-amount', finalAmount);
}