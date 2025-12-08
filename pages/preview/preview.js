class Preview extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.ratings = Array(5).fill(0);
    }

    connectedCallback() {
        this.render();
        this.initInteractions();
    }

    get styles() {
        return /*html*/`

            <link rel="stylesheet" href="styles/reset.css" />
            <link rel="stylesheet" href="styles/global.css" />

            <style>
                :host {
                    --card-bg: white;
                    --border: var(--input-border);
                    --star-yellow: #FDBA13;
                    --max-width: 1000px;
                    display: block;
                    font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    color: #222;
                }

                .topbar {
                    width: 100%;
                    background: var(--brand-color);
                    color: white;
                    box-shadow: 0 1px 0 rgba(0,0,0,0.06);
                }

                .topbar .inner {
                    max-width: var(--max-width);
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 20px;
                }

                .brand-link {
                    color: rgba(255,255,255,0.95);
                    font-size: 14px;
                    letter-spacing: 0.3px;
                    text-decoration: underline;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }

                .event-btn {
                    background: transparent;
                    color: white;
                    border: 1px solid rgba(255,255,255,0.85);
                    padding: 15px 25px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: background .14s, opacity .14s;
                }

                .event-btn:hover { opacity: 0.95; background: rgba(255,255,255,0.03); }

                .page {
                    background: var(--bg-page);
                    min-height: 100vh;
                    box-sizing: border-box;
                    padding: 0px 15px;
                }

                .container {
                    max-width: var(--max-width);
                    margin: 24px auto 0;
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                }

                .card {
                    background: var(--card-bg);
                    padding: 35px;
                    border-radius: 12px;
                    border: 1px solid var(--border);
                    box-shadow: 0 6px 18px rgba(20,20,20,0.03);
                }

                .title {
                    margin: 0 0 8px 0;
                    font-size: 20px;
                    font-weight: 700;
                }

                .description {
                    margin: 0;
                    line-height: 1.5;
                    font-size: 14px;
                    color: var(--lighter-font);
                }

                .available {
                    margin-top: 12px;
                    font-size: 13px;
                    font-weight: 600;
                }

                .questions {
                    background: var(--card-bg);
                    padding: 35px;
                    border-radius: 12px;
                    border: 1px solid var(--border);
                }

                .question-row {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 20px 0;
                    border-bottom: 1px solid var(--border);
                }

                .question-row:last-child { border-bottom: none; }

                .q-label {
                    font-size: 16px;
                    font-weight: 600;
                }

                .stars {
                    display: inline-flex;
                    gap: 8px;
                    align-items: center;
                }

                .star {
                    font-size: 25px;
                    color: #d0d0d0;
                    cursor: pointer;
                    user-select: none;
                    transition: color .12s ease;
                }

                .star.hover,
                .star.active {
                    color: var(--star-yellow);
                }

                .comment-card {
                    font-size: 16px;
                    font-weight: 600;
                    background: var(--card-bg);
                    padding: 35px;
                    border-radius: 12px;
                    border: 1px solid var(--border);
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                textarea {
                    border-radius: 8px;
                    border: 1px solid var(--border);
                    padding: 12px;
                    font-size: 14px;
                    font-family: inherit;
                    resize: none;
                    outline: none;
                }

                textarea:focus { border-color: var(--brand-color); }

                .actions-row {
                    display: flex;
                    justify-content: flex-end;
                }

                @media (max-width: 640px) {
                    .topbar .inner { padding: 10px; }
                    .brand-link { font-size: 12px; }
                    .event-btn { padding: 8px 10px; font-size: 13px; }
                    .container { margin: 12px auto 0; }
                    .card,
                    .questions { padding: 16px; }
                }
            </style>
        `;
    }

    render() {
        const questions = [
            "Você gostou da apresentação do palestrante principal?",
            "Como você avalia a organização do evento?",
            "A estrutura do local atendeu às suas expectativas?",
            "Como você avalia a qualidade do som e imagem?",
            "O conteúdo apresentado foi relevante e útil para você?"
        ];

        this.shadowRoot.innerHTML = /*html*/`
            ${this.styles}

            <header class="topbar" part="topbar">
                <div class="inner">
                    <a class="brand-link" href="#" part="brand-link">VISÃO 360°</a>
                    <button class="event-btn" id="go-event" part="event-btn">Ir para o evento</button>
                </div>
            </header>

            <main class="page">
                <div class="container">

                    <section class="card" part="hero">
                        <h1 class="title">Visão 360°</h1>
                        <p class="description">
                            E vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
                            Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.
                        </p>
                        <div class="available">Disponível até 30/04/2032</div>
                    </section>

                    <section class="questions card" part="questions">
                        ${questions
                            .map((t, i) => this.questionRow(i + 1, t))
                            .join("")}
                    </section>

                    <section class="comment-card" part="comment">
                        <label for="comment">Deixe o seu comentário</label>
                        <textarea id="comment" rows="4"></textarea>
                    </section>

                    <div class="actions-row">
                        <my-button id="send" label="Enviar" variant="primary"></my-button>
                    </div>

                    <my-footer></my-footer>
                </div>
            </main>
        `;
    }

    questionRow(index, text) {
        return `
            <div class="question-row" data-qr="${index}">
                <div class="q-label">${index}. ${text}</div>
                <div class="stars" data-question="${index - 1}">
                    ${[1,2,3,4,5]
                        .map(v => `<span class="star" data-value="${v}">★</span>`)
                        .join("")}
                </div>
            </div>
        `;
    }

    initInteractions() {
        this.shadowRoot.querySelectorAll(".stars").forEach(group => {
            const index = Number(group.dataset.question);
            const stars = [...group.querySelectorAll(".star")];

            stars.forEach((star, i) => {
                star.addEventListener("mouseenter", () =>
                    stars.forEach((s, idx) => s.classList.toggle("hover", idx <= i))
                );

                star.addEventListener("mouseleave", () =>
                    stars.forEach(s => s.classList.remove("hover"))
                );

                star.addEventListener("click", () => {
                    this.setRating(index, Number(star.dataset.value));
                });
            });

            this.updateStarsUI(index);
        });

        this.shadowRoot.getElementById("go-event")
            .addEventListener("click", () => {
                this.dispatchEvent(new CustomEvent("survey:goto-event", {
                    bubbles: true,
                    composed: true
                }));
            });

        this.shadowRoot.getElementById("send")
            .addEventListener("click", () => {
                const comment = this.shadowRoot.getElementById("comment").value.trim();
                this.dispatchEvent(new CustomEvent("survey:submit", {
                    detail: { ratings: [...this.ratings], comment },
                    bubbles: true,
                    composed: true
                }));
            });
    }

    setRating(index, value) {
        this.ratings[index] = value;
        this.updateStarsUI(index);
    }

    updateStarsUI(index) {
        const group = this.shadowRoot.querySelector(`.stars[data-question="${index}"]`);
        if (!group) return;

        const stars = [...group.querySelectorAll(".star")];
        const value = this.ratings[index];

        stars.forEach((star, i) => star.classList.toggle("active", i < value));
    }
}

customElements.define("my-preview", Preview);
