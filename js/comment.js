// creating a new class that controls what my new element will look like
// includes what attributes are needed (ie...name, email, comments) 
// and how they are presented using HTML
// also include a style tag with style rules(optional)
export default class Comment extends HTMLElement {
  // constructor() {
  //   super();
  // }
  // this method is incharge of building the HTML for the component
  // overriding the connected callback method with my own HTML
   connectedCallback() {
// shadowDom encapsulates the rule created so they don't leak out or impact 
// other parts fo the code
    const shadow = this.attachShadow({mode: "open"});
 
// section tag inside a section tag produces double boxes on comments - (2 section tags)
    shadow.innerHTML = ` <section class="comment"> 
   
   
    <section class="comment">
    <h3>${this.getAttribute("name")}</h3>
    <h3>${this.getAttribute("email")}</h3>
    <br>
    <p>${this.getAttribute("comment")}</p>
    <p>${this.getAttribute("timestamp")}</p>
  </section>

  <style>
  .comment {
    border: solid black 10px;
    padding: 15px;
    margin: 20px;
    background-color: aqua;
    margin-left: 20px;
    margin-right: 20px;
    width: 300px;
    text-align: center;
  }
  </style>

  </div>`;
    }
}

// custome-elements.define takes two arguments 
// 1. what you want the name of the tag to be
// 2. class you want to use to control that tag
// we run in html  (on line 54) 
customElements.define('custom-comment', Comment);