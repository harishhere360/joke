const joke=document.getElementById("joke");
const jokebtn=document.getElementById("jokebtn");
jokebtn.addEventListener('click',() =>{
    const headerDate ={
        headers:{
            Accept:'application/json',
        },
        
    }
    fetch('https://icanhazdadjoke.com',headerDate)
    .then((res)=>res.json())
    .then((data)=>{
        joke.innerHTML=data.joke

    })

    

})






