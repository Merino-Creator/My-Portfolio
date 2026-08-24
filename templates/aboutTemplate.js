function aboutTemplate() {
    const base = getBasePath();
    return `
        <div class="location">
            <div class="green">
                <img class="about-ripped-img" src="${base}assets/images/about-me/green.png" alt="">
                <div class="green-text">
                    <img class="about-img" src="${base}assets/images/about-me/location-pin.png" alt="">
                    <p data-i18n="aboutBasedIn">Based in Stuttgart</p>
                </div>
            </div>
            <div class="purple">
                <img class="about-ripped-img" src="${base}assets/images/about-me/purple.png" alt="">
                <div class="purple-text">
                    <img class="about-img" src="${base}assets/images/about-me/location-way.png" alt="">
                    <p data-i18n="aboutRelocate">Open to relocate</p>
                </div>
            </div>
            <div class="brown">
                <img class="about-ripped-img" src="${base}assets/images/about-me/brown.png" alt="">
                <div class="brown-text">
                    <img class="about-img" src="${base}assets/images/about-me/location-house.png" alt="">
                    <p data-i18n="aboutRemote">Open to work remote</p>
                </div>
            </div>
        </div>
        <div class="about-me">
            <div class="about-me-top">
                <h4 data-i18n="aboutWhoTitle">WHO´S DANIEL?</h4>
                <h3 data-i18n="aboutTitle">About me</h3>
                <img class="about-underline" src="${base}assets/images/about-me/underline.png" alt="">
            </div>
            <div class="about-me-mid">
                <p class="about-me-text" data-i18n="aboutText">
                    Greetings, I'm Daniel.<br>
                    Your upcoming Frontend Developer.<br>
                    My passion for coding comes from being able to turn ideas and thoughts into something
                    accessible.<br>
                    A lot of my inspiration comes from a gaming point of view. Often I found myself
                    fascinated by the possibilities of world-building, for example.<br>
                    Just like building a world in a game, a website is a place you build and make as
                    enjoyable as possible for the user.<br>
                    So with every world I build, I learn how to make it better and more exciting for the
                    future.<br>
                    <br>
                    Let's collaborate and build the world you are looking for together!
                </p>
            </div>
            <div class="about-me-bottom">
                <a href="#contact"><button class="lets-talk-btn" data-i18n="aboutLetsTalk">Let´s talk</button></a>
            </div>
        </div>
    `;
}