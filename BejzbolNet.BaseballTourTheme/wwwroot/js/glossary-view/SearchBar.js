import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

export class SearchBar extends LitElement {
    static properties = {
        searchPlaceholder: {},
        searchQuery: {},
  };

 
  constructor() {
      super();
  }
  createRenderRoot(){
    return this;
    }

    updateSearchQuery(value) {
        this.searchQuery = value;
        let event = new CustomEvent("searchQueryUpdated", { bubbles: true, composed: true, detail: this.searchQuery });
        this.dispatchEvent(event);
    }

    render() {
        return html`
     <div class="max-w-2xl mx-auto mb-12 relative">
        <i class="lucide lucide-search absolute left-4 top-1/3 transform-translate-y-1/2 text-text/40 w-5 h-5" data-lucide="search"></i>
        <input @input="${(e)=>this.updateSearchQuery(e.target.value)}" id="searchInput" type="text" placeholder="${this.searchPlaceholder}"
          class="w-full pl-12 pr-4 py-3 bg-white border-2 border-primary/20 rounded-lg focus:outline-none focus:border-highlight"
          value="${this.searchQuery}">
    </div>
      `
  }
}
customElements.define('search-bar', SearchBar);