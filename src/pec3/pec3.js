// Exercise 1
export function fetchUser(id, callback) { 
    const users = {
        1: "Brendan Eich",
        2: "Douglas Crockford",
        3: "Jeremy Ashkenas",
    };
    if(Number.isInteger(id) && id in users){
            callback(users[id]);
            return true;
    }
    return false;
}

// Exercise 2
export function getComments(fetchUser, fetchPosts, fetchComments) {
}

// Exercise 3
export function fetchUserPromise(id) {
}

// Exercise 4
export async function fetchAsyncData(asyncCallback) {
}

// Exercise 5
export async function getCommentsAsync(fetchUser, fetchPosts, fetchComments) {
}

// Exercise 6 
export function createTaskWorker() {
}