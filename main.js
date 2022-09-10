import "./style.css";

// main.js shows title and imports style.css
document.querySelector("#app").innerHTML = `
  <h1>Comment Component</h1>
`;

const addComment = (ev) => {
  ev.preventDefault();

  // go into dom and find the element were id = full name and then get its value and store that value in a variable called name
  const name = document.querySelector("#full_name").value;
  const email = document.querySelector("#email").value;
  const textbox = document.querySelector("#textbox").value;

  const currentDate = new Date();
  const timestamp = currentDate.toLocaleTimeString();

  // const timestamp = currentDate.toLocaleDateString();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
  const currentYear = currentDate.getFullYear();

  const dateString =
    currentMonth +
    1 +
    "/" +
    currentDayOfMonth +
    "/" +
    currentYear +
    " " +
    timestamp;

  // print the thing stored in the variable name
  console.log(name);
  // print the thing stored in the variable email
  console.log(email);
  // print the thing stored in the variable textbox
  console.log(textbox);
  // print the thing stored in the variable dateString
  console.log(dateString);
  // print the thing stored in the variable time
  console.log(timestamp);

  const template = `
  <custom-comment
        name="${name}"
        email="${email}"
        comment="${textbox}"
        timestamp="${dateString}">
      </custom-comment>`;

  document
    .querySelector("#comments")
    .insertAdjacentHTML("afterbegin", template);
  document.querySelector("#full_name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#textbox").value = "";
  document.querySelector("#checkBox1").checked = false;
};
document.querySelector("form").addEventListener("submit", addComment);
