import '../style.css'
import './comment.js'
import StateManager from './state-manager.js'
import CommentList from './comment-list.js'
import Form from './form-component'; 
// import Counter from './counter.js'

/*
Goal:
1. Create a new instance of the state manager
2. Create a new instance of the comment list
    * the comment list needs the data from the state manager
      so that it knows how to draw the comments.
*/

const stateManager = new StateManager();
// const counter = new Counter(stateManager);
const commentList = new CommentList(stateManager);
const form = new Form(stateManager);
