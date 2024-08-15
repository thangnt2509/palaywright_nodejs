const PostController = require("./PostController");

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';

//Call test function
run();

async function run() {
    const userId = 1;
    const postId = 1;
    const postController = new PostController(BASE_URL, SLUG);

    //Verify post filtering
    const allPostByUserId = await postController.getAllPostsByUserId(userId);
    console.log(`All posts for userID ${userId}: `);
    console.log(allPostByUserId);

    //Verify specific post base on userId
    const post = await postController.getPostByUserIdAndPostId(userId, postId);
    console.log(`Post ${postId}'s content: `);
    console.log(post);

}

/**
 * Test Framework: Mocha
 * Assert Library(optional) / nodeJS assert built-in module
 * Test Report: allure-mocha
 * --> Generate allure report
 */
