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
                    padding: 20px 100px;
                    gap: 20px;
                }

                .header-block {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .title-actions-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                }

                .title-slot {
                    flex: 1;
                }

                .footer-action-row {
                    display: flex;
                    justify-content: flex-end;
                }

                @media (max-width: 700px) {
                    .body {
                        padding: 25px 20px;
                    }

                    .title-actions-row {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 10px;
                    }

                    .footer-action-row {
                        justify-content: flex-start;
                    }
                }
            </style>

            <div class="template">
                <my-navbar></my-navbar>

                <div class="main">
                    <my-header></my-header>

                    <div class="body">

                        <div class="header-block">

                            <slot name="breadcrumb"></slot>

                            <div class="title-actions-row">
                                <div class="title-slot">
                                    <slot name="title"></slot>
                                </div>

                                <slot name="header-action"></slot>
                            </div>
                        </div>

                        <slot name="content"></slot>

                        <div class="footer-action-row">
                            <slot name="footer-action"></slot>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('my-template', Template);
