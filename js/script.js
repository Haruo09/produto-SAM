const btnToggleSidebar = document.getElementById('toggle_sidebar');
const sidebar = document.getElementById('sidebar');

btnToggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
    // console.log('Sidebar trocada com sucesso!');
})

document.addEventListener('click', (e) => {
    if (e.target != sidebar && 'sidebar-active' in sidebar.classList) {
        sidebar.classList.toggle('sidebar-active');
    }
})

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
