class Survey extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.showQuestionInput = false;
        this.questions = [
            { text: "Você gostou do evento?", required: false },
            { text: "Que nota você daria para a organização?", required: false }
        ];
        this.editIndex = null;
        this.editingQuestion = null;
    }

    connectedCallback() {
        this.render();
    }

    toggleQuestionInput(show, editIndex = null) {
        this.showQuestionInput = show;
        this.editIndex = editIndex;
        this.render();

        if (!show) return;

        const input = this.shadowRoot.querySelector("#question-input");
        const checkbox = this.shadowRoot.querySelector("#required-checkbox");

        if (input) {
            input.focus();
            if (editIndex !== null && this.editingQuestion) {
                input.value = this.editingQuestion.text;
                checkbox.checked = this.editingQuestion.required;
            } else {
                input.value = "";
                checkbox.checked = false;
            }

            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") this.addQuestion();
            });
        }
    }

    addQuestion() {
        const input = this.shadowRoot.querySelector("#question-input");
        const checkbox = this.shadowRoot.querySelector("#required-checkbox");
        const text = input.value.trim();
        const required = checkbox.checked;

        if (!text) return;

        if (this.editIndex !== null) {
            this.questions.splice(this.editIndex, 0, { text, required });
            this.editIndex = null;
            this.editingQuestion = null;
        } else {
            this.questions.push({ text, required });
        }

        this.toggleQuestionInput(false);
    }

    deleteQuestion(index) {
        this.questions.splice(index, 1);
        this.render();
    }

    editQuestion(index) {
        this.editingQuestion = this.questions.splice(index, 1)[0];
        this.editIndex = index;
        this.toggleQuestionInput(true, index);
    }

    get styles() {
        return /*html*/`
            <style>
                :host {
                    font-family: Arial, sans-serif;
                }

                .title {
                    font-size: var(--title-size);
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    padding: 35px;
                    border-radius: 15px;
                    background-color: white;
                    gap: 30px;
                }

                .head {
                    background: var(--background-color);
                    padding: 20px;
                    border-radius: 12px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .head-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--darker-font);
                }

                .info-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    line-height: 16px;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .left-group {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .info-block {
                    display: flex;
                    flex-direction: column;
                }

                p {
                    margin: 0;
                    color: var(--lighter-font);
                    font-size: 14px;
                }

                .value {
                    margin-top: 4px;
                    color: var(--darker-font);
                    font-weight: 600;
                }

                .status-tag {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    background-color: #E7FFE1;
                    padding: 4px 8px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 500;
                    color: #66BB33;
                    white-space: nowrap;
                }

                .status-dot {
                    width: 8px;
                    height: 8px;
                    background-color: #66BB33;
                    border-radius: 50%;
                }

                .separator {
                    width: 1px;
                    height: 30px;
                    background-color: var(--separator-color);
                }

                .actions {
                    display: flex;
                    gap: 10px;
                    flex-shrink: 0;
                }

                .table-wrapper {
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid var(--separator-color);
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    background: transparent;
                }

                thead tr {
                    background: var(--background-color);
                }

                th {
                    text-align: left;
                    padding: 16px 24px;
                    font-weight: 600;
                    color: var(--darker-font);
                    font-size: 14px;
                }

                th:nth-child(2),
                td:nth-child(2) {
                    text-align: right;
                }

                tbody tr {
                    border-bottom: 1px solid var(--separator-color);
                }

                tbody tr:last-child {
                    border-bottom: none;
                }

                td {
                    padding: 16px 24px;
                    font-size: 14px;
                    color: var(--lighter-font);
                }

                .row-actions {
                    display: flex;
                    gap: 12px;
                    justify-content: flex-end;
                    cursor: pointer;
                }

                .question-input-block {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .question-input-block label span {
                    color: var(--brand-color);
                }

                input[type="text"] {
                    padding: 10px 12px;
                    border: 1px solid var(--input-border);
                    border-radius: 8px;
                    font-size: 14px;
                }

                input[type="text"]:focus {
                    border-color: var(--brand-color);
                    outline: none;
                }

                .checkbox-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                }

                .checkbox-row input[type="checkbox"] {
                    accent-color: var(--brand-color);
                }

                .checkbox-row p {
                    color: var(--lighter-font);
                    margin: 0;
                }

                .separator-line {
                    width: 100%;
                    height: 1px;
                    background: var(--separator-color);
                    margin-top: 20px;
                }

                .question-buttons {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                }

                .required-star {
                    color: var(--brand-color);
                    margin-left: 2px;
                }

                @media (max-width: 1000px) {
                    .info-row {
                        flex-direction: column;
                        align-items: flex-start;
                        width: 100%;
                        gap: 20px;
                    }

                    .left-group {
                        flex-direction: column;
                        align-items: flex-start;
                        width: 100%;
                        gap: 20px;
                    }

                    .separator {
                        width: 100%;
                        height: 1px;
                        background-color: var(--separator-color);
                        display: block;
                    }

                    .actions {
                        width: 100%;
                        justify-content: flex-start;
                    }

                    .content {
                        padding: 20px;
                        gap: 20px;
                    }

                    .question-buttons {
                        flex-direction: column;
                        gap: 10px;
                        align-items: stretch;
                    }

                    .header-action {
                        display: none;
                    }
                }
            </style>
        `;
    }

    get template() {
        return /*html*/`
            <link rel="stylesheet" href="styles/reset.css"/>
            <link rel="stylesheet" href="styles/global.css"/>
            ${this.styles}

            <my-template>
                <my-breadcrumb slot="breadcrumb" paths='["Painel", "Pesquisa de Satisfação"]'></my-breadcrumb>
                <h1 slot="title" class="title">Pesquisa de Satisfação</h1>

                <div class="header-action" slot="header-action">
                    <my-button label="Resultados da Pesquisa" variant="secondary"></my-button>
                </div>

                <div slot="content-1" class="content">

                    <div class="head">
                        <div class="head-title">Nome da pesquisa</div>
                        <div class="info-row">
                            <div class="left-group">
                                <div class="info-block">
                                    <p>Data</p>
                                    <div class="value">12/06/2024</div>
                                </div>
                                <div class="separator"></div>
                                <div class="info-block">
                                    <p>Enviar pesquisa para</p>
                                    <div class="value">Só participantes credenciados</div>
                                </div>
                                <div class="separator"></div>
                                <div class="status-tag">
                                    <span class="status-dot"></span>Disponível
                                </div>
                            </div>
                            <div class="actions">
                                <my-button label="Editar" variant="secondary"></my-button>
                                <my-button label="Pré-visualizar" variant="secondary"></my-button>
                            </div>
                        </div>
                    </div>

                    <div class="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Perguntas (${this.questions.length})</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${this.questions.map((q, i) => /*html*/`
                                    <tr>
                                        <td>${q.text}${q.required ? '<span class="required-star">*</span>' : ''}</td>
                                        <td>
                                            <div class="row-actions">
                                                <span data-edit="${i}">✏️</span>
                                                <span data-delete="${i}">🗑️</span>
                                            </div>
                                        </td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>

                    ${this.showQuestionInput
                        ? /*html*/`
                            <div class="question-input-block">
                                <label>Pergunta<span>*</span></label>
                                <input id="question-input" type="text">
                                <label class="checkbox-row">
                                    <input type="checkbox" id="required-checkbox">
                                    <p>Obrigatório</p>
                                </label>
                                <div class="separator-line"></div>
                                <div class="question-buttons">
                                    <my-button label="Cancelar" variant="secondary" id="cancel-add-question"></my-button>
                                    <my-button label="Salvar" variant="primary" id="save-question-btn"></my-button>
                                </div>
                            </div>
                        `
                        : `<my-button id="add-question-btn" label="Adicionar pergunta" variant="secondary"></my-button>`
                    }

                </div>

                ${!this.showQuestionInput
                    ? /*html*/`
                        <div slot="footer-action-left"></div>
                        <my-button slot="footer-action-right" label="Enviar pesquisa" variant="primary"></my-button>`
                    : ''
                }
            </my-template>
        `;
    }

    render() {
        this.shadowRoot.innerHTML = this.template;

        this.shadowRoot.querySelector("#add-question-btn")?.addEventListener("click", () => this.toggleQuestionInput(true));
        this.shadowRoot.querySelector("#cancel-add-question")?.addEventListener("click", () => {
            if (this.editIndex !== null && this.editingQuestion) {
                this.questions.splice(this.editIndex, 0, this.editingQuestion);
                this.editIndex = null;
                this.editingQuestion = null;
            }
            this.toggleQuestionInput(false);
        });
        this.shadowRoot.querySelector("#save-question-btn")?.addEventListener("click", () => this.addQuestion());

        this.shadowRoot.querySelectorAll(".row-actions span[data-edit]").forEach(el =>
            el.addEventListener("click", e => this.editQuestion(parseInt(e.target.dataset.edit)))
        );

        this.shadowRoot.querySelectorAll(".row-actions span[data-delete]").forEach(el =>
            el.addEventListener("click", e => this.deleteQuestion(parseInt(e.target.dataset.delete)))
        );
    }
}

customElements.define("my-survey", Survey);
