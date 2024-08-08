const readline = require('readline-sync');

// url: https://jsonplaceholder.typicode.com
// Library: fetch
// slugs:
// GET	/posts

// Please using PROMISE and ASYNC/AWAIT to solve this
// Allow user to input an userid and postId, print out that post content
// Print all posts for that user

const url = 'https://jsonplaceholder.typicode.com/posts';
const userId = readline.question('Enter the user ID: ');
const postId = readline.question('Enter the post ID: ');

printTargetPost(userId, postId);
printAllPosts(userId);

async function printAllPosts(userId){
    const userPosts = await filterPostsByUserId(userId);
    console.log(userPosts);
}

function printTargetPost(userId, postId){
    filterPostsByUserId(userId).then(function(userPosts){
        const targetPost = userPosts.filter(function(post){
            return post.id == postId;
        })[0];
        if(targetPost){
            console.log(targetPost);
        }else{
            console.log(`The postID ${postId} is NOT existing for the userID ${userId}`);
        }
    })
}


async function filterPostsByUserId(userId){
    const posts = await fetchPosts(url);
    return posts.filter(function(post){
        return post.userId == userId;
    })
}

function fetchPosts(url){
    return fetch(url).then(function(response){
        return response.json();
    })
}