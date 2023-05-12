const saveButtonList = document.querySelectorAll('#saveFav');
const deleteButtonList = document.querySelectorAll("#delete-fave");

saveButtonList.forEach(saveButton => {
    saveButton.addEventListener("click",e=>{
    e.preventDefault();
    const inpId = e.target.value
    const exerciseObj= {exercise_id: inpId};
  
    fetch("/api/users/addfavorite",{
        method:"POST",
        body:JSON.stringify(exerciseObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            alert("It has been added!");
    

        } else {
            alert("Already in your list!");
        }
    })
})
    
});


deleteButtonList.forEach(deleteButton => {
    deleteButton.addEventListener("click",e=>{
    e.preventDefault();
    const id = e.target.value;
  
    fetch(`/api/users/removefavorite/${id}`,{
        method:"DELETE",
    }).then(res=>{
        if(res.ok){
            document.location.reload();
        } else {
            alert("Can't delete!");
        }
    })
})
    
});
