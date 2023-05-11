document.querySelector("#logout").addEventListener("click",e=>{
    e.preventDefault();
    console.log("hello")
    fetch("/api/users/logout",{
        method:"POST",
    }).then(res=>{
        if(res.ok){
           location.replace("/")
        } else {
            alert("womp womp")
        }
    })
})