function validation (){

    var name = document.getelementByld("name");

    var valid_name_regex = /^[A-Za-z]+$/;

    var age = document.getelementByld("age");

    var valid_age_regex = /^[0-9]+$/;

    //if(valid_name_regex.test(name)){
        //return true;
    //}else{
      //  document.getElementById("name_error").style.visibility="visible";
     //   document.getElementById("name").style.borderColor="red";
     //   return false
   // }
}

if(!(name.match(valid_name_regex)) || !(age.match(valid_age_regex)) || (city="")){
    if(!(name.match(valid_name_regex))){
        document.getElementById("name-error").style.visibility="visible";
         document.getElementById("name").style.visibility="red";
    }
    else{
        document.getElementById("name-error").style.visibility="hidden";
        document.getElementById(name).style.visibility="black";
    }

    if(!(age.match(valid_age_regex))){
        document.getElementById("age_error").style.visibility="visible";
         document.getElementById("age").style.visibility="red";
    }
    else{
        document.getElementById("name_error").style.visibility="hidden";
        document.getElementById("name").style.visibility="black";
    }

    if(!(city.match(valid_city_regex))){
        document.getElementById("city_error").style.visibility="visible";
         document.getElementById("city").style.visibility="red";
    }
    else{
        document.getElementById("city_error").style.visibility="hidden";
        document.getElementById("city").style.visibility="black";
    }

    return false;
    }else{
            document.getElementById("age_error").style.visibility="visible";
             document.getElementById("age").style.visibility="red";
            document.getElementById("name_error").style.visibility="hidden";
            document.getElementById("name").style.visibility="black";
            document.getElementById("city_error").style.visibility="hidden";
            document.getElementById("city").style.visibility="black";
        }


    

