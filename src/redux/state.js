let renderEntireTree = () => {
  console.log('dfd');
}
let state = {

  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 13 }
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
    ]
  }
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export const subscribe = (observer) => {
  renderEntireTree = observer;
}

export default state;