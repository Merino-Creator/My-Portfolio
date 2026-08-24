function heroTemplate() {
    const base = getBasePath();
    return `
        <div class="hero-contact-links">
            <div class="social-link">
                <a href="https://www.linkedin.com/in/daniel-st%C3%BCrmer-b3b6673b3/">
                    <img class="social-images" src="${base}assets/images/hero/linkedin-btn.png" alt="">
                </a>
            </div>
            <div class="social-link">
                <a href="https://github.com/Merino-Creator">
                    <img class="social-images" src="${base}assets/images/hero/github-btn.png" alt="">
                </a>
            </div>
            <div class="social-link">
                <a href="">
                    <img class="social-images" src="${base}assets/images/hero/email-btn.png" alt="">
                </a>
            </div>
        </div>
        <div class="hero-content">
            <div class="hero-top">
                <div class="hero-top-left">
                    <div class="hello-world-wrapper">
                        <button id="helloWorldBtn" class="hello-world-btn" data-i18n="heroHelloWorld">Hello world</button>
                        <img class="hand-img" src="${base}assets/images/hero/waving-hand.png" alt="">
                    </div>
                    <p class="frontend-headline" data-i18n="heroFrontend">Frontend</p>
                </div>
                <div class="hero-top-right">
                    <img class="photo-frame-img" src="${base}assets/images/hero/polaroid-frame.png" alt="">
                    <img class="profile-picture" src="${base}assets/images/hero/PPT1.jpg" alt="">
                    <p class="photo-signature" data-i18n="heroSignature">Daniel :)</p>
                </div>
            </div>
            <div class="hero-bottom">
                <p class="developer-headline" data-i18n="heroDeveloper">DEVELOPER</p>
                <a href="#contact"><button class="getintouch-btn" data-i18n="heroGetInTouch">Get in Touch</button></a>
            </div>
            <div class="mobile-photo-container">
                <div class="hero-top-right-mobile">
                    <img class="photo-frame-img-mobile" src="${base}assets/images/hero/polaroid-frame.png" alt="">
                    <img class="profile-picture-mobile" src="${base}assets/images/hero/PPT1.jpg" alt="">
                    <p class="photo-signature-mobile" data-i18n="heroSignature">Daniel :)</p>
                </div>
            </div>
        </div>
    `;
}