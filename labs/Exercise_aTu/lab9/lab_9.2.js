const { sendRequest } = require('./RequestHelper.js');

const url = 'https://jsonplaceholder.typicode.com/posts';
const userId = 1;
const postId = 1;
printAllPosts(userId);
printTargetPost(userId, postId);

function printTargetPost(userId, postId) {
    getFilteredPostsFor(userId).then(function (userPosts) {
        const targetPost = userPosts.filter(function (post) {
            return (post.id === postId);
        })[0];
        if (targetPost) {
            console.log(targetPost);
        } else {
            console.log(`The postID ${postId} is NOT existing for the user with userID ${userId}`);
        }
    });
}

async function printAllPosts(userId) {
    const userPosts = await getFilteredPostsFor(userId)
    console.log(userPosts);
}

async function getFilteredPostsFor(userId) {
    const posts = await sendRequest(url)
    return posts.filter(function (post) {
        return (post.userId === userId);
    });
}

