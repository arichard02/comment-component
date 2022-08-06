import '../style.css'
import StateManager from './state-manager.js'
import CommentList from './comment-list.js'
import Form from './form-component';

/*
Goal:
1. Create a new instance of the state manager
2. Create a new instance of the comment list
    * the comment list needs the data from the state manager
      so that it knows how to draw the comments.
*/

const stateManager = new StateManager();
const commentList = new CommentList(stateManager.comments);
const form = new Form(stateManager);
