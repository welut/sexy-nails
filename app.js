const headerSlide = () => {
    const burger = document.querySelector('.burger');
    const header = document.querySelector('#headerbuttons');

    burger.addEventListener('click',()=>{
        header.classList.toggle('#headerbuttons:active')
    });
}

headerSlide();