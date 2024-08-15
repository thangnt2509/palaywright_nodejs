const Post = require("./Post");

class PostController {
    //https://jsonplaceholder.typicode.com, /posts

    constructor(baseUrl, slug) {
        //Reuse
        this.url = `${baseUrl}${slug}`;
        //https://jsonplaceholder.typicode.com/posts
    }

    //Service methods
    async getAllPostsByUserId(userId) {
        //Details implementation
        const allPosts = await this._getAllPosts();
        return allPosts.filter(function (post) {
            return (post._userId === userId);
        });
    }

    //Service methods
    async getPostByUserIdAndPostId(userId, postId) {
        const allPostByUserId = await this.getAllPostsByUserId(userId);
        return allPostByUserId.find(function (post) {
            return (post._id === postId);
        });
    }

    //support method
    async _getAllPosts() {
        const response = await fetch(this.url);
        const jsonResponse = await response.json();
        return jsonResponse.map(function (postContent) {
            const { userId, id, title, body } = postContent;
            return new Post(userId, id, title, body);
        });
            
    }

}
module.exports = PostController;