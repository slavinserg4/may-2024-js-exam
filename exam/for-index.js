fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(value =>{
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('ForUser')
    for (const user of value) {
            let div = document.createElement('div');
            let userId = document.createElement('h2');
            let userName = document.createElement('h3');
            let button = document.createElement('button');
            div.classList.add('Info');
            button.onclick = function () {
                    location.href = 'post-details.html';
            }
            userId.innerText = 'Id: ' + user.id;
            userName.innerText = 'Name: ' + user.name;
            button.innerText = 'Перейти до User Details'
            div.append(userId, userName, button);
            mainDiv.append(div);
    }

    document.body.append(mainDiv);
})