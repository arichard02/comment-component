/*
The job of the state manager is to: 
    1. + organize the data.
    2. update the data when a component notifies the state manager.
    3. let other components know when the data has changed.
Each comment has:
    1. Name of the person
    2. Email
    3. Comment
    4. Timestamp
*/
import Database from './database.js';
export default class StateManager {
  // 1. constructor method:
  //      sets up the datastore (this.comments array) and
  //      sets up the subscribers (this.subscribers array)
  constructor() {
 

    // mailing list.
    this.comments = [];
    this.subscribers = [];
    this.database = new Database();
    // this.loadDatabase();
  }

  //This method does 3 things; loads db(moniqueapp.db)
  //& creates a new comment store if it doesn't exist.
  //Then, it reads the comment store
  loadDatabase() {
    let db;

    var openRequest = indexedDB.open("adwaina_app_db", 2);

    // 1. This function created our new data store:
    openRequest.onupgradeneeded = function (e) {
      var db = e.target.result;
      console.log("running onupgradeneeded");

      // create new data stores:
      if (!db.objectStoreNames.contains("comments")) {
        var storeOS = db.createObjectStore("comments", {
          keyPath: "id",
          autoincrement: true,
        });
      }
    };



  //   // 2. This function fires when the database has been opened.
  //   // This is where we will add new comments to the datastore:
    openRequest.onsuccess = (function (e) {
      console.log("running onsuccess");
      db = e.target.result;
      // call this function to create a new comment:
      
      this.readCommentsFromDataStore(db);
    }).bind(this);
  }

  loadComments() {
    console.log("Loading comments");
    // 1. create a callback function that will fire after the
    // favorites loaded:
    const callbackFunction = function (commentList) {
        this.notify("comments-loaded", commentList);
    }; 

    // 2. Invoke the "getAll" method, with the callback function
    // as an argument. When getAll finishes loading the favorites,
    // it will fire the callback function with the favorites.
    this.database.getAll(callbackFunction.bind(this));
}

  // 2. we need a way to update the comments list
  //The form invoked the stateManager's add comment function
  addComment(newComment) {
    // this.comments.push(newComment);
    // //push method of an array appends item to the bottom
    // console.log(this.comments);
    this.database.addOrUpdate(newComment, commentList => {
      this.notify("comment-added", commentList);
    })
    
    
  }

  // 3. We need a way to tell the other components to redraw
  subscribe(theEvent, theResponse) {
    //This code adds a list of two elements to the subscribers array
    //What happens---The first element is a string that indicates which
    //event the subscriber's interested in (comment added, deleted, liked)
    //The reponse to what hap---the second element is a function that will get
    //invoked/executed when the event happens

    this.subscribers.push([theEvent, theResponse]);
  }

  notify(theEvent, theData) {
    //Now we need to notify all of the subscribers that
    //a comment has been added
    //So that each subscriber can respond
    //To do this we loop thru ea. subscriber
    //and invoke the cb function
    for (let i = 0; i < this.subscribers.length; i++) {
      const subscriberEvent = this.subscribers[i][0];
      const theFunction = this.subscribers[i][1];
      if (theEvent == subscriberEvent) {
        theFunction(theData);
      }
    }
  }

  readCommentsFromDataStore(db) {
    var transaction = db.transaction("comments", "readonly");
    var objectStore = transaction.objectStore("comments");
    var cursorRequest = objectStore.openCursor();
    var commentList = [];
    cursorRequest.onsuccess = function (event) {
      if (event.target.result) {
        // if(event.target.result.value['id'] && event.target.result.value['id'] == value){ //compare values
        commentList.push(event.target.result.value);
        // }
        event.target.result["continue"]();
      }
    };

    transaction.oncomplete = function (event) {
      console.log(commentList);
      this.notify("comments-loaded", commentList);
      // callback(agregate); // return items
    }.bind(this);
  }
}