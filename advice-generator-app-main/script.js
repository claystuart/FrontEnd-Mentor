advice__button.addEventListener('click', () => {

    fetch('https://api.adviceslip.com/advice', {cache: "no-store"})
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            advice__number.innerHTML = data.slip.id;
            advice__text.innerHTML = data.slip.advice;
        });

});