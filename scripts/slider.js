const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider_section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next(){
    let sliderSectionFirst = document.querySelectorAll('.slider_section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s ease-out';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500);

}

function prev(){
    let sliderSection = document.querySelectorAll('.slider_section');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s ease-out';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);;
        slider.style.marginLeft = '-100%';
    }, 500);
}

btnRight.addEventListener('click',function(){
    next();
});


btnLeft.addEventListener('click',function(){
    prev();
});

setInterval(function(){
    next();
}, 30000);