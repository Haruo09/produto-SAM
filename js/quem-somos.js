const creditos = {
    "option1": [
        "Beatriz Menezes De Melo",
        "Lauany Dos Anjos Silva",
        "Júlia Afonso Oliveira",
        "Maria Eduarda Pereira Do Nascimento",
        "Lucas Gabriel Dos Santos Pinto"
    ],

    "option2": [
        "Anderson De Paula Siqueira Filho",
        "Fábio Haruo De Freitas Nishioka",
        "Luciano Gomes Ramos",
        "Otavio Duarte Silva Lacerda",
        "Victor Hugo Vieira Da Cruz"
    ],

    "option3": [
        "Ana Beatriz Paes Leme ",
        "Maria Fernanda Sousa Dutra ",
        "Wagner Santos Da Silva Filho",
        "Guilherme Borges Silva",
        "Isnaider Nicolas Dantas",
        "Victor Gabriel Moreira Da Silva",
    ],

    "option4": [
        "Lara Isabely Alves Siqueira",
        "Fernando De Souza Ferreira Filho ",
        "José Vinícius Carrilo Borges Martins",
        "Eduardo Henrique Marques Medeiros",
        "Fábio José De Souza Filho",
        "Daniel Franco Guimarães",
    ],

    "option5": [
        "Gabriel Oliveira Santos",
        "Gabriel Guimaraes De Paula",
        "Kauã Kévin De Oliveira Santos",
        "Fillipe Alves De Oliveira",
        "Riquelme Alves Pereira ",
        "Ângelo Yan Neris Almeida",
        "Diogo Martins Almeida",
    ],

    "option6": [
        "Melissa Aparecida Coelho Silva",
        "Wilik Da Silva Santos",
        "Magid Vinícius Mattos Maluf",
        "Yasmin Maria Silvestre De Souza",
        "Karolayne Aparecida Santos",
    ],

    "option7": [
        "Ana Beatriz Paes Leme"
    ],

    "option8": [
        "Fábio Haruo De Freitas Nishioka",
        "Anderson De Paula Siqueira Filho",
        "Victor Hugo Vieira Da Cruz",
        "Maria Fernanda Sousa Dutra",
        "Gabriel Oliveira Santos"
    ]

};

const options = [
    {value: "option0", text: "> tópico"},
    {value: "option1", text: "Contextualização"},
    {value: "option2", text: "Contexto Histórico Nacional"},
    {value: "option3", text: "Contexto Histórico Internacional"},
    {value: "option4", text: "Artistas e principais obras"},
    {value: "option5", text: "Conflitos, dificuldades e anedotas"},
    {value: "option6", text: "Importância e legado"},
    {value: "option7", text: "Organização do Roteiro"},
    {value: "option8", text: "Fabricação do Site"},
];

const combobox = document.createElement('select');
combobox.id = "select-topicos";
// combobox.style.display = 'inline';

options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    combobox.appendChild(optionElement)
});

document.querySelector('div#select-container').appendChild(combobox);
const participacoes = document.querySelector('div#participacoes');
combobox.addEventListener('change', () => {
    console.log("selecionado:", combobox.selectedIndex);
    participacoes.innerHTML = "";
    const alunos = creditos[options[combobox.selectedIndex]["value"]];
    const al_list = document.createElement('ul');
    alunos.forEach(aluno => {
        const al = document.createElement('li');
        al.innerHTML = aluno;
        al_list.appendChild(al);
    });
    participacoes.appendChild(al_list);
});
