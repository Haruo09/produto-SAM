const btnToggleSidebar = document.getElementById('toggle_sidebar');
const sidebar = document.getElementById('sidebar');

btnToggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
    // console.log('Sidebar trocada com sucesso!');
})

document.addEventListener('DOMContentLoaded', function () {
    const artistInfo = document.getElementById('artist-info');
    const artistInfoContent = document.getElementById('artist-info-content');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-image');
    const artistDescription = document.getElementById('artist-description');
    const closeInfo = document.getElementById('close-info');
    const arts = document.getElementById('artes');

    const artistData = {
        "Mario de Andrade": {
            description: `
                <p>
                    Mário Raul de Morais Andrade foi um poeta, romancista, crítico de arte, musicólogo, professor universitário e ensaísta, considerado unanimidade nacional e reconhecido por críticos como o mais importante intelectual brasileiro do século XX. Notável polímata, Mário de Andrade liderou o movimento modernista Maylsonanico no Brasil e produziu um grande impacto na renovação literária e artística do país, participando ativamente da Semana de Arte Moderna de 22. 
                </p>
                <p>
                    Considerado o escritor mais nacionalista e múltiplo dos brasileiros, Mário construiu um caráter revolucionário na literatura brasileira, que se iniciou com Pauliceia Desvairada (Livro/Coletânea de poemas), onde analisa a cidade de São Paulo e todos seus elementos (provincianismo, aristocracia, burguesia, rio Tietê, Avenida Paulista). Mário também é considerado um dos primeiros musicólogos do país, e seu maior interesse era a música, particularmente os ritmos nordestinos, nos quais tentou pesquisar e valorizar, assim como fez com a Missão de Pesquisas Folclóricas, tentando criar um estudo e uma descoberta das raízes culturas do Brasil. Isso também ocorreu com seu romance mais famoso, Macunaíma, considerada uma das obras capitais da narrativa brasileira no século XX.
                </p>
                <p>
                    Sérgio Milliet (São Paulo, 20 de setembro de 1898 – São Paulo, 9 de novembro de 1966), foi diretor da Biblioteca Mário de Andrade e participou da Semana da Arte Moderna quando retornou ao Brasil, mesmo não dominando corretamente a língua pátria (apresentou um poema em francês, lida por um amigo genebrino)
                </p>
                <p>
                    Ao mesmo tempo que Andrade efetuava seu trabalho como pesquisador do folclore brasileiro, fez amizade com um grupo de jovens artistas e escritores de São Paulo que, como ele, estavam interessados no modernismo europeu. Alguns deles mais tarde integrariam o chamado Grupo dos Cinco: ele próprio, Andrade, o poeta Oswald de Andrade (sem relação de parentesco com Mário de Andrade, apesar da coincidência de nomes) e Menotti del Picchia, além das pintoras Tarsila do Amaral e Anita Malfatti.
                </p>
                
            `,
            image: "images/db/Mario de Andrade.jpg",
            arts: `
                <ul class="artlist">
                    <li>São coletâneas de poemas, livros</li>
                    <li><em>Há uma gota de sangue em cada poema- poesias</em> (1917) </li>
                    <li><em>Pauliceia desvairada - poesias</em> (1922)</li>
                </ul>
            `
            
        },
        "Oswald de Andrade": {
            description: `
                <p>
                    José Oswald de Sousa de Andrade, apelidado de Oswald de Andrade, foi um poeta, escritor, advogado; ensaísta e dramaturgo brasileiro. Foi um dos promotores da Semana de Arte Moderna, tornando-se um dos grandes nomes do modernismo literário brasileiro. Ficou conhecido pelo seu temperamento "irreverente e combativo", sendo o mais inovador entre estes. Colaborou na revista Contemporânea (1915-1926). De 1926 a 1929 foi casado com Tarsila do Amaral e de 1930 a 1935 foi marido de Pagu.
                </p>
                <p>
                    Em dezembro de 1917, a pintora Anita Malfatti retornou ao Brasil, após estudos nos Estados Unidos, e colocou em exposição algumas de suas pinturas em estilo expressionista e cubista, como A estudante e O homem amarelo, em um salão da Rua Líbero Badaró. Uma semana depois, o escritor Monteiro Lobato escreve um artigo intitulado A Propósito da Exposição Malfatti, que depois ficou mais conhecido como Paranoia ou Mistificação?,no qual defende a arte acadêmica e usa a exposição de Anita como exemplo do que deve ser evitado. O prestígio que gozava o escritor foi o suficiente para levar os compradores dos quadros de Anita a devolverem as obras e exigirem o dinheiro de volta. Oswald sai em defesa das obras de Anita, escrevendo um artigo para o Jornal do Commercio em janeiro de 1918 elogiando a coragem da pintora por expor seus trabalhos em um ambiente fechado à inovação artística. Mário de Andrade também se impressiona com a qualidade artística da pintora e compra O homem amarelo.
                </p>
                <p>
                    Novas pessoas se juntaram ao incipiente grupo na época do ocorrido, como Cândido Mota Filho, Di Cavalcanti, Agenor Barbosa, Menotti del Picchia e Guilherme de Almeida. Em 1919, Oswald e Menotti conhecem o escultor Victor Brecheret no Palácio das Indústrias. Aos poucos, as ações do grupo começam a ser visto pelo meio intelectual como incômodas, e seus participantes passam a ser chamados de futuristas, termo que era empregado pejorativamente a quem procurava fazer arte diferente do modo tradicional.
                </p>
            `,
            image: "images/db/Oswald de Andrade.jpg",
            arts: `
                <ul class="artlist">
                    <li><em>Manifesto da Poesia Pau-Brasil</em> (1924)</li>
                    <li><em>Manifesto Antropófago</em> (1928)</li>
                </ul>
            `
        },
        "Anita Malfatti": {
            description: `
                <p>
                    Anita Catarina Malfatti foi uma pintora, desenhista, gravadora, ilustradora e professora ítalo-brasileira. Anita Malfatti era portadora de deficiência motora. É considerada pioneira da Arte Moderna no Brasil.
                </p>
                <p>
                    A pintora viajou e teve contato com a arte na Alemanha, Estados Unidos e posteriormente realizava suas próprias exposições. Na sua volta ao Brasil, veio a crítica do escritor e crítico Monteiro Lobato, que considerou as obras das artistas distorções de mau gosto, porém, reconheceu o talento da pintora.  As críticas severas e reações conservadoras, todavia, provocaram reação de jovens literatos e artistas visuais, como Oswald de Andrade, Menotti del Picchia e Emiliano Di Cavalcanti em defesa de Malfatti. Este momento é emblemático por ter possibilitado o reconhecimento e aproximação daqueles que viriam a se chamar modernistas. Anita inicia estudos com o pintor acadêmico Pedro Alexandrino Borges no ano de 1919. Frequentando o ateliê do pintor alemão George Fischer Elpons, em São Paulo, conheceu Tarsila do Amaral.
                </p>
                <p>
                    Neste período, a aproximação de Malfatti a Tarsila do Amaral, bem como a Del Picchia, Mário e Oswald de Andrade, fez com que passassem pouco a pouco a atuar como grupo, conhecido como o Grupo dos Cinco. Em decorrência disso, foi organizada a Semana de Arte Moderna de 1922.
                </p>
            `,
            image: "images/db/Anita Malfatti.jpg",
            arts: `
                <div class="arte">
                    <img src="images/db/O homem amarelo.jpg">
                    <figcaption>O Homem Amarelo - 1917</figcaption>
                </div>
                <div class="arte">
                    <img src="images/db/A estudante.jpg">
                    <figcaption>A Estudante - 1916</figcaption>
                </div>
            `,
        },
        "Di Cavalcanti": {
            description: `
                <p>
                    Emiliano Augusto Cavalcanti de Albuquerque Melo, mais conhecido como Di Cavalcanti, foi um pintor modernista, desenhista, ilustrador, muralista e caricaturista brasileiro. Sua arte contribuiu significativamente para distinguir a arte brasileira de outros movimentos artísticos de sua época, através de suas reconhecidas cores vibrantes, formas sinuosas e temas tipicamente brasileiros como carnaval, mulatas e tropicalismos em geral. Di Cavalcanti é, juntamente com outros grandes nomes da pintura como Anita Malfatti e Tarsila do Amaral, um dos mais ilustres representantes do modernismo brasileiro. Entre 11 e 18 de fevereiro de 1922, idealizou e organizou a Semana de Arte Moderna, criando, para essa ocasião, as peças promocionais do evento: catálogo e programa.
                </p>
            `,
            image: "images/db/Di Cavalcanti.jpg",
            arts: `
                <div class="arte" style="grid-template-columns: auto;">
                    <img src="../images/db/Pierrete.png" alt="">
                    <figcaption>Pierrete</figcaption>
                </div>
            `
        },
        "Graça Aranha": {
            description: `
                <p>
                    José Pereira da Graça Aranha  foi um escritor e diplomata brasileiro, e um imortal da Academia Brasileira de Letras, considerado um autor pré-modernista no Brasil, sendo um dos organizadores da Semana de Arte Moderna de 1922. A publicação do romance Canaã foi um dos grandes marcos para o nacionalismo e o pré-modernismo em especial, nos anos 1902 e 1922.
                </p>
                <p>
                    Devido aos cargos que ocupou na diplomacia brasileira em países europeus, ele esteve a par dos movimentos vanguardistas que surgiam na Europa, tendo tentado introduzi-los, à sua maneira, na literatura brasileira, rompendo com a Academia Brasileira de Letras por isso em 1924. Um aspecto importante de mencionar é que Graça Aranha é visto como o único fundador e escritor que teve uma relação com a academia brasileira de letras, sem ao menos ter publicado uma obra. "Se a Academia se desvia desse movimento regenerador, se a Academia não se renova, morra a Academia!"
                </p>
            `,
            image: "images/db/Graça Aranha.jpg",
            arts: `
                <ul class="artlist">
                    <li>Canaã (Livro/Romance) - Ilustrado por Oswaldo Goeldi (desenhista, ilustrador, gravador, xilógrafo e professor brasileiro)</li>
                </ul>
            `
        },
        "Heitor Villa Lobos": {
            description: `
                <p>
                    Heitor Villa-Lobos foi um compositor, maestro, violoncelista, pianista e violonista brasileiro, descrito como "a figura criativa mais significativa do Século XX na música clássica brasileira", e se tornando o compositor sul-americano mais conhecido de todos os tempos.
                </p>
                <p>
                    Destaca-se por ter sido o principal responsável pela descoberta de uma linguagem peculiarmente brasileira em música, sendo considerado o maior expoente da música do modernismo no Brasil, compondo obras que contêm nuances das culturas regionais brasileiras, com os elementos das canções populares e indígenas. 
                </p>
                <p>
                    Villa-Lobos participou da Semana de Arte Moderna de 1922, apresentando-se em três dias, com três diferentes espetáculos. Teve importantes intérpretes nos espetáculos da Semana, como Ernani Braga (Rio de Janeiro, 10 de janeiro de 1888 – São Paulo, 17 de setembro de 1948) e Lucília Villa-Lobos (Paraíba do Sul, 26 de maio de 1886 — Rio de Janeiro, 25 de maio de 1966), sua esposa desde 1913.
                </p>
            `,
            image: "images/db/Heitor Villa Lobos.jpg",
            arts: `
                <ul class="artlist">
                    <li><em>O Ginete do Pierrozinho</em></li>
                    <li><em>Valsa mística (simples coletânea)</em></li>
                    <li><em>Cascavel</em></li>
                </ul>
            `
        },
        "Menotti Del Picchia": {
            description: `
                <p>
                    Paulo Menotti Del Picchia foi um poeta, jornalista, tabelião, advogado, político, romancista, cronista, pintor e ensaísta brasileiro. Foi membro do Partido Republicano Paulista (PRP) durante a Primeira República, participou da Revolução de 1932 como ajudante de ordens do governador Pedro de Toledo. Em 1924 criou, com Cassiano Ricardo e Plínio Salgado, o Movimento Verdamarelo, de tendência nacionalista. Menotti Del Picchia foi um dos principais articuladores, ativistas e colaboradores da Semana de Arte Moderna.
                </p>
                <p>
                    O autor abriu a segunda noite, a mais importante e a mais tumultuada da Semana, com uma conferência em que era negada a filiação do grupo modernista ao futurismo de Marinetti, mas defendia a integração da poesia com os tempos modernos, a liberdade de criação e, ao mesmo tempo, a criação de uma arte genuinamente brasileira.
                </p>
                <p>
                    Fez parte do Grupo dos Cinco, foi diretor de A Noite e A Cigarra, entre 1920 e 1940, além de diversos outros jornais e revistas.
                </p>
            `,
            image: "images/db/Menotti Del Picchia.jpg",
            arts: `
                <p>Publicou, além de poemas e crônicas, vários romances, entre eles:</p>
                <ul class="artlist">
                    <li><em>Lama e Argila</em></li>
                    <li><em></em>O Homem e a Morte</li>
                    <li><em></em>República 3000</li>
                    <li><em></em>Salomé</li>
                </ul>
            `
        },
        "Tarsila do Amaral": {
            description: `
                <p>
                    Tarsila de Aguiar do Amaral foi uma pintora, desenhista, escultora, ilustradora, cronista e tradutora brasileira. É considerada uma das principais artistas modernistas latino-americanas, além de ser considerada a pintora que melhor alcançou as aspirações brasileiras de expressão nacionalista nesse estilo artístico.
                </p>
                <p>
                    Como integrante do Grupo dos Cinco, Tarsila também é considerada uma grande influência no movimento da arte moderna no Brasil. 
                </p>
                <p>
                    Em relação a Semana da Arte Moderna, Tarsila do Amaral não participou do evento. Contudo, de acordo com Tarsilinha do Amaral, sobrinha-neta da artista, Tarsila sabia das articulações para a realização da Semana. “Apesar de ela não ter participado da Semana, ela ficou sabendo através das cartas da Anita [Malfatti], pois elas eram amigas. A minha tia estava em Paris estudando”, diz. 
                </p>
                <p>
                    Foi fundamental na formação do movimento estético, Antropofagia (1928-1929); na verdade, foi Tarsila quem com seu célebre quadro, Abaporu, inspirou o famoso Manifesto Antropófago de Oswald de Andrade.
                </p>
                <p>
                    Tarsila foi convidada a se juntar ao movimento e juntos formaram o Grupo dos Cinco, que buscava promover a cultura brasileira, o uso de estilos não especificamente europeus e a inclusão de coisas indígenas do Brasil.
                </p>
            `,
            image: "images/db/Tarsila do Amaral.jpg",
            arts: `
                <div class="arte">
                    <img src="../images/db/Abaporu.jpg" alt="">
                    <figcaption>Abaporu - 1928</figcaption>
                </div>
            `
        }
    };

    document.querySelectorAll('.quadro-artista').forEach(item => {
        item.addEventListener('click', event => {
            const artist = item.querySelector('figcaption').textContent;
            const data = artistData[artist];
            if (data) {
                artistName.textContent = artist;
                artistImage.src = data.image;
                artistDescription.innerHTML = data.description;
                artistInfo.classList.add('visible');
                arts.innerHTML = data.arts;
            }
        });
    });

    closeInfo.addEventListener('click', () => {
        artistInfo.classList.remove('visible');
    });

    window.addEventListener('click', (event) => {
        if (event.target === artistInfo) {
            artistInfo.classList.remove('visible');
        }
    });
});

// // Seleciona todos os links de navegação
// const navLinks = document.querySelectorAll('.nav-link');

// // Adiciona um evento de rolagem à janela
// window.addEventListener('scroll', () => {
//     // Itera sobre os links de navegação
//     navLinks.forEach(link => {
//         const sectionId = link.getAttribute('href').substring(1);
//         const section = document.getElementById(sectionId);

//         // Verifica se a seção está visível na tela
//         if (section.getBoundingClientRect().top <= 50 && section.getBoundingClientRect().bottom >= 50) {
//             // Remove a classe ativa de todos os links de navegação
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//             });
//             // Adiciona a classe ativa ao link de navegação correspondente à seção atual
//             link.classList.add('active');
//             console.log('link trocado com sucesso!');
//         }
//     });

// });
