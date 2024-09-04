let postKey = localStorage.getItem('PostKey')
let userKey = localStorage.getItem('key')
fetch(`https://jsonplaceholder.typicode.com/users/${userKey}/posts?id=${postKey}`)
    .then(response => response.json())
    .then(post => {
        let postMainDiv = document.createElement('div');
        postMainDiv.innerHTML = `
        <h3>User Id: ${post[0].userId}</h3>
        <h3>Id: ${post[0].id}</h3>
        <h3>Title: ${post[0].title}</h3>
        <h3>Body: ${post[0].body}</h3>`;
        postMainDiv.classList.add('postMainDiv')
        document.body.appendChild(postMainDiv);

        fetch(`https://jsonplaceholder.typicode.com/posts/${post[0].id}/comments`)
            .then(resp =>resp.json())
            .then(comment =>{
                console.log(comment);
            })
    })









