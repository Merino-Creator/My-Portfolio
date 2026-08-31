function contactTemplate() {
    const base = getBasePath();
    return `
        <div class="contact-badge-mobile">
            <img class="contact-badge-img-mobile" src="${base}assets/images/stickers/purple-sticker.webp" alt="">
            <img class="contact-badge-circle-img-mobile" src="${base}assets/images/badge-circle-new.png" alt="">
            <img class="contact-badge-logo-img-mobile" src="${base}assets/images/logo.png" alt="">
        </div>
        <div class="contact-left">
            <h4 data-i18n="contactMeLabel">CONTACT ME</h4>
            <h3 data-i18n="contactTitle">Ready to work together?</h3>
            <p class="contact-text" data-i18n="contactText">I'm looking for a position as a frontend
                developer, where I can actively
                apply my knowledge in HTML, CSS, and JavaScript while continuing to grow. I work in a
                structured way, tackle challenges head-on, and strive to find the best possible
                solution.<br>
                <br>
                Furthermore, I'm looking forward to becoming part of a team where I can contribute new ideas
                and learn
                from the experience of others.
            </p>
            <img class="contact-arrow-img" src="${base}assets/images/contact/green-arrow.png" alt="">
        </div>
        <div class="contact-right">
            <div class="contact-badge">
                <img class="contact-badge-img" src="${base}assets/images/stickers/purple-sticker.webp" alt="">
                <img class="contact-badge-circle-img" src="${base}assets/images/badge-circle-new.png" alt="">
                <img class="contact-badge-logo-img" src="${base}assets/images/logo.png" alt="">
            </div>
            <div class="contact-questions">
                <div id="barOne" class="contact-questions-seperator bar-one"></div>
                <div id="nameQuestion" class="name-question">
                    <h4 data-i18n="nameQuestion">What's your name?</h4>
                    <input id="nameInput" class="contact-input-field" type="text"
                        placeholder="Your name goes here" data-i18n-placeholder="namePlaceholder">
                </div>
                <div id="barTwo" class="contact-questions-seperator bar-two"></div>
                <div id="emailQuestion" class="email-question">
                    <h4 data-i18n="emailQuestion">What's your email?</h4>
                    <input id="emailInput" class="contact-input-field" type="email"
                        placeholder="yourmail@email.com" data-i18n-placeholder="emailPlaceholder">
                </div>
                <div id="barThree" class="contact-questions-seperator bar-three"></div>
                <div id="helpQuestion" class="help-question">
                    <h4 data-i18n="helpQuestion">How can I help you?</h4>
                    <input id="helpInput" class="contact-input-field" type="text"
                        placeholder="Hello Daniel, I am interested in..."
                        data-i18n-placeholder="helpPlaceholder">
                </div>
                <div id="barFour" class="contact-questions-seperator bar-four"></div>
            </div>
            <div class="contact-check">
                <div class="checkbox-wrapper" id="checkboxWrapper">
                    <input id="checkbox" class="checkbox" type="checkbox">
                    <img id="checkmark" class="checkmark-img" src="${base}assets/images/contact/check.png"
                        alt="">
                </div>
                <p><span data-i18n="privacyText">I've read the</span> <a href="${base}html/legal-notice.html" class="contact-link"
                        data-i18n="privacyLink">privacy policy</a> <span data-i18n="privacyTextEnd">and
                        agree to the processing of
                        my data as outlined.</span></p>
            </div>
            <div class="send-btn-mobile">
                <img class="contact-arrow-img-mobile" src="${base}assets/images/contact/green-arrow.png" alt="">
                <button id="sendBtn" class="send-btn" data-i18n="sendBtn" disabled>Send</button>
            </div>
        </div>
    `;
}