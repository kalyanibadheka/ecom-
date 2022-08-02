function handleEdit(id){
    let localData = JSON.parse(localStorage.getItem("product"));
    let fData = localData.filter((l)=>l.id === id);

    let name = document.getElementById("name").value=fData[0].name;
}
