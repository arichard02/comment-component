/*
The goal of this file is to:

1. Create a brand new database
2. Create a new data store called "comments", which is
a container to put all of our comments in.
3. Add a new comment to our "comments" data store.
4. Make sure it saves!

*/
// console.log("database");
// let db;

// var openRequest = indexedDB.open('adwaina_app_db', 2);


// // 1. This function created our new data store:
// openRequest.onupgradeneeded = function(e) {
//     var db = e.target.result;
//     console.log('running onupgradeneeded');

//     // create new data stores:
//     if (!db.objectStoreNames.contains('comments')) {
//         var storeOS = db.createObjectStore('comments',
//         {keyPath: 'id', autoincrement: true});
//     }
// };

// // 2. This function fires when the database has been opened.
// // This is where we will add new comments to the datastore:
// openRequest.onsuccess = function(e) {
//     console.log('running onsuccess');
//     db = e.target.result;
//     // call this function to create a new comment:
//      addDataToCommentsDataStore(db);
//     readCommentsFromDataStore(db);

// };

// const addDataToCommentsDataStore = (db) => {
//      // this is the place where we can add data to our datastores:
//      var transaction = db.transaction(['comments'], 'readwrite');
//      var comments = transaction.objectStore('comments');
//      console.log(comments);
//      var request = comments.add({
//          id: 6,
//          name: "Chris",
//          email: "sugarspice@gmail.com",
//          comment: "I'm a daycare Provider ",
//          timestamp: "8/4/2022 3:15:13PM"
//      });
 
//      request.onerror = function(e) {
//          console.log('Error', e.target.error.name);
//      };
//      request.onsuccess = function(e) {
//          console.log('The comment has been successfully added!');
//      };
 
//     // Commit: close connection
//     transaction.oncomplete = () => {
//          db.close();
//     };
// }

// const readCommentsFromDataStore = (db) => {
//     var transaction = db.transaction('comments', 'readonly');
//     var objectStore = transaction.objectStore('comments');
//     var cursorRequest = objectStore.openCursor();
//     var commentList = [];
//     cursorRequest.onsuccess = function (event){
//         if (event.target.result){
//             // if(event.target.result.value['id'] && event.target.result.value['id'] == value){ //compare values
//                 commentList.push(event.target.result.value);
//             // }
//             event.target.result['continue']();
//         }
//     };

//     transaction.oncomplete = function (event) {
//         console.log(commentList);
//         // callback(agregate); // return items
//     };
// }


// // 3. Handles errors:
// openRequest.onerror = function(e) {
//     console.log('onerror!');
//     console.dir(e);
// };


const note = document.getElementById('notifications');

// an instance of a db object for us to store the IDB data in
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += '<li>Database initialized.</li>';

  // store the result of opening the database in the db
  // variable. This is used a lot below
  db = DBOpenRequest.result;

  // Add the data to the database
  addData();
};

function addData() {
  // Create a new object to insert into the IDB
  const newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // open a read/write db transaction, ready to add data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of opening the transaction
  transaction.oncomplete = (event) => {
    note.innerHTML += '<li>Transaction completed: database modification finished.</li>';
  };

  transaction.onerror = (event) => {
  note.innerHTML += '<li>Transaction not opened due to error. Duplicate items not allowed.</li>';
  };

  // create an object store on the transaction
  const objectStore = transaction.objectStore("toDoList");

  // add our newItem object to the object store
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // report the success of the request (this does not mean the item
    // has been stored successfully in the DB - for that you need transaction.oncomplete)
    note.innerHTML += '<li>Request successful.</li>';
  };
};