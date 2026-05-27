/*
        Efeito de opacidade do menu
            Navegador irá ficar escutando toda vez que rolar o scroll do mouse
            com window.addEventListener.
        */
        window.addEventListener('scroll', function(){
        const home = document.querySelector('.home'); //selecionando o menu
        const vh1 = window.innerHeight * 0.01; //multiplicando a altura total em 0.01 para descobrir o valor exato em pixels.
        /*
        Condição:
            se o tamanho do menu for maior que o valor dentro de
            vh1(1%), o efeito de opacidade sera aplicado no scroll
            senao, o efeito será removido.
            Variavel scrollY -> Diz quantos pixels a pagina desceu.
        */
        if(window.scrollY > vh1) //condição
        {
            home.classList.add('scrolled'); //Aplicado
        }
        else{
            home.classList.remove('scrolled'); //Removido
        }
    })