class Breadcrumb extends HTMLElement {
  static get observedAttributes() {
    return ["paths"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = /*html*/`
      <style>
        nav {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          gap: 12px;
        }

        .crumb {
            font-size: 12px;
          cursor: pointer;
          color: var(--darker-font);
        }

        .separator {
          color: var(--brand-color);
        }
      </style>

      <nav id="container"></nav>
    `;
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  get paths() {
    try {
      return JSON.parse(this.getAttribute("paths") || "[]");
    } catch (e) {
      return [];
    }
  }

  render() {
    const container = this.shadowRoot.querySelector("#container");
    container.innerHTML = "";

    const paths = this.paths;

    paths.forEach((label, index) => {
      const span = document.createElement("span");
      span.textContent = label;
      span.classList.add("crumb");
      container.appendChild(span);

      if (index < paths.length - 1) {
        const sep = document.createElement("span");
        sep.textContent = ">";
        sep.classList.add("separator");
        container.appendChild(sep);
      }
    });
  }
}

customElements.define("my-breadcrumb", Breadcrumb);
