let card = document.querySelector('.card');
let imagem = document.querySelector('.img')
card.addEventListener('mouseover',()=>{
    imagem.classList.add('ativado');
});

imagem.addEventListener('click', ()=>{
    imagem.classList.remove('ativado');
});


const descricoes ={
    "github": "O GitHub é uma plataforma de hospedagem de código-fonte baseada em Git, que permite colaboração, controle de versão e gerenciamento de projetos de software.",
    "frontend": "O Frontend Mentor é uma plataforma que oferece desafios de desenvolvimento front-end para ajudar programadores a aprimorar suas habilidades com HTML, CSS e JavaScript.",
    "linkedin": "O LinkedIn é uma rede social profissional usada para networking, recrutamento e compartilhamento de conteúdo sobre carreiras e negócios. ",
    "twitter": "O Twitter é uma rede social de microblogging onde usuários compartilham pensamentos, notícias e tendências em posts curtos, chamados tweets.",
    "instagram": "O Instagram é uma rede social focada em compartilhamento de fotos, vídeos e stories, conectando pessoas por meio de imagens e criatividade."
}

let btn = document.querySelectorAll('.btn');
btn.forEach((event)=>{
    event.addEventListener('click', ()=>{
        const termo = event.getAttribute('data-term');
        let descricao = descricoes[termo];
        const resul = document.querySelector('.res');
        resul.classList.add('ativo');
        resul.innerHTML = descricao;

        setTimeout(() => {
            resul.classList.remove('ativo');
            resul.innerHTML='';
            btn.remove();
        }, 9000);
    })
})
