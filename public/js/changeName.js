const updateBtn = document.querySelector("#changeBtn");



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
         if(response.ok){
            location.replace("/landing")
         }

    }catch(err){
        res.status(404).json(err);
    }
};

updateBtn.addEventListener("click",changeName);