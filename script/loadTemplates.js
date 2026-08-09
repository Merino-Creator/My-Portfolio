function loadTemplates() {
    let headerRef = document.getElementById('headerContent');
    let footerRef = document.getElementById('footerContent');

    if (headerRef) headerRef.innerHTML += headerTemplate();
    if (footerRef) footerRef.innerHTML += footerTemplate();
}