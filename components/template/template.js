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

                .body {
                    display: flex;
                    flex-direction: column;
                    padding: 25px 100px;
                }
            </style>

            <div class="template">
                <my-navbar></my-navbar>
                <div class="main">
                    <my-header></my-header>
                    <div class="body">
                        <slot name="breadcrumb" class="breadcrumb"></slot>
                        <slot name="title" class="title"></slot>
                        <slot name="content" class="content"></slot>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('my-template', Template);