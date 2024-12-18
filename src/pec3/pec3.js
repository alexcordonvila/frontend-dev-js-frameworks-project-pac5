// Exercise 1
export function fetchUser(id, callback) {
    const users = {
        1: "Brendan Eich",
        2: "Douglas Crockford",
        3: "Jeremy Ashkenas",
    };
    if (Number.isInteger(id) && id in users) {
        callback(users[id]);
        return true;
    }
    return false;
}

// Exercise 2
export async function getComments(fetchUser, fetchPosts, fetchComments) {
    return new Promise((resolve, reject) => {
        fetchUser()
            .then(userID => {
                return fetchPosts(userID)
                    .then(posts => {
                        return fetchComments(posts)
                            .then(comments => {
                                resolve(comments);
                            })
                            .catch(() => {
                                reject(new Error('Error: Comments fetch failed')); 
                            });
                    })
                    .catch(() => {
                        reject(new Error('Error: Posts fetch failed')); 
                    });
            })
            .catch(() => {
                reject(new Error('Error: User fetch failed')); 
            });
    });
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