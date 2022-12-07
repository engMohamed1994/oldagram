// posts[1].name 
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const main =document.getElementsByTagName("main")[0]
//const main =document.querySelector("main")
let html = "";

function section(name, username, location, avatar,post,comment,likes) {
     return html = `
                <div class="post" >
                <div class="container">
                    <div class="user">
                        <div>
                            <img class="avatar" src="${avatar}" alt="${name}">
                        </div>
                        <div>
                            <p class="name">${name} </p>
                            <p class="location">${location}</p>
                        </div>
                    
                    </div>
                    <div class="content">
                        <img class="post-img" src="${post}" >
                        <div class="reactions">
                            <div class="icons">
                                <img class="love" src="images/icon-heart.png" alt="love">
                                <img class="comment" src="images/icon-comment.png" alt="comment">
                                <img class="dm" src="images/icon-dm.png" alt="dm">
                            </div>
                            <p class="likes"> ${likes} likes</p>
                        </div>
                        <p class="caption" > <span class="username">${username} </span>${comment} </p>
                            
                        
                    </div>
                </div>
            </div> 
    `
   
    }


const gus1819 = section(posts[1].name ,posts[1].username ,posts[1].location ,posts[1].post,posts[1].avatar,posts[1].comment,posts[1].likes )

const jd1735 = section(posts[2].name ,posts[2].username ,posts[2].location ,posts[2].post,posts[2].avatar,posts[2].comment,posts[2].likes )

main.innerHTML +=gus1819

main.innerHTML +=jd1735
