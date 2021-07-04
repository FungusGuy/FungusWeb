var expanded = false;
function showCheckboxes(){
    var checkboxes = document.getElementById("mains");
    if(!expanded){
        checkboxes.style.display = "flex";
        expanded = true;
    }
    else{
        checkboxes.style.display = "none";
        expanded = false;
    }
}