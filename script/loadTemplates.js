function loadTemplates() {
    headerRef = document.getElementById('headerContent');
    footerRef = document.getElementById('footerContent');

    headerRef.innerHTML += headerTemplate();
    footerRef.innerHTML += footerTemplate();
}