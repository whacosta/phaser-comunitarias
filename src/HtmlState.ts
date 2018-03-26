class HtmlState extends Phaser.State {
  private readonly htmlString: string;

  constructor(htmlString: string, cssString: string) {
    super();
    this.htmlString = `<div id="interactiva"><style>${cssString}</style>${htmlString}</div>`;
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

  shutdown() {
    this.removeHtml();
  }
}

export default HtmlState;
