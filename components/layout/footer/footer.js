class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    get styles() {
        return /*html*/`
            <link rel="stylesheet" href="styles/reset.css"/>
            <link rel="stylesheet" href="styles/global.css"/>

            <style>
                :host {
                    display: block;
                }

                footer {
                    text-align: center;
                    color: var(--lighter-font);
                    line-height: 20px;
                    margin-top: auto;
                    padding: 40px;
                }

                footer a {
                    color: var(--brand-color);
                    text-decoration: none;
                }

                footer a.highlight {
                    text-decoration: underline;
                }

                .br {
                    display: none;
                }

                @media (max-width: 1000px) {
                    .br {
                        display: block;
                    }
                }
            </style>
        `;
    }

    render() {
        const year = new Date().getFullYear();

        this.shadowRoot.innerHTML = /*html*/`
            ${this.styles}

            <footer>
                Desenvolvido por 
                <a href="#" class="highlight">Doity Plataforma de Eventos</a> 
                - ${year} <br class="br">
                - Todos os direitos reservados - <br class="br">
                <a href="#">Central de Ajuda</a> - 
                <a href="#">Entre em Contato</a>
            </footer>
        `;
    }
}

customElements.define("my-footer", MyFooter);
