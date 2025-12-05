class Template extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="styles/reset.css"/>
            <link rel="stylesheet" href="styles/global.css"/>

            <style>
                .template {
                    display: flex;
                }
                
                .main {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }

            </style>

            <div class="template">
                <my-navbar></my-navbar>
                <div class="main">
                    <my-header></my-header>
                    <div class="content">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('my-template', Template);