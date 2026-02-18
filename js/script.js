// Menú hamburguesa
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});

document.querySelectorAll('.toc-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const sectionId = link.dataset.section;
        
        document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
        link.classList.add('active');
        document.getElementById(sectionId).classList.add('active');
        
        document.getElementById(sectionId).scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav').classList.remove('active');
    });
});
