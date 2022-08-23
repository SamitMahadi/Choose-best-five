

function getElement(element1) {
    return document.getElementById(element1);
}

function getElementInputValue(element2) {
    const inputValueString = getElement(element2).value;
    return parseInt(inputValueString);
}

function getElementInnerText(element3) {
    const innerTextString = getElement(element3).innerText;
    return parseInt(innerTextString);
}
