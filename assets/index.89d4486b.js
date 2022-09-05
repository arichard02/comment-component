const c=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};c();class l extends HTMLElement{constructor(){super()}connectedCallback(){const e=this.attachShadow({mode:"open"});e.innerHTML=` <section class="comment"> 

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
 `}}customElements.define("custom-comment",l);class m{constructor(){this.comments=[],this.subscribers=[],this.loadDatabase()}loadDatabase(){let e;var o=indexedDB.open("adwaina_app_db",2);o.onupgradeneeded=function(n){var t=n.target.result;console.log("running onupgradeneeded"),t.objectStoreNames.contains("comments")||t.createObjectStore("comments",{keyPath:"id",autoincrement:!0})},o.onsuccess=function(n){console.log("running onsuccess"),e=n.target.result,this.readCommentsFromDataStore(e)}.bind(this)}addComment(e){this.comments.push(e),console.log(this.comments),this.notify("comment-added",this.comments)}subscribe(e,o){this.subscribers.push([e,o])}notify(e,o){for(let n=0;n<this.subscribers.length;n++){const t=this.subscribers[n][0],r=this.subscribers[n][1];e==t&&r(o)}}readCommentsFromDataStore(e){var o=e.transaction("comments","readonly"),n=o.objectStore("comments"),t=n.openCursor(),r=[];t.onsuccess=function(s){s.target.result&&(r.push(s.target.result.value),s.target.result.continue())},o.oncomplete=function(s){console.log(r),this.notify("comments-loaded",r)}.bind(this)}}class d{constructor(e){e.subscribe("comment-added",this.redraw.bind(this)),e.subscribe("comments-loaded",this.redraw.bind(this))}redraw(e){document.querySelector(".comments").innerHTML="",console.log(e);for(let o=0;o<e.length;o++){let n=`
                <custom-comment 
                    name = "${e[o].name}" 
                    email = "${e[o].email}" 
                    comment = "${e[o].comment}"
                    timestamp = "${e[o].timestamp}">
                </custom-comment>
            `;document.querySelector(".comments").insertAdjacentHTML("afterbegin",n)}}}class u{constructor(e){this.stateManager=e;const o=`

      
      <form>
    <!-- action="https://formsubmit.co/8ba5bda093183fd9c549c4f116f3338b"
    method="POST"
  > -->

  <img
      src="https://www.nsouly.com/wp-content/uploads/2020/05/How-to-Turn-Off-Comments-on-Facebook-Posts-960x540.jpg"
      alt="keyboard with word comment"
    />

    <!-- full name -->
    
    <div class="row">
      <label class="desc" for="full_name"><strong>*Full Name</strong></label>
      <div>
        <input
          id="full_name"
          name="full_name "
          type="text"
          class="field text fn"
          placeholder="First & Last Name"
          value=""
          size="50"
          tabindex="2"
          required
        />
      </div>
    </div>
    <!-- Email -->
    <div class="row">
      <label class="desc" for="email"><strong>*Email</strong></label>
      <div>
        <input
          id="email"
          name="email"
          type="email"
          spellcheck="false"
          placeholder="johnsmith@email.com"
          maxlength="50"
          tabindex="3"
          required
        />
      </div>
    </div>
    <br />
    <!-- Large Text Area -->
    <div class="row">
      <label for="textbox"><strong>*Write Comment Here</strong></label>
      <div>
        <textarea
          id="textbox"
          name="textbox"
          spellcheck="true"
          rows="10"
          cols="50"
          tabindex="6"
          required
        ></textarea>
      </div>
    </div>
    <!-- Checkboxes -->
    <div class="row">
      <div>
        <input
          id="checkBox1"
          name="checkBoxes"
          type="checkBox"
          value="Agreement"
          required
          tabindex="7"
        />
        <label for="*checkBox1"
          ><strong>*I agree you can post my comments.</strong></label
        >
      </div>
    </div>
    <h5><strong>*Must be completed to submit form.</strong></h5>
    <!-- Submit Button-->
    <div>
      <div>
        <input id="saveForm" name="saveForm" type="submit" value="Submit" />
      </div>
    </div>
  </form>
      `;document.querySelector(".form-container").innerHTML=o,document.querySelector("form").addEventListener("submit",this.addComment.bind(this))}addComment(e){e.preventDefault();const o=new Date;let n=o.toLocaleDateString();n+=" "+o.toLocaleTimeString();const t={name:document.querySelector("#full_name").value,email:document.querySelector("#email").value,comment:document.querySelector("#textbox").value,timestamp:n};console.log(t),document.querySelector("#full_name").value="",document.querySelector("#email").value="",document.querySelector("#textbox").value="",document.querySelector("#checkBox1").checked=!1,this.stateManager.addComment(t)}}const a=new m;new d(a);new u(a);
