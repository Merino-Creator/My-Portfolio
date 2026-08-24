function loadTemplates() {
    let headerRef = document.getElementById('headerContent');
    let footerRef = document.getElementById('footerContent');
    let heroRef = document.getElementById('heroContent');
    let aboutRef = document.getElementById('aboutContent');
    let skillsRef = document.getElementById('skillsContent');
    let projectsRef = document.getElementById('projectsContent');
    let contactRef = document.getElementById('contactContent');

    if (headerRef) headerRef.innerHTML += headerTemplate();
    if (footerRef) footerRef.innerHTML += footerTemplate();
    if (heroRef) heroRef.innerHTML += heroTemplate();
    if (aboutRef) aboutRef.innerHTML += aboutTemplate();
    if (skillsRef) skillsRef.innerHTML += skillsTemplate();
    if (projectsRef) projectsRef.innerHTML += projectsTemplate();
    if (contactRef) contactRef.innerHTML += contactTemplate();
}