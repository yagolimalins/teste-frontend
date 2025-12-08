class Results extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
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
                    gap: 15px;
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

                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
                    gap: 25px;
                    width: 100%;
                }

                .comments-section {
                    margin-top: 20px;
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .comments-section h2 {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--darker-font);
                    margin-bottom: 16px;
                }

                .comments-number {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--lighter-font);
                }

                .comments-table-wrapper {
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid var(--separator-color);
                }

                .comments-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .comments-table thead tr {
                    background: var(--background-color);
                }

                .comments-table th {
                    text-align: left;
                    padding: 14px 20px;
                    font-weight: 600;
                    font-size: 14px;
                    color: var(--darker-font);
                }

                .comments-table td {
                    padding: 18px 20px;
                    font-size: 14px;
                    color: var(--lighter-font);
                    border-bottom: 1px solid var(--separator-color);
                }

                .comments-table tr:last-child td {
                    border-bottom: none;
                }

                .pagination {
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    margin-top: 10px;
                }

                .page-btn {
                    width: 32px;
                    height: 32px;
                    border-radius: 6px;
                    border: 1px solid var(--separator-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    cursor: pointer;
                    user-select: none;
                }

                .page-btn.active {
                    background: var(--brand-color);
                    color: white;
                    border-color: var(--brand-color);
                }

                .page-btn.active:hover {
                    background: var(--brand-color);
                    color: white;
                    border-color: var(--brand-color);
                }

                .page-btn:hover {
                    color: var(--brand-color);
                    border-color: var(--brand-color)
                }

                @media (max-width: 1000px) {

                    .left-group {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 20px;
                        width: 100%;
                    }

                    .separator {
                        width: 100%;
                        height: 1px;
                        background-color: var(--separator-color);
                    }


                    .info-row {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .actions {
                        width: 100%;
                        justify-content: flex-start;
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
                <h1 slot="title" class="title">Resultados da Pesquisa</h1>

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

                                <div class="info-block">
                                    <div class="value" style="font-size: 14px;">350 respostas</div>
                                </div>
                            </div>

                            <div class="actions">
                                <my-button label="Baixar relatório" variant="secondary"></my-button>
                            </div>
                        </div>
                    </div>

                    <div class="cards-grid">

                        <my-card
                            number="01"
                            question="Você gostou da apresentação do palestrante principal?"
                            votes='{
                                "Excelente": 70,
                                "Bom": 12,
                                "Regular": 44,
                                "Ruim": 5,
                                "Péssimo": 19
                            }'
                        ></my-card>

                        <my-card
                            number="02"
                            question="Como você avalia a organização do evento?"
                            votes='{
                                "Excelente": 22,
                                "Bom": 48,
                                "Regular": 10,
                                "Ruim": 6,
                                "Péssimo": 3
                            }'
                        ></my-card>

                        <my-card
                            number="03"
                            question="A estrutura do local atendeu às suas expectativas?"
                            votes='{
                                "Excelente": 9,
                                "Bom": 18,
                                "Regular": 33,
                                "Ruim": 40,
                                "Péssimo": 6
                            }'
                        ></my-card>

                        <my-card
                            number="04"
                            question="Como você avalia a qualidade do som e imagem?"
                            votes='{
                                "Excelente": 41,
                                "Bom": 9,
                                "Regular": 18,
                                "Ruim": 7,
                                "Péssimo": 50
                            }'
                        ></my-card>

                        <my-card
                            number="05"
                            question="O conteúdo apresentado foi relevante para você?"
                            votes='{
                                "Excelente": 3,
                                "Bom": 39,
                                "Regular": 21,
                                "Ruim": 5,
                                "Péssimo": 1
                            }'
                        ></my-card>

                        <my-card
                            number="06"
                            question="Você recomendaria este evento para outra pessoa?"
                            votes='{
                                "Excelente": 54,
                                "Bom": 16,
                                "Regular": 8,
                                "Ruim": 3,
                                "Péssimo": 2
                            }'
                        ></my-card>

                    </div>

                </div>

                <div slot="content-2" class="comments-section">
                    <h2>Comentários <span class="comments-number">(32)</span></h2>

                    <div class="comments-table-wrapper">
                        <table class="comments-table">
                            <thead>
                                <tr>
                                    <th>Comentário</th>
                                    <th>Participante</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Gostei bastante da dinâmica das atividades, mas acho que poderia ter mais tempo para networking.
                                    </td>
                                    <td>Ana Paula Rodrigues</td>
                                </tr>

                                <tr>
                                    <td>O áudio do auditório principal estava muito baixo no início, mas depois ajustaram e ficou ótimo.</td>
                                    <td>Carlos Henrique Farias</td>
                                </tr>

                                <tr>
                                    <td>Foi tudo muito organizado e objetivo. Só senti falta de opções vegetarianas no coffee break.</td>
                                    <td>Juliana Martins Nogueira</td>
                                </tr>

                                <tr>
                                    <td>Achei a palestra final sensacional! Levarei vários insights para aplicar no meu trabalho.</td>
                                    <td>Rafael Dutra Lima</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="pagination">
                        <div class="page-btn active">1</div>
                        <div class="page-btn">2</div>
                        <div class="page-btn">…</div>
                        <div class="page-btn">9</div>
                        <div class="page-btn">10</div>
                        <div class="page-btn">></div>
                    </div>
                </div>

                <my-button slot="footer-action-left" label="Voltar" variant="secondary"></my-button>
            </my-template>
        `;
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }
}

customElements.define("my-results", Results);
