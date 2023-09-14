        function MudaDesenho(){
            const texto = document.querySelector("h1");
            const imagem = document.querySelector("img");
            const text = document.querySelector("h2");
            const valor = document.querySelector('#valor').value;
            
            if(valor=="gemeos" || valor=="Gêmeos" || valor=="gêmeos" ||valor=="Gemeos"){
                texto.innerHTML = "Gêmeos:";
                imagem.setAttribute("src","./img/gemeos.jpg");
                imagem.setAttribute("width","300px");
                text.innerHTML = "O Cavaleiro de Ouro de Gêmeos é bastante peculiar em Cavaleiros do Zodíaco. Ele tem um irmão gêmeo, que também acaba usando sua armadura no futuro, tem uma personalidade maligna que o faz querer matar Atena e se passa pelo Grande Mestre do Santuário durante anos. É um currículo para ninguém botar defeito.";
            }

            else if(valor=="escorpiao" || valor=="escorpião" || valor=="Escorpião" || valor=="Escorpiao" ((mes == 10 && dia <= 23) || (mes == 11 && dia >= 21)) ){
                texto.innerHTML = "Escorpião:";
                imagem.setAttribute("src","./img/escorpiao.jpg");
                imagem.setAttribute("width","300px");
                text.innerHTML = "Milo é claramente um Cavaleiro nobre. Ao lutar contra Hyoga, o defensor da casa de Escorpião admira a determinação e o poder do Cavaleiro de Cisne, permitindo que ele avance mesmo após ter sido destroçado pelo Cavaleiro de Ouro.";
            }
            
            else if(valor=="peixes" || valor=="Peixes"){
                texto.innerHTML = "Peixes:";
                imagem.setAttribute("src","./img/peixes.jpg");
                imagem.setAttribute("width","300px");
                text.innerHTML = "Afrodite é um cavaleiro orgulhoso que aprecia estética. Afrodite não é narcisista, pois tanto no mangá ou anime, sua beleza é retratada apenas por terceiros, ele nunca se exalta por possuí-la.";
            }
            else if(valor=="aries" || valor=="áries" || valor=="Áries" || valor=="Aries"){
                texto.innerHTML = "Áries:";
                imagem.setAttribute("src","./img/aries.jpg");
                imagem.setAttribute("width","300px");
                text.innerHTML = "Normalmente mostra frieza e distanciamento para aqueles que conseguem chegar a sua torre em Jamiel onde residia. Uma de suas características mais notáveis são a sua lealdade e sentido de justiça. Desde o início compreende a traição de Saga e decide desaparecer até o momento certo para dar origem a uma revolta.";

            }
            else if(valor=="touro" || valor=="Touro"){
                texto.innerHTML = "Touro:";
                imagem.setAttribute("src","./img/touro.jpe");
                imagem.setAttribute("width","300px");
                text.innerHTML = "Fazendo jus à sua constelação, Aldebaran de Touro é o maior dos Cavaleiros de Ouro de Atena, um verdadeiro tanque. No entanto, sua velocidade não deve ser subestimada por isso, afinal ele tem um dos golpes mais velozes de Cavaleiros do Zodíaco, o Grande Chifre.";
            }
            else if(valor=="aquário"  || valor=="aquario" || valor=="Aquário" || valor=="Aquario"){
                texto.innerHTML = "Aquário:";
                imagem.setAttribute("src","./img/aquario.png");
                imagem.setAttribute("width","300px");
                text.innerHTML = "É o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";
            }
            else if(valor=="virgem" || valor=="Virgem"){
                texto.innerHTML = "Virgem:";
                imagem.setAttribute("src","./img/virgem.jpg");
                imagem.setAttribute("width","300px");
                text.innerHTML = "Shaka. O mais famoso Cavaleiro de Virgem é chamado de 'O Homem Mais Próximo de Deus', com alguns acreditando que ele é a reencarnação do próprio Buda. Ele é o único cavaleiro com controle total do oitavo sentido, o Arayashiki, que permite vagar livremente pelo Mundo dos Mortos.";

            }
            else if(valor=="capricornio"  || valor=="capricórnio" || valor=="Capricórnio" || valor=="Capricornio"){
                texto.innerHTML = "Capricórnio:";
                imagem.setAttribute("src","./img/capricoriojpg.jpg");
                imagem.setAttribute("width","300px");
                text.innerHTML = "Shura é um Cavaleiro de Ouro que protege a casa de Capricórnio. Com seus golpes poderosos como a Excalibur e as Pedras Saltitantes, o cavaleiro foi um grande servo de Athena, considerando-se o mais fiel deles. Com sua grande arrogância, cometeu atos tolos e foi iludido pelo Grande Mestre.";
            }
            else if(valor=="sagitario" || valor=="sagitário" || valor=="Sagitário" || valor=="Sagitario"){
                texto.innerHTML = "Sagitário:";
                imagem.setAttribute("src","./img/sagitario.jpg");
                imagem.setAttribute("width","300px");
                text.innerHTML = "Cavaleiro de Ouro do signo de sagitário. Natural da Grécia. É o irmão mais velho de Aiolia e foi considerado traidor pela morte de Atena. Mas na verdade é um cavaleiro exemplar que dedicou sua vida na grande missão de proteger Atena mesmo desprezado pelos que o rodeavam.";

            }
            else if(valor=="leao" || valor=="leão" || valor=="Leão" || valor=="Leao"){
                texto.innerHTML = "Leão:";
                imagem.setAttribute("src","./img/leao.jpg");
                imagem.setAttribute("width","300px");
                text.innerHTML = "Cavaleiro de Ouro do signo de Leão. Natural da Grécia. Tem a personalidade mais correta entre os Cavaleiros de Ouro e não gosta de trapaças. É um cavaleiro de honra que desfere abertamente golpes do tipo relâmpago na velocidade da luz.";
            }
            else if(valor=="Libra"){
                texto.innerHTML = "Libra:";
                imagem.setAttribute("src","./img/libra.jpg");
                imagem.setAttribute("width","300px");
                text.innerHTML = "O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades.";
            }
            else if(valor=="cancer"  || valor=="câncer" || valor=="Câncer"|| valor=="Cancer"){
                texto.innerHTML = "Câncer:";
                imagem.setAttribute("src","./img/cancer.jpg");
                imagem.setAttribute("width","300px");
                text.innerHTML = "Máscara da Morte (Deathmask no original). Esse apelido, se deve ao fato de colecionar os rostos das pessoas mortas por ele como troféus em sua casa, e o fato de ser um assassino cruel, não medindo esforços para ganhar.";
            }
            else{
                texto.innerHTML = "Cavaleiro não encontrado... =(";
                imagem.setAttribute("src","./img/erro.jpg");
                imagem.setAttribute("width","250px");
                
            }
        }