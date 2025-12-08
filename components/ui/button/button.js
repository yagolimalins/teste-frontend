class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["label", "color", "variant"];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }


    get label() {
        return this.getAttribute("label") || "Button";
    }

    get variant() {
        return this.getAttribute("variant") || "primary";
    }

    get customColor() {
        return this.getAttribute("color");
    }

    get theme() {
        return {
            brand: "var(--brand-color)",
            darkerFont: "var(--darker-font)",
            inputBorder: "var(--input-border)"
        };
    }

    getVariantStyles() {
        const { brand, darkerFont, inputBorder } = this.theme;

        return {
            primary: `
                background: ${this.customColor || brand};
                color: white;
                border: none;
            `,
            secondary: `
                background: var(--button-secondary);
                color: ${darkerFont};
                border: 1px solid ${inputBorder};
            `
        };
    }

    render() {
        const variantStyles = this.getVariantStyles()[this.variant];

        this.shadowRoot.innerHTML = /*html*/`
            <style>
                :host {
                    display: inline-block;
                }

                @media (max-width: 1000px) {
                    :host {
                        display: block;
                        width: 100%;
                    }

                    button {
                        width: 100%;
                    }
                }

                button {
                    padding: 12px 20px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 500;
                    transition: opacity .2s, background .2s, color .2s;
                    ${variantStyles}
                }

                button:hover {
                    opacity: 0.85;
                }
            </style>


            <button>${this.label}</button>
        `;
    }
}

customElements.define("my-button", Button);
