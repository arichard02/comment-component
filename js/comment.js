export default class Comment extends HTMLElement {
  
    connectedCallback() {
      const rn = Math.random() * 100;
      this.innerHTML = `
        <section class="comment">
          <div class="user-info">
            <img src="https://picsum.photos/100?num=${rn}" alt="Your avatar!" class="avatar" />
            <div>
              <p>${this.getAttribute("name")}</p>
              <p>${this.getAttribute("email")}</p>
            </div>
          </div>
          <p class="comment-text">${this.getAttribute("comment")}</p>
          <p>${this.getAttribute("timestamp")}</p>
          
        </section>
        `;
    }
}
  
customElements.define("user-comment", Comment);
  