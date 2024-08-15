const Post = require("./Post");
const url = 'https://jsonplaceholder.typicode.com/posts';

class RequestHandler {
    async printTargetPost(userId, postId) {
        // Construct the returned data as a Post data model from class Post
        return getFilteredPostsFor(userId).then(function (userPosts) {
            const targetPost = userPosts.filter(function (post) {
                return (post.id === postId);
            })[0];
            if (targetPost) {
                const post = new Post(targetPost.userId, targetPost.id, targetPost.title, targetPost.body);
                return post;
            } else {
                return null;
            }
        });
    }

    async printAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        const userPosts = await getFilteredPostsFor(userId)
        const posts = [];
        userPosts.forEach(function (post) {
            posts.push(new Post(post.userId, post.id, post.title, post.body));
        });
        return posts;
    }

    async _getAllPosts(userId) {
        // Implementation of _getAllPosts function
        const userPosts = await getFilteredPostsFor(userId);    
        return userPosts;
    }
}

async function getFilteredPostsFor(userId) {
    const posts = await sendRequest(url)
    return posts.filter(function (post) {
        return (post.userId === userId);
    });
}

async function sendRequest(url) {
    return fetch(url).then(function (response) {
        return response.json();
    })
}

module.exports = RequestHandler;