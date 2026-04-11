import { LitElement, html, repeat } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
import { SearchBar } from './SearchBar.js';

export class GlossaryView extends LitElement {
  static properties = {
    searchQuery: {},
    items: {},
    filtered: {},
    glossaryId: {},
    searchPlaceholder: {},
    culture: {}
  };

  getData() {
        let items = [];
        fetch('/api/queries/searchglossaryterm?parameters={"glossaryId":"' + this.glossaryId + '","culture": "'+this.culture+'"} ')
      .then((response) => response.json())
      .then((data) => { this.items = data.items; this.filtered = this.items; })
      .catch((e) => console.log(e));
    return items;
  }
  constructor() {
    super();
    this.searchQuery = "";
    this.items = [];
    this.filtered = this.items;
    this.glossaryId = this.getAttribute("glossaryId");
    this.culture = this.getAttribute("culture");
    this.searchPlaceholder = this.getAttribute("searchPlaceholder");

    this.items = this.getData();
  }
  createRenderRoot(){
    return this;
  }
  filterItems(value) {
    this.searchQuery = value;
    this.filtered = this.items.filter(item => item.DisplayText.toLowerCase().startsWith(this.searchQuery.toLowerCase()));
  }
  // Render the UI as a function of component state
  render() {
      return html`
      <search-bar  @searchQueryUpdated=${(e) => this.filterItems(e.detail)} searchPlaceholder=${this.searchPlaceholder} searchQuery=${this.searchQuery}></search-bar>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      ${repeat(
        this.filtered,
        (item) => item.contentitemid,
        (item, index) => html`
        <a href="/${item.AutoroutePart.Path}" class="glossaryItemSummary bg-accent p-4 rounded-lg border border-primary/10 hover:border-highlight transition-colors text-left">
          <h3 class="glossaryItemSummary__title">${item.DisplayText}</h3>
          <p class="text-sm text-text/70">${item.GlossaryTerm.Excerpt?.Text ?? ""}</p>
        </a>`
      )
    }
    </div>`
  }
}
customElements.define('glossary-view', GlossaryView);