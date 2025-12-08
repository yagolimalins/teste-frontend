class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    get question() {
        return this.getAttribute("question") || "";
    }

    get number() {
        return this.getAttribute("number") || "";
    }

    get votes() {
        const labels = [
            { label: "Excelente", color: "var(--progress-green)" },
            { label: "Bom",       color: "var(--progress-olive)" },
            { label: "Regular",   color: "var(--progress-yellow)" },
            { label: "Ruim",      color: "var(--progress-pink)" },
            { label: "Péssimo",   color: "var(--progress-red)" }
        ];

        try {
            const parsed = JSON.parse(this.getAttribute("votes")) || {};
            const total = Object.values(parsed).reduce((a, b) => a + b, 0) || 1;

            return labels.map(item => ({
                label: item.label,
                color: item.color,
                value: parsed[item.label] ?? 0,
                percent: Math.round((parsed[item.label] ?? 0) / total * 100)
            }));
        } catch {
            return labels.map(item => ({ ...item, value: 0, percent: 0 }));
        }
    }

    get topCategory() {
        return [...this.votes].sort((a, b) => b.value - a.value)[0];
    }

    render() {
        const top = this.topCategory;

        this.shadowRoot.innerHTML = /*html*/`
            <style>
                .card {
                    background: #F7F7F7;
                    border-radius: 20px;
                    padding: 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    font-family: Arial, sans-serif;
                    min-height: 230px;
                }

                .top-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: auto;
                    width: 100%;
                }

                .question-number {
                    font-weight: 600;
                    margin-bottom: 6px;
                    font-size: 14px;
                }

                .question {
                    font-size: 14px;
                    line-height: 20px;
                    max-width: 60%;
                }

                .right {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .percentage {
                    font-size: 30px;
                    font-weight: 700;
                    color: var(--progress-red, #FF2B34);
                    margin-bottom: 4px;
                }

                .badge {
                    background: #FFDFDF;
                    color: var(--progress-red, #FF2B34);
                    padding: 6px 16px;
                    border-radius: 14px;
                    font-weight: 600;
                }

                .results-grid {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    align-items: center;
                    column-gap: 40px;
                    row-gap: 14px;
                    width: 100%;
                }

                .bar {
                    width: 100%;
                    height: 12px;
                    background: #D9D9D9;
                    border-radius: 10px;
                    overflow: hidden;
                }

                .fill {
                    height: 100%;
                    border-radius: 10px;
                }

                .row-label {
                    display: flex;
                    justify-content: flex-end;
                    gap: 12px;
                    min-width: 120px;
                    font-size: 14px;
                    text-align: right;
                }

                .row-label span:last-child {
                    font-weight: bold;
                }

                @media (max-width: 1000px) {
                    .right {
                        align-items: flex-start;
                    }

                    .row-label {
                        justify-content: flex-end;
                    }
                }
            </style>

            <div class="card">

                <div class="top-row">

                    <div>
                        <div class="question-number">${this.number}</div>
                        <div class="question">${this.question}</div>
                    </div>

                    <div class="right">
                        <div class="percentage" style="color:${top.color}">
                            ${top.percent}%
                        </div>
                        <div class="badge"
                             style="
                                color: white;
                                background:${top.color};
                             ">
                             ${top.label}
                        </div>
                    </div>
                </div>

                <div class="results-grid">
                    ${this.votes.map(item => /*html*/`
                        <div class="bar">
                            <div class="fill" style="width:${item.percent}%;background:${item.color}"></div>
                        </div>
                        <div class="row-label">
                            <span class="vote-label">${item.label}</span>
                            <span>${String(item.value).padStart(2, "0")}</span>
                        </div>
                    `).join("")}
                </div>

            </div>
        `;
    }
}

customElements.define("my-card", Card);
