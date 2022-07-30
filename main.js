import './style.css'

// main.js shows title and imports style.css
document.querySelector('#app').innerHTML = `
  <h1>New Comment Component</h1>
`;

const addComment = (ev) => {
  ev.preventDefault();
  console.log("hello world");

  // go into dom and find the element were id = full name and then get its value and store that value in a variable called name
  const name = document.querySelector("#full_name").value;
  // print the thing stored in the variable name
  console.log(name);

  // // go into dom and find the element were id = email and then get its value and store that value in a variable called email
  const email = document.querySelector("#my_email").value;
  // // print the thing stored in the variable name
  console.log(email);

  const textbox = document.querySelector("#textbox").value;
  console.log(textbox);

  const template = `
  <custom-comment
        name="${name}"
        email="${email}"
        comment="${textbox}">
      </custom-comment>`; 

document.querySelector("#comments").insertAdjacentHTML("afterbegin", template)
};
document.querySelector("form").addEventListener("submit", addComment);