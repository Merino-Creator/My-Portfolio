function skillsTemplate() {
    const base = getBasePath();
    return `
        <div class="skill-top">
            <div class="skill-top-left">
                <p class="skill-headline-one" data-i18n="skillStackLabel">MY STACK</p>
                <p class="skill-headline-two" data-i18n="skillSetTitle">Skill set</p>
                <img class="skill-circle-img" src="${base}assets/images/skills/circle.png" alt="">
            </div>
            <div class="skill-description">
                <img class="skill-paper-img" src="${base}assets/images/skills/paper-long-2.png" alt="">
                <p class="skill-text" data-i18n="skillText">My strengths lie in HTML, CSS, and
                    JavaScript—the fundamental building
                    blocks of the modern web, which I strategically apply throughout my projects.
                </p>
            </div>
        </div>
        <div class="skill-bottom">
            <div class="skill-badges">
                <figure>
                    <img class="skill-badge-img" src="${base}assets/images/skills/html.png" alt="">
                    <figcaption>HTML</figcaption>
                </figure>
                <figure>
                    <img class="skill-badge-img" src="${base}assets/images/skills/css.png" alt="">
                    <figcaption>CSS</figcaption>
                </figure>
                <figure>
                    <img class="skill-badge-img" src="${base}assets/images/skills/javascript.png" alt="">
                    <figcaption>JavaScript</figcaption>
                </figure>
                <figure>
                    <img class="skill-badge-img" src="${base}assets/images/skills/firebase.png" alt="">
                    <figcaption>Firebase</figcaption>
                </figure>
                <figure>
                    <img class="skill-badge-img" src="${base}assets/images/skills/github.png" alt="">
                    <figcaption>Git</figcaption>
                </figure>
                <figure>
                    <img class="skill-badge-img" src="${base}assets/images/skills/restapi.png" alt="">
                    <figcaption>REST-API</figcaption>
                </figure>
                <figure>
                    <img class="skill-badge-img" src="${base}assets/images/skills/scrum.png" alt="">
                    <figcaption>Scrum</figcaption>
                </figure>
                <div class="skill-bottom-right-mobile">
                    <img class="peel-img-start" src="${base}assets/images/skills/peel-start.webp" alt="">
                    <img class="peel-img-begin" src="${base}assets/images/skills/peel-begin.webp" alt="">
                    <img class="peel-arrow" src="${base}assets/images/skills/Arrow.png" alt="">
                    <p class="peel-text" data-i18n="skillPullToPeel">
                        Pull to<br>
                        peel
                    </p>
                    <img class="peel-img-end" src="${base}assets/images/skills/peel-end.webp" alt="">
                    <div class="peeled-image-box">
                        <p class="peeled-text" data-i18n="skillPeeledText">Also I´m interested<br> in diving
                            into:</p>
                        <div class="peeled-skill-badges">
                            <figure class="peeled-figure">
                                <img class="peeled-skill-badge-img" src="${base}assets/images/skills/angular.png"
                                    alt="">
                                <figcaption class="peeled-figcaption">Angular</figcaption>
                            </figure>
                            <figure class="peeled-figure">
                                <img class="peeled-skill-badge-img" src="${base}assets/images/skills/python.png"
                                    alt="">
                                <figcaption class="peeled-figcaption">Python</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skill-bottom-right">
                <img class="peel-img-start" src="${base}assets/images/skills/peel-start.webp" alt="">
                <img class="peel-img-begin" src="${base}assets/images/skills/peel-begin.webp" alt="">
                <img class="peel-arrow" src="${base}assets/images/skills/Arrow.png" alt="">
                <p class="peel-text" data-i18n="skillPullToPeel">
                    Pull to<br>
                    peel
                </p>
                <img class="peel-img-end" src="${base}assets/images/skills/peel-end.webp" alt="">
                <div class="peeled-image-box">
                    <p class="peeled-text" data-i18n="skillPeeledText">Also I´m interested<br> in diving
                        into:</p>
                    <div class="peeled-skill-badges">
                        <figure class="peeled-figure">
                            <img class="peeled-skill-badge-img" src="${base}assets/images/skills/angular.png"
                                alt="">
                            <figcaption class="peeled-figcaption">Angular</figcaption>
                        </figure>
                        <figure class="peeled-figure">
                            <img class="peeled-skill-badge-img" src="${base}assets/images/skills/python.png"
                                alt="">
                            <figcaption class="peeled-figcaption">Python</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    `;
}