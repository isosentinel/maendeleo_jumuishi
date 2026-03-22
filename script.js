const posts = [
{
title:"Maendeleo ya Kisiasa Tanzania",
author:"Admin",
date:"2026",
category:"kisiasa",
image:"https://picsum.photos/400/200?1",
content:"Hii ni makala kamili kuhusu maendeleo ya kisiasa Tanzania..."
},
{
title:"Ukuaji wa Uchumi",
author:"Admin",
date:"2026",
category:"kiuchumi",
image:"https://picsum.photos/400/200?2",
content:"Hii ni makala kamili kuhusu uchumi na maendeleo yake..."
},
{
title:"Maendeleo ya Jamii",
author:"Admin",
date:"2026",
category:"kijamii",
image:"https://picsum.photos/400/200?3",
content:"Hii ni makala kamili kuhusu jamii..."
}
];

const postsContainer = document.getElementById("posts");

function displayPosts(data){
postsContainer.innerHTML="";

data.forEach((post,index)=>{
postsContainer.innerHTML+=`
<div class="post">
<img src="${post.image}">
<div class="content">
<h3>${post.title}</h3>
<p>${post.author} | ${post.date}</p>
<p>${post.content.substring(0,70)}...</p>
<button onclick="openPost(${index})">Soma zaidi</button>
</div>
</div>
`;
});
}

function filterPosts(cat){
const filtered = posts.filter(p=>p.category===cat);
displayPosts(filtered);
}

function showHome(){
document.getElementById("homeView").classList.remove("hidden");
document.getElementById("postView").classList.add("hidden");
displayPosts(posts);
}

/* OPEN FULL POST (NO RELOAD) */
function openPost(index){
const post = posts[index];

document.getElementById("homeView").classList.add("hidden");
document.getElementById("postView").classList.remove("hidden");

document.getElementById("fullPost").innerHTML=`
<img src="${post.image}">
<h1>${post.title}</h1>
<p><strong>${post.author}</strong> | ${post.date}</p>
<p style="margin-top:20px; line-height:1.7;">${post.content}</p>
`;
}

/* BACK */
function goBack(){
showHome();
}

/* INIT */
displayPosts(posts);