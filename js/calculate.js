

getElement('per-player-calculate').addEventListener('click', function () {
    const element = getElementInputValue('per-player-fee');
    if (isNaN(element)) {
        alert("Please Input Number!");
    }
    else {
        const selectVLength = getElement("playerSelect").children.length;
        const playerExpenses = selectVLength * getElementInputValue('per-player-fee');
        getElement('player-expenses').innerText = playerExpenses;
    }
    getElement('per-player-fee').value = "";
});



getElement('calculate-total').addEventListener('click', function () {
    const playerExpenses = getElementInnerText('player-expenses');
    const managerFee = getElementInputValue('maneger-fee');
    const coachFee = getElementInputValue('coach-fee');
    if (isNaN(managerFee)) {
        alert("Please Input Number!");
    }
    else if (isNaN(coachFee)) {
        alert("Please Input Number!");
    }
    else {
        getElement('total-exp').innerText = playerExpenses + managerFee + coachFee;
    }
    getElement('maneger-fee').value = "";
    getElement('coach-fee').value = "";
});