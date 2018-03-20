class HtmlState extends Phaser.State {
  private htmlString: string;
  private body: HTMLElement;

  constructor(htmlString: string, cssString: string) {
    super();
    this.htmlString = `<div id="interactiva"><style>${cssString}</style>${htmlString}</div>`;
    this.body = document.body;
  }

  private setHtml() {
    const [canvas] = document.getElementsByTagName('canvas');
    if (canvas) canvas.style.display = 'none';

    const myElement = document.getElementById('interactiva');
    document.body.insertAdjacentHTML('beforeend', this.htmlString);
  }

  private removeHtml() {
    const [canvas] = document.getElementsByTagName('canvas');
    if (canvas) canvas.style.display = 'block';

    const myElement = document.getElementById('interactiva');
    document.body.removeChild(myElement);
  }

  create() {
    this.setHtml();
  }
}

export default HtmlState;
