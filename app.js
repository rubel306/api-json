//DOM Selection
const titleUl = document.getElementById('titles');
const cardOneImg = document.querySelector('.card-1 img');
const cardTitle = document.querySelector('.card-title');
const postsContainer = document.querySelector('.posts');
const usersContainer = document.querySelector('.users');

//api
const API_URL = 'https://jsonplaceholder.typicode.com/photos';
fetch(API_URL)
    .then(res => res.json())
    .then(data => showPhotos(data));



function showPhotos(data){
    var slicedArry = data.slice(0, 5);
    console.log(slicedArry);

    var singlePostHtml = '';
    slicedArry.forEach(item =>{
        singlePostHtml = singlePostHtml + `
            <div class="col-4">
                <div class="card-1" style="width: 18rem;">
                    <img src="${item.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
        // console.log(item.title);
        postsContainer.innerHTML = singlePostHtml;
    })

}

users();
function users(){
    const post_API = 'https://jsonplaceholder.typicode.com/users';
    let i = fetch(post_API);
    i.then(res => res.json()).then(data => showUsers(data) );

    function showUsers(data){
       const slicedUserArry =  data.slice(0, 15);
       let singleUserHtml = '';
       slicedUserArry.forEach(user => {
            singleUserHtml = singleUserHtml + `
                <div class="col-4"> 
                    <div class="user"> 
                        <h2>${user.name}</h2>
                        <p><b>Name: </b>${user.username}</p>
                        <p><b>Email: </b>${user.email}</p>
                        <p><b>Phone: </b>${user.phone}</p>
                        <p><b>Website: </b>${user.website}</p>
                        <p><b>company: </b>${user.company.name}</p>
                        <p class="address"><b style="display:block">Address: </b><b>City</b>: ${user.address.city} <br>
                        <b>Street</b>: ${user.address.street}<br>
                        <b>House</b>: ${user.address.suite}
                        </p>
                    </div> 
                </div> 
            `;
            usersContainer.innerHTML = singleUserHtml;
       });

    }

}