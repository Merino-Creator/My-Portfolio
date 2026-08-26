function projectsTemplate() {
    const base = getBasePath();
    return `
        <div class="projects-top">
            <div class="projects-intro">
                <h4 data-i18n="projectsCraftLabel">MY CRAFT</h4>
                <h3 data-i18n="projectsTitle">Projects</h3>
                <img class="projects-underline" src="${base}assets/images/projects/green-underline.png" alt="">
                <p class="projects-text" data-i18n="projectsText">Welcome to my projects section—I invite
                    you to explore and interact
                    with my latest work! My approach focuses on combining clean, efficient code with highly
                    responsive layouts to deliver smooth, user-friendly experiences. From structured task
                    management to dynamic gaming and real-time API integration, here is a showcase of what I
                    build.</p>
            </div>
            <div class="join-project">
                <div class="join">
                    <div id="joinImgWrapper" class="join-img-wrapper">
                        <a href="${base}html/join.html">
                            <img id="joinImg" class="join-img" src="${base}assets/images/projects/laptop.png"
                                alt="">
                        </a>
                        <img class="join-badge-img" src="${base}assets/images/projects/project-sticker.png"
                            alt="">
                        <a href="${base}html/join.html">
                            <button class="project-details-btn" data-i18n="projectDetailsBtn">Project
                                details</button>
                        </a>
                    </div>
                    <h4 data-i18n="joinTitle">Join</h4>
                    <p data-i18n="joinText">Task manager inspired by the Kanban system. Create and organize
                        tasks using drag-and-drop functions, and assign users and categories.
                    </p>
                    <div class="project-details-btn-box">
                        <a href="${base}html/join.html">
                            <button class="project-details-btn-mobile" data-i18n="projectDetailsBtn">Project
                                details</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="projects-bottom">
            <div class="sharky-project">
                <div class="sharky">
                    <div class="sharky-img-wrapper">
                        <a href="${base}html/sharky.html">
                            <img class="sharky-img" src="${base}assets/images/projects/sharky.png" alt="">
                        </a>
                        <a href="${base}html/sharky.html">
                            <button class="project-details-btn" data-i18n="projectDetailsBtn">Project
                                details</button>
                        </a>
                    </div>
                    <h4 data-i18n="sharkyTitle">Sharky</h4>
                    <p data-i18n="sharkyText">A jump, run, and shoot game based on an object-oriented
                        approach. Help Sharky to find coins and toxic bottles to fight against the big
                        killer whale.
                    </p>
                    <div class="project-details-btn-box">
                        <a href="${base}html/sharky.html">
                            <button class="project-details-btn-mobile" data-i18n="projectDetailsBtn">Project
                                details</button>
                        </a>
                    </div>
                </div>
            </div>
            <div class="dabubble-project">
                <div class="dabubble">
                    <div class="dabubble-img-wrapper">
                        <a href="${base}html/pokedex.html">
                            <img class="dabubble-img" src="${base}assets/images/projects/dabubble.png" alt="">
                        </a>
                        <a href="">
                            <button class="project-details-btn" data-i18n="projectDetailsBtn">
                                Project details
                            </button>
                        </a>
                    </div>
                    <h4 data-i18n="dabubbleTitle">DABubble</h4>
                    <p data-i18n="dabubbleText">
                        This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, 
                        real-time messaging, and robust channel organization.
                    </p>
                    <div class="project-details-btn-box">
                        <a href="">
                            <button class="project-details-btn-mobile" data-i18n="projectDetailsBtn">
                                Project details
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}