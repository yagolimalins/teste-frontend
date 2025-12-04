class Header extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="reset.css"/>

            <style>
                .header {
                    display: flex;
                }
            </style>

            <header class="header">
                <p>LIGA ACADÊMICA DE CLÍNICA MÉDICA</p>
                <div>
                    <button>Ajuda</button>
                    <img src="" alt="">
                    <div class="profile">
                        <img src="" alt="">
                        <p>Eduardo Leandro</p>
                    </div>
                </div>
            </header>
        `
    }
}

customElements.define('my-header', Header);