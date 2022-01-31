fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data="";
    completedata.map((values)=>{
        data=
        `<div class="add">
            <h1 class="title">${values.title}</h1>
            <img class="image"
                src="${values.image}"
                alt="img" class="image">
            <p>${values.description}</p>
            <p class="catagory"${values.catagory}</p>
            <p class="price">${values.price}</p>
    </div>`
    });
   document.getElementById("content").innerHTML=data;
}).catch((err)=>{
    console.log(err);
});
