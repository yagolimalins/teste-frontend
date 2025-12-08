class Header extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="styles/reset.css"/>
            <link rel="stylesheet" href="styles/global.css"/>

            <style>            
                .header {
                    display: flex;
                    justify-content: space-between;
                    padding: 30px 90px;
                    align-items: center;
                    border-style: solid;
                    border-width: 0px 0px 2px 0px;
                    border-color: var(--border-color);
                }

                .team {
                    color: var(--darker-font);
                    text-decoration: underline;
                }

                .menu {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .help {
                    display: flex;
                    color: white;
                    background-color: var(--brand-color);
                    padding: 6px 16px;
                    border-radius: 20px;
                    cursor: pointer;
                }

                .avatar {
                    width: 30px;
                    border-radius: 100px;
                }

                .profile {
                    display: flex;
                    align-items: center;
                }

                .name {
                    color: var(--lighter-font)
                }

                a {
                    cursor: pointer;
                }

                @media screen and (max-width: 1000px) {
                    .header {
                        display: none;
                    }
                }

            </style>

            <header class="header">
                <a class="team">LIGA ACADÊMICA DE CLÍNICA MÉDICA</a>
                <div class="menu">
                    <div class="help">Ajuda<i class="fa fa-question-circle-o"></i></div>
                    <img class="avatar" src="assets/images/avatar.webp" alt="">
                    <div class="profile">
                        <img src="" alt="">
                        <a class="name">Yago Lins</a>
                    </div>
                </div>
            </header>
        `
    }
}

customElements.define('my-header', Header);