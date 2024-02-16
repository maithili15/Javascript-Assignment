// Function to fetch comments from the API

const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
function fetchComments() {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

// Function to filter top 20 comments with longest body
function filterTopComments(comments) {
    comments.sort((a, b) => b.body.length - a.body.length);
    return comments.slice(0, 20);
}

// Fetch comments and handle the promise chain
fetchComments()
    .then(comments => {
        const topComments = filterTopComments(comments);
        localStorage.setItem('topComments', JSON.stringify(topComments));
        console.log('Top 20 comments with longest body:', topComments);
    })
    .catch(error => {
        console.error('Error fetching comments:', error);
    });
