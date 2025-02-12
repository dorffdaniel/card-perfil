let card = document.querySelector('.card');
let imagem = document.querySelector('.img')
card.addEventListener('mouseover',()=>{
    imagem.classList.add('ativado');
});

imagem.addEventListener('click', ()=>{
    imagem.classList.remove('ativado');
});