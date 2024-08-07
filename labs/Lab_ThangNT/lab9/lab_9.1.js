// url: https://jsonplaceholder.typicode.com
// Library: fetch
// slugs:
// GET	/posts

// Please using PROMISE and thenable to solve this
// Allow user to input an userid and postId, print out that post content
// Print all posts for that user

const url = 'https://jsonplaceholder.typicode.com/posts';
const userId = 1;
const postId = 1;
// printAllPosts(userId);
// printTargetPost(userId, postId);

// function printAllPosts(userId){

// }


// filterPostsByUserId(userId).then(function(posts){
//     console.log(posts);
// }) 

printTargetPost(userId, postId);

function printTargetPost(userId, postId){
    filterPostsByUserId(userId).then(function(posts){
        const targetPost = posts.filter(function(post){
            return (post.id === postId);
        })[0];
        if(targetPost){
            console.log(targetPost);
        }else{
            console.log(`The postID ${postId} is NOT existing for the user with userID ${userId}`);
        }
    })
}

function fetchPosts(url){
    return fetch(url).then(function(response){
        return response.json();
    })
}
function filterPostsByUserId(userId){
    return fetchPosts(url).then(function(posts){
        const filteredPosts = [];
        for(let i = 0; i < posts.length; i++){
            if(posts[i].userId === userId){
                filteredPosts.push(posts[i]);
                
            }   
        }
        return filteredPosts;
        
    })
}

// fetchPosts(url).then(function(posts){
//     console.log(posts);
// });


