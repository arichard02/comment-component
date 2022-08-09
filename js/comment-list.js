/*
The job of the comment list is to:
1. At the very beginning, draw all the comments.
2. If it gets notified that a new comment has been created, 
   it should draw a new comment at the top.
*/

export default class CommentList {
 
  constructor(stateManager) {
      // when the comment list is first created, the comment list
      // tells the state manager that when the "comments-updated"
      // event happens, it should invoke the "redraw method".
      stateManager.subscribe("comment-added", this.redraw.bind(this));
      stateManager.subscribe("comments-loaded", this.redraw.bind(this));
     
      // this.redraw(stateManager.comments);
  } 

  redraw(comments) {
    // the "redraw" method will CLEAR OUT THE OLD COMMENTS and
    //  redraw with the new comments.
    document.querySelector(".comments").innerHTML = "";
    // when a new instance of CommentList is created,
    // it needs to know what comments it should draw.
    // it should draw those comments.
    console.log(comments);

    for (let i = 0; i < comments.length; i++) {

      // creating an HTML representation of it
      let template = `
                <custom-comment 
                    name="${comments[i].name}" 
                    email="${comments[i].email}" 
                    comment="${comments[i].comment}"
                    timestamp="${comments[i].timestamp}">
                </custom-comment>
            `;
      console.log(template)
      // we need to append it to the DOM
      document
        .querySelector(".comments")
        .insertAdjacentHTML("afterbegin", template
        );
    }
  }
}
