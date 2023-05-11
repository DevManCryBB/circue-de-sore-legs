const saveButtonList = document.querySelectorAll('#saveFav');

saveButtonList.forEach(saveButton => {
    saveButton.addEventListener("click",e=>{
    e.preventDefault();
    const inpId = e.target.value
    const exerciseObj= {exercise_id: inpId};
    console.log(exerciseObj)
    fetch("/api/users/addfavorite",{
        method:"POST",
        body:JSON.stringify(exerciseObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            alert("has been added!");

        } else {
            alert("Already in your list!");
        }
    })
})
    
});
