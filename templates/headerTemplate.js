function headerTemplate() {
    const base = getBasePath();
    return `
        <div class="nav-bar">
            <a href="${base}index.html"><img class="logo" src="${base}assets/images/logo.png" alt="logo of website in header"></a>
            <div class="header-tabs">
                <a class="about-me-tab" href="${base}index.html#about">
                    About me
                    <img class="nav-circle-img" src="${base}assets/images/header/circle.png" alt="">
                </a>
                <a class="skills-tab" href="${base}index.html#skills">
                    Skills
                    <img class="nav-string-img" src="${base}assets/images/header/string.png" alt="">
                </a>
                <a class="projects-tab" href="${base}index.html#projects">
                    Projects
                    <img class="nav-wave-img" src="${base}assets/images/header/wave.png" alt="">
                </a>
                <a class="contact-tab" href="${base}index.html#contact">
                    Contact
                    <img class="nav-underscore-img" src="${base}assets/images/header/underscore.png" alt="">
                </a>
            </div>
            <div id="languageBtn" class="language-btn">
                <div class="lang-btn-wrapper">
                    <p id="englishBtn" class="lang-btn active">EN</p>
                    <img class="lang-box-img" src="${base}assets/images/header/toggle.png" alt="">
                </div>
                <div class="toggle-track">
                    <img class="vector-bar" src="${base}assets/images/header/vector-bar.png" alt="">
                    <img id="vectorPoint" class="vector-point" src="${base}assets/images/header/vector-point.png" alt="">
                </div>
                <div class="lang-btn-wrapper">
                    <p id="germanBtn" class="lang-btn">DE</p>
                    <img class="lang-box-img" src="${base}assets/images/header/toggle.png" alt="">
                </div>
            </div>
            <button id="burgerMenu" class="burger-menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        <div id="mobileMenu" class="mobile-menu">
            <div class="mobile-header">
                <a href="${base}index.html">
                    <img class="mobile-menu-logo" src="${base}assets/images/logo.png" alt="logo of website in header">
                </a>
                <button class="mobile-menu-close-btn">X</button>
            </div>
            <div class="mobile-tabs">
                <a href="#about">About me
                    <img class="nav-circle-img" src="${base}assets/images/header/circle.png" alt="">
                </a>
                <a href="#skills">Skills
                    <img class="nav-string-img" src="${base}assets/images/header/string.png" alt="">
                </a>
                <a href="#projects">Projects
                    <img class="nav-wave-img" src="${base}assets/images/header/wave.png" alt="">
                </a>
                <a href="#contact">Contact
                    <img class="nav-underscore-img" src="${base}assets/images/header/underscore.png" alt="">
                </a>
            </div>
            <div class="mobile-language">
                <div class="lang-btn-wrapper">
                    <p class="mobile-lang-btn lang-btn active">EN</p>
                    <img class="lang-box-img" src="${base}assets/images/header/toggle.png" alt="">
                </div>
                <div class="toggle-track">
                    <img class="vector-bar" src="${base}assets/images/header/vector-bar.png" alt="">
                    <img class="vector-point" src="${base}assets/images/header/vector-point.png" alt="">
                </div>
                <div class="lang-btn-wrapper">
                    <p class="mobile-lang-btn lang-btn">DE</p>
                    <img class="lang-box-img" src="${base}assets/images/header/toggle.png" alt="">
                </div>
            </div>
            <div class="mobile-social">
                <div class="social-link-mobile">
                    <a href="https://www.linkedin.com/in/daniel-st%C3%BCrmer-b3b6673b3/">
                        <img class="mobile-social-img" src="${base}assets/images/hero/linkedin-btn.png" alt="">
                    </a>
                </div>
                <div class="social-link-mobile">
                    <a href="https://github.com/Merino-Creator">
                        <img class="mobile-social-img" src="${base}assets/images/hero/github-btn.png" alt="">
                    </a>
                </div>
                <div class="social-link-mobile">
                    <a href="">
                        <img class="mobile-social-img" src="${base}assets/images/hero/email-btn.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    `;
}