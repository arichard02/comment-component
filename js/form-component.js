/*
Form component:
1. Draws the form.
2. Listens for the form submit
3. It creates a new comment object:
   {
        name: __________,
        email: _________,
        comment: _______, 
        timestamp: new Date()
   }
    and sends it to the state manager.
4. It clears out the form
*/


export default class Form {

  // what is a constructor?
  // brings the instance to life
  constructor(sm) {
      this.stateManager = sm;
      const formTemplate = `
      <form>
    <!-- action="https://formsubmit.co/8ba5bda093183fd9c549c4f116f3338b"
    method="POST"
  > -->
    <!-- full name -->
    <img
      src="https://www.nsouly.com/wp-content/uploads/2020/05/How-to-Turn-Off-Comments-on-Facebook-Posts-960x540.jpg"
      alt="keyboard with word comment"
    />
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
      `;

      document.querySelector('.form-container').innerHTML = formTemplate;

      document.querySelector('form').addEventListener('submit', this.addComment.bind(this));
  }

  addComment (ev) {
      // goal of add comment is to let the state manager know
      // that a new comment has been added:
      ev.preventDefault();

      const date = new Date();
      let dateString = date.toLocaleDateString();
      dateString += " " + date.toLocaleTimeString();

      const commentObject = {
          name: document.querySelector('#full_name').value,
          email: document.querySelector('#email').value,
          comment: document.querySelector('#textbox').value, 
          timestamp: dateString
      }
      console.log(commentObject);


      // tell the state manager that we have
      // a new comment to add:
      this.stateManager.addComment(commentObject);


      // Your Job: how do you clear out your form!!
      document.querySelector('#full_name').value = "";
      document.querySelector('#email').value = "";
      document.querySelector('#textbox').value = "";
      document.querySelector('#checkBox1').checked = false;


  }

}