let userKey = localStorage.getItem('key');
fetch(`https://jsonplaceholder.typicode.com/users?id=${userKey}`)
.then(response => response.json())
.then(user =>{
    let mainDiv = document.createElement('div');
    let div = document.createElement('div');
    let divSecond = document.createElement('div');
    let divThird = document.createElement('div');
    let divFourth = document.createElement('div');
    let divFifth = document.createElement('div');

    div.classList.add('forDiv')
    divSecond.classList.add('forDiv')
    divThird.classList.add('forDiv')
    divFourth.classList.add('forDiv')
    divFifth.classList.add('forDiv')

    div.innerHTML = `
        <h3>Id: ${user[0].id}</h3>
        <h3>Name: ${user[0].name}</h3>
        <h3>Username: ${user[0].username}</h3>
        <h3>Email: ${user[0].email}</h3>`;

    divSecond.innerHTML = `
        <h3>Address:</h3>
        <h3>Street: ${user[0].address.street}</h3>
        <h3>Suite: ${user[0].address.suite}</h3>
        <h3>City: ${user[0].address.city}</h3>
        <h3>Zipcode: ${user[0].address.zipcode}</h3>`;

    divThird.innerHTML = `
        <h3>Geo:</h3>
        <h3>lat: ${user[0].address.geo.lat}</h3>
        <h3>lng: ${user[0].address.geo.lng}</h3>`;

    divFourth.innerHTML = `
        <h3>Phone: ${user[0].phone}</h3>
        <h3>Website: ${user[0].website}</h3>`;

    divFifth.innerHTML = `
        <h3>Company:</h3>
        <h3>Name: ${user[0].company.name}</h3>
        <h3>catchPhrase: ${user[0].company.catchPhrase}</h3>
        <h3>bs: ${user[0].company.bs}</h3>`;


    let button = document.createElement('button');
    button.classList.add('button');
    button.innerText = "post of current user";
    button.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/users/${userKey}/posts`)
            .then(response => response.json())
            .then(value => {
                let mainDivTitle = document.createElement('div');
                for (const postTitle of value) {
                    let divTitle = document.createElement('div');
                    divTitle.classList.add('DivTitle')
                    let title = document.createElement('h4');
                    let titleButton = document.createElement('button');
                    titleButton.innerText = 'Post details'
                    title.innerText =postTitle.title;
                    divTitle.append(title, titleButton);
                    mainDivTitle.append(divTitle);
                    titleButton.onclick = function () {
                        location.href = 'post-details.html';
                        localStorage.setItem('PostKey', postTitle.id);
                    }
                }
                mainDivTitle.classList.add('MainDivTitle')
                document.body.appendChild(mainDivTitle);
            })
    }
    let divForAll = document.createElement('div');

    mainDiv.classList.add('MainDiv')
    mainDiv.append(div, divSecond, divThird, divFourth, divFifth);
    divForAll.append(mainDiv, button);
    divForAll.classList.add('divForAll')
    document.body.appendChild(divForAll);
})