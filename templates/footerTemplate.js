function footerTemplate() {
    const base = getBasePath();
    return `
        <div class="contact-bar">
            <div class="legal-notice">
                <a href="${base}index.html"><img class="logo" src="${base}assets/images/logo.png" alt="logo of website in footer"></a>
                <div class="legal-notice-mobile">
                    <p>© Daniel Stürmer 2026</p>
                    <a class="legal-notice-link" href="${base}html/legal-notice.html">Legal Notice
                        <img class="nav-underscore-img" src="${base}assets/images/header/underscore.png" alt="">
                    </a>
                </div>
            </div>
            <a href="https://github.com/Merino-Creator">
                <button class="github-link-btn">GitHub
                    <img class="roll-img" src="${base}assets/images/hero/github-btn.png" alt="">
                </button>
            </a>
            <a href="https://www.linkedin.com/in/daniel-st%C3%BCrmer-b3b6673b3/">
                <button class="linkedin-link-btn">LinkedIn
                    <img class="roll-img" src="${base}assets/images/hero/linkedin-btn.png" alt="">
                </button>
            </a>
            <a href=""><button class="email-link-btn">Email
                    <img class="roll-img" src="${base}assets/images/hero/email-btn.png" alt="">
                </button>
            </a>
        </div>
    `;
}