// creating a new class that controls what new element will look like
// includes what attributes are needed and how they are presented
// also include a style tag with style rules(optional)
class Comment extends HTMLElement {
  constructor() {
    super();
  }
  // overriding the connected callback method with my own html
   connectedCallback() {
    this.innerHTML = `<section class="comment">

    <div id="app"></div>
    <h3>${this.getAttribute("name")}</h3>
    <h3>${this.getAttribute("email")}</h3>
    <p>${this.getAttribute("comment")}</p>
  </section>`;
    }
}

// custome-elements.define takes two arguments 
// 1. what you want the name of the tag to be
// 2. class you want to use to control that tag
// we run in html  (on line 54) 
customElements.define('custom-comment', Comment);