class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["label", "color"];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const label = this.getAttribute("label") || "Button";
        const color = this.getAttribute("color") || "var(--brand-color)";

        this.shadowRoot.innerHTML = /*html*/`
            <style>
                button {
                    padding: 12px 20px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    background: ${color};
                    color: #fff;
                    font-size: 14px;
                    font-weight: 500;
                    transition: opacity .2s;
                }
            </style>

            <button>${label}</button>
        `;
    }
}

customElements.define("my-button", Button);
