function validation (){

    var name = document.getelementByld("name");

    var valid_name_regex = /^[A-Za-z]+$/;

    if(name.matches(valid_name_regex)){
        return true;
    }else{
        document.getElementById("name_error").style.visibility="visible"
        document.getElementById("name").style.borderColor="red";
        return false
    }
}