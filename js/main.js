const elbutton=document.querySelector('.button');
const elparag=document.querySelector('.lorem');
const elspan=document.querySelector('.span')
elbutton.addEventListener('click', (evt)=> {
    elparag.classList.toggle('open');
})
elspan.addEventListener('click', (evt)=> {
    elparag.classList.toggle('open');
})




