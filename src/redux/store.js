import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

const store = {

  _state: {
    profilePage: {
      posts: [
        {
          id: 1, message: "Hi, how are you?",
          likesCount: 12
        },
        {
          id: 2, message: "It's my first post",
          likesCount: 13
        }
      ],
      newPostText: 'Text'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Alexey' },
        { id: 2, name: 'Victor' },
        { id: 3, name: 'Oleg' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Yana' },
        { id: 6, name: 'Pavel' }
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" }
      ],
      newMessageBody: ''
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('dfd');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;