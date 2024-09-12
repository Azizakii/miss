
let yesElem = document.querySelector('#yesbtn');
let noElem = document.querySelector('#nobtn');

noElem.addEventListener('mouseover', function (){
    const randomX = Math.floor(Math.random() * 201) - 200;
    const randomY = Math.floor(Math.random()* 201) - 200;

    noElem.style.transform = `translate(${randomX}px, ${randomY}px)`;
})

noElem.addEventListener('mouseout', function () {
    const randomX = Math.floor(Math.random() * 201) - 200;
    const randomY = Math.floor(Math.random()* 201) - 200;

    noElem.style.transform = `translate(${randomX}px, ${randomY}px)`;
})

noElem.addEventListener('mousemove', function (){
    const randomX = Math.floor(Math.random() * 201) - 200;
    const randomY = Math.floor(Math.random()* 201) - 200;

    noElem.style.transform = `translate(${randomX}px, ${randomY}px)`;
})


let start = 1;
let click = 0;
let max = 6;

yesElem.addEventListener('mouseover', function (){
    if (click < max){
        start += 0.3;
        yesElem.style.transform = `scale(${start})`;
        click++;
    }

})

yesElem.addEventListener('mousemove', function (){
    if (click < max){
        start += 0.3;
        yesElem.style.transform = `scale(${start})`;
        click++;
    }

})

yesElem.addEventListener('click', function() {
    window.location.href = 'http://192.168.1.6:5500/second.html';
  });