import profileReducer, {addPostCreator, deletePost} from "./profile-reducer";

let state = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 222},
        {id: 3, message: 'Samurai of React', likesCount: 437},
        {id: 4, message: 'Best Developer', likesCount: 123}
    ]
};

test('length of posts should be incremented', () => {
    // 1. Test data
    let action = addPostCreator('dolgolevets');

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expected
    expect(newState.postsData.length).toBe(5);
});

test('message of new post should be correct', () => {
    // 1. Test data
    let action = addPostCreator('dolgolevets');

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expected
    expect(newState.postsData[4].message).toBe('dolgolevets');
});

test('after deleting length of posts should be decrement', () => {
    // 1. Test data
    let action = deletePost(1);

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expected
    expect(newState.postsData.length).toBe(3);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. Test data
    let action = deletePost(1000);

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expected
    expect(newState.postsData.length).toBe(4);
});