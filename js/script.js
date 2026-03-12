const themeBtn = document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
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
  link.addEventListener('click', (e) => {

    if(link.getAttribute("href").startsWith("#")){
      e.preventDefault();

      const sectionId = link.getAttribute("href").replace("#","");

      document.querySelectorAll('.content-section')
        .forEach(s => s.classList.remove('active'));

      document.getElementById(sectionId)
        .classList.add('active');

      document.getElementById(sectionId)
        .scrollIntoView({behavior:'smooth'});
    }

  });
});
