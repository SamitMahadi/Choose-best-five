function setPlayers(element, item) {
    let createElement = document.createElement('li');
    const appendTextinToElement = createElement.innerText = element;
    const atLeastFive = getElement("playerSelect").children.length;
    if (atLeastFive < 5) {
        getElement('playerSelect').appendChild(createElement)
        item.setAttribute('disabled', true);
        item.style.backgroundColor = "#B2B2B2";
        item.style.color = "#dbdbdb";
        item.style.cursor = "not-allowed";
    }


    else {
        alert("Choose Only five Player!");
    }
}



const selectPlayers = document.getElementsByClassName('select-players');
for (const item of selectPlayers) {
    item.addEventListener('click', function (event) {
        let elementOfhtml = event.target
        elementOfhtml = elementOfhtml.parentElement.previousElementSibling.previousElementSibling.innerText;
        setPlayers(elementOfhtml, item);
    })
}