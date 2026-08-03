function headerTemplate() {
    return `
            <div class="nav-bar">
                <a href="../index.html"><img class="logo" src="../assets/images/logo.png"
                        alt="logo of website in header">
                </a>
                <div class="header-tabs">
                    <a class="about-me-tab" href="#about">
                        About me
                        <img class="nav-circle-img" src="../assets/images/header/circle.png" alt="">
                    </a>
                    <a class="skills-tab" href="#skills">
                        Skills
                        <img class="nav-string-img" src="../assets/images/header/string.png" alt="">
                    </a>
                    <a class="projects-tab" href="#projects">
                        Projects
                        <img class="nav-wave-img" src="../assets/images/header/wave.png" alt="">
                    </a>
                    <a class="contact-tab" href="#contact">
                        Contact
                        <img class="nav-underscore-img" src="../assets/images/header/underscore.png" alt="">
                    </a>
                </div>
                <div id="languageBtn" class="language-btn">
                    <div class="lang-btn-wrapper">
                        <p id="englishBtn" class="lang-btn active">EN</p>
                        <img class="lang-box-img" src="../assets/images/header/toggle.png" alt="">
                    </div>
                    <div class="toggle-track">
                        <img class="vector-bar" src="../assets/images/header/vector-bar.png" alt="">
                        <img id="vectorPoint" class="vector-point" src="../assets/images/header/vector-point.png"
                            alt="">
                    </div>
                    <div class="lang-btn-wrapper">
                        <p id="germanBtn" class="lang-btn">DE</p>
                        <img class="lang-box-img" src="../assets/images/header/toggle.png" alt="">
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
                    <a href="../index.html">
                        <img class="mobile-menu-logo" src="../assets/images/logo.png" alt="logo of website in header">
                    </a>
                    <button class="mobile-menu-close-btn">X</button>
                </div>
                <div class="mobile-tabs">
                    <a href="#about">About me</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="mobile-language">
                    <p class="mobile-lang-btn active">EN</p>
                    <div class="toggle-track">
                        <img class="vector-bar" src="../assets/images/header/vector-bar.png" alt="">
                        <img class="vector-point" src="../assets/images/header/vector-point.png" alt="">
                    </div>
                    <p class="mobile-lang-btn">DE</p>
                </div>
                <div class="mobile-social">
                    <a href="https://www.linkedin.com/in/daniel-st%C3%BCrmer-b3b6673b3/">
                        <img class="mobile-social-img" src="../assets/images/hero/linkedin-btn.png" alt="">
                    </a>
                    <a href="https://github.com/Merino-Creator">
                        <img class="mobile-social-img" src="../assets/images/hero/github-btn.png" alt="">
                    </a>
                    <a href="">
                        <img class="mobile-social-img" src="../assets/images/hero/email-btn.png" alt="">
                    </a>
                </div>
            </div>
        `
}