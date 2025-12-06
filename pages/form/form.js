class Form extends HTMLElement {
    static get observedAttributes() {
        return ["mode"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.initialize();
    }

    attributeChangedCallback() {
        this.initialize();
    }

    initialize() {
        this.render();
        this.setupDateInputs();
    }

    get mode() {
        return this.getAttribute("mode") || "create";
    }

    get title() {
        return this.mode === "edit"
            ? "Editar Pesquisa de Satisfação"
            : "Criar Pesquisa de Satisfação";
    }

    get buttons() {
        if (this.mode === "edit") {
            return `
                <my-button label="Cancelar" variant="secondary"></my-button>
                <my-button label="Enviar" variant="primary"></my-button>
            `;
        }

        return `<my-button label="Cadastrar" variant="primary"></my-button>`;
    }

    get buttonsClass() {
        return this.mode === "edit" ? "buttons edit-layout" : "buttons create-layout";
    }

    get styles() {
        return /*html*/`
            <style>
                .title {
                    font-size: var(--title-size);
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    padding: 35px;
                    border-radius: 15px;
                    background-color: white;
                }

                .form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .field {
                    display: flex;
                    flex-direction: column;
                }

                label {
                    font-weight: 500;
                    font-size: 12px;
                    margin-bottom: 8px;
                }

                span {
                    color: var(--brand-color);
                }

                input,
                textarea {
                    padding: 10px 15px;
                    border-radius: 8px;
                    border: 1px solid var(--input-border);
                }

                input:focus,
                textarea:focus {
                    border-color: var(--brand-color);
                    outline: none;
                }

                textarea {
                    resize: none;
                }

                .check {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin: 10px 0;
                }

                .radio-group {
                    display: flex;
                    gap: 20px;
                    margin-top: 10px;
                    flex-wrap: wrap;
                }

                .radio-option {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                input[type="checkbox"],
                input[type="radio"] {
                    width: 16px;
                    height: 16px;
                    margin: 0;
                    padding: 0;
                    accent-color: var(--brand-color);
                }

                .check label,
                .radio-option label {
                    margin-bottom: 0;
                    font-weight: 400;
                    color: var(--lighter-font);
                }

                .period-inputs {
                    display: flex;
                    gap: 15px;
                    margin-top: 5px;
                }

                .period-inputs input {
                    flex: 1;
                }

                .divider {
                    width: 100%;
                    border: none;
                    border-top: 1px solid var(--border-color);
                    margin: 10px 0;
                }

                .buttons {
                    display: flex;
                    gap: 10px;
                }

                .create-layout {
                    justify-content: flex-end;
                }

                .edit-layout {
                    justify-content: space-between;
                }
            </style>
        `;
    }

    get formFields() {
        return /*html*/`
            <div class="field">
                <label for="name">Nome<span>*</span></label>
                <input type="text" id="name" name="name">
            </div>

            <div class="field">
                <label for="description">Descrição</label>
                <textarea id="description" name="description" rows="4"></textarea>
            </div>

            <div class="field">
                <label for="startDate">Período</label>
                <div class="period-inputs">
                    <input type="text" id="startDate" name="startDate" placeholder="Data de Início" class="date-input">
                    <input type="text" id="endDate" name="endDate" placeholder="Data de Término" class="date-input">
                </div>
            </div>

            <div class="check">
                <input type="checkbox" id="available" name="available">
                <label for="available">Disponível</label>
            </div>

            <div class="field">
                <label for="surveyType">Enviar pesquisa para</label>
                <div class="radio-group">
                    <div class="radio-option">
                        <input type="radio" id="allConfirmed" name="surveyType" value="all">
                        <label for="allConfirmed">Todos os confirmados</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="onlyAccredited" name="surveyType" value="accredited">
                        <label for="onlyAccredited">Só credenciados</label>
                    </div>
                </div>
            </div>

            <hr class="divider">
        `;
    }

    get buttonsSection() {
        return /*html*/`
            <div class="${this.buttonsClass}">
                ${this.buttons}
            </div>
        `;
    }

    get template() {
        return /*html*/`
            <link rel="stylesheet" href="styles/reset.css"/>
            <link rel="stylesheet" href="styles/global.css"/>
            ${this.styles}

            <my-template>
                <my-breadcrumb slot="breadcrumb" paths='["Painel", "Pesquisa de Satisfação"]'></my-breadcrumb>
                <h1 slot="title" class="title">${this.title}</h1>
                <div slot="content" class="content">
                    <form class="form">
                        ${this.formFields}
                        ${this.buttonsSection}
                    </form>
                </div>
            </my-template>
        `;
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }

    setupDateInputs() {
        const dateInputs = this.shadowRoot.querySelectorAll(".date-input");
        dateInputs.forEach(input => {
            input.addEventListener("focus", () => input.type = "date");
            input.addEventListener("blur", () => {
                if (!input.value) input.type = "text";
            });
        });
    }
}

customElements.define("my-form", Form);
