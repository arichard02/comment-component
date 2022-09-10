const d=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}};d();class m extends HTMLElement{constructor(){super()}connectedCallback(){const e=this.attachShadow({mode:"open"});e.innerHTML=` <section class="comment"> 

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
 `}}customElements.define("custom-comment",m);class u{constructor(){this.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB||window.shimIndexedDB,this.baseName="comment-database",this.storeName="comments"}connectDB(e){var t=this.indexedDB.open(this.baseName,1);t.onerror=this.logerr,t.onsuccess=function(){e(t.result)},t.onupgradeneeded=function(n){let o=n.target.result;console.log("running onupgradeneeded"),o.objectStoreNames.contains(this.storeName)||o.createObjectStore(this.storeName,{keyPath:"id"}),this.connectDB(e)}.bind(this)}getAll(e){this.connectDB(function(t){var n=[],o=t.transaction([this.storeName],"readonly").objectStore(this.storeName);o.mozGetAll?o.mozGetAll().onsuccess=function(s){e(s.target.result)}:o.openCursor().onsuccess=function(s){var r=s.target.result;r?(n.push(r.value),r.continue()):(n.sort(function(i,l){return i.id<l.id?1:i.id>l.id?-1:0}),e(n))}}.bind(this))}addOrUpdate(e,t){this.connectDB(function(n){const r=n.transaction([this.storeName],"readwrite").objectStore(this.storeName).put(e);r.onerror=function(i){console.log("Error",i.target.error.name)},r.onsuccess=function(i){console.log("Rows has been added / updated"),this.getAll(t)}.bind(this)}.bind(this))}remove(e,t){this.connectDB(function(n){var o=n.transaction([this.storeName],"readwrite"),s=o.objectStore(this.storeName),r=s.delete(e);r.onerror=function(i){console.error(i)},r.onsuccess=function(){console.log("Rows has been deleted: ",e),this.getAll(t)}.bind(this)}.bind(this))}get(e,t){this.connectDB(function(n){var o=n.transaction([this.storeName],"readonly").objectStore(this.storeName).get(e);o.onerror=function(s){console.error(s)},o.onsuccess=function(){t(o.result?o.result:-1)}}.bind(this))}}class h{constructor(){this.comments=[],this.subscribers=[],this.database=new u}loadComments(){console.log("Loading comments");const e=function(t){this.notify("comments-loaded",t)};this.database.getAll(e.bind(this))}addComment(e){this.database.addOrUpdate(e,t=>{this.notify("comment-added",t)})}subscribe(e,t){this.subscribers.push([e,t])}notify(e,t){for(let n=0;n<this.subscribers.length;n++){const o=this.subscribers[n][0],s=this.subscribers[n][1];e==o&&s(t)}}readCommentsFromDataStore(e){var t=e.transaction("comments","readonly"),n=t.objectStore("comments"),o=n.openCursor(),s=[];o.onsuccess=function(r){r.target.result&&(s.push(r.target.result.value),r.target.result.continue())},t.oncomplete=function(r){console.log(s),this.notify("comments-loaded",s)}.bind(this)}}class b{constructor(e){e.subscribe("comment-added",this.redraw.bind(this)),e.subscribe("comments-loaded",this.redraw.bind(this))}redraw(e){console.log("drawing comments",e),document.querySelector(".comments").innerHTML="",console.log(e);for(let t=0;t<e.length;t++){let n=`
                <custom-comment 
                    name = "${e[t].name}" 
                    email = "${e[t].email}" 
                    comment = "${e[t].comment}"
                    timestamp = "${e[t].timestamp}">
                </custom-comment>
            `;document.querySelector(".comments").insertAdjacentHTML("afterbegin",n)}}}class f{constructor(e){this.stateManager=e;const t=`

      
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
      `;document.querySelector(".form-container").innerHTML=t,document.querySelector("form").addEventListener("submit",this.addComment.bind(this))}addComment(e){e.preventDefault();const t=new Date;let n=t.toLocaleDateString();n+=" "+t.toLocaleTimeString();const o={name:document.querySelector("#full_name").value,email:document.querySelector("#email").value,comment:document.querySelector("#textbox").value,timestamp:n,id:t.getTime()};console.log(o),document.querySelector("#full_name").value="",document.querySelector("#email").value="",document.querySelector("#textbox").value="",document.querySelector("#checkBox1").checked=!1,this.stateManager.addComment(o)}}const c=new h;console.log("App initializing");new b(c);new f(c);c.loadComments();
