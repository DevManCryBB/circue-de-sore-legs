document.querySelector("#logout").addEventListener("click",e=>{
    e.preventDefault();
    fetch("/api/users/logout",{
        method:"POST",
    }).then(res=>{
        if(res.ok){
        location.replace("/")
        } else {
            alert("womp womp")
        }
    })
});

const changeName = async (e) =>{
    e.preventDefault();
    try{
        const response = await fetch("/api/users/updatename", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: document.querySelector("#change-username").value,
            }),
          });

    }catch(err){
        res.status(404).json(err);
    }
}
