const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

// Excution
lab11();

// Function Declaration
async function lab11(){
    // Given params
    const userId = 1;
    const postId = 1;

    // Create RequestHandler object
    const requestHandler = new RequestHandler();

    const post = await requestHandler.printTargetPost(userId, postId);
    const allPosts = await requestHandler.printAllPosts(userId);
    console.log(post);
    // console.log(allPosts);
}