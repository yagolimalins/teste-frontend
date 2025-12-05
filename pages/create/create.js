class Create extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="styles/reset.css"/>
            <link rel="stylesheet" href="styles/global.css"/>

            <style>
                .title {
                    font-size: var(--title-size);
                    margin-bottom: 20px;
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

                label {
                    font-weight: 500;
                    font-size: 12px;
                    margin-bottom: 8px;
                }

                span {
                    color: var(--brand-color)
                }

                input {
                    padding: 10px 15px;
                    border-radius: 8px;
                    border-style: solid;
                    border-color: var(--input-border);
                }

                input:focus {
                    border-color: var(--brand-color);
                    outline: none;
                }

                textarea {
                    padding: 10px 15px;
                    border-radius: 8px;
                    border-style: solid;
                    border-color: var(--input-border);
                    resize: none
                }

                textarea:focus {
                    border-color: var(--brand-color);
                    outline: none;
                }

                .field {
                    display: flex;
                    flex-direction: column;
                }

                .check {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 10px;
                    margin: 10px 0px;
                }

                .radio-group {
                    display: flex;
                    flex-direction: row;
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
                    vertical-align: middle;
                    accent-color: var(--brand-color);
                }

                .check label,
                .radio-option label {
                    margin-bottom: 0;
                    display: flex;
                    align-items: center;
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
                    margin: 1rem 0;
                    margin-bottom: 10px;
                }

                .buttons {
                    display: flex;
                    justify-content: flex-end;
                }

            </style>

            <body>
                <my-template>
                    <my-breadcrumb slot="breadcrumb" paths='["Painel", "Pesquisa de Satisfação"]'></my-breadcrumb>
                    <h1 slot="title" class="title">Criar Pesquisa de Satisfação</h1>
                    <div slot="content" class="content">
                        <form class="form" action="">
                            <div class="field">
                                <label for="name">Nome<span>*</span></label>
                                <input type="text" name="name" id="name">
                            </div>
                            <div class="field">
                                <label for="description">Descrição</label>
                                <textarea id="description" name="description" rows="4"></textarea>
                            </div>
                            <div class="field">
                                <label for="startDate">Período</label>
                                <div class="period-inputs">
                                    <input
                                        type="text"
                                        id="startDate"
                                        name="startDate"
                                        placeholder="Data de Início"
                                        class="date-input"
                                    >
                                    <input
                                        type="text"
                                        id="endDate"
                                        name="endDate"
                                        placeholder="Data de Término"
                                        class="date-input"
                                    >
                                </div>
                            </div>
                            
                            <div class="check">
                                <input type="checkbox" id="available" name="available">
                                <label for="available">
                                    Disponível
                                </label>
                            </div>
                            
                            <div class="field">
                                <label for="surveyType">Enviar pesquisa para</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" id="allConfirmed" name="surveyType" value="all">
                                        <label for="allConfirmed">
                                            Todos os confirmados
                                        </label>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" id="onlyAccredited" name="surveyType" value="accredited">
                                        <label for="onlyAccredited">
                                            Só credenciados
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <hr class="divider">
                            
                            <div class="buttons">
                                <my-button label="Cadastrar"></my-button>
                            </div>
                        </form>
                    </div>
                </my-template>
            </body>
        `;
        
        this.setupDateInputs();
    }
    
    setupDateInputs() {
        const dateInputs = this.shadowRoot.querySelectorAll('.date-input');
        
        dateInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.type = 'date';
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.type = 'text';
                }
            });
        });
    }
}

customElements.define('my-create', Create);