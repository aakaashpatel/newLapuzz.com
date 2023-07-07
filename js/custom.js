
// console.log("Aakash")


function validate(){  
    var name=document.getElementById("firstname").value;  
    var lastname=document.getElementById("lastname").value;  
    var address=document.getElementById("Address").value; 
    var female=document.getElementById('female');
    var male=document.getElementById('male');
    var status=false;  
    if(name==""){  
    document.getElementById("firstName").innerHTML=  
    "Please enter your First Name";  
    status=false;
    }else{  
    document.getElementById("firstName").innerHTML="";  
    status=true;
    }  
      
    if(lastname==""){  
    document.getElementById("lastName").innerHTML=  
    "Please enter your Last Name";  
    status=false; 
    }else{  
    document.getElementById("lastName").innerHTML="";  
    status=true;
    }  
     
    if(!female.checked && !male.checked){
      document.getElementById('Gender').innerHTML=
      "Please select the Gender";
      status=false;
    }else{
      document.getElementById('Gender').innerHTML='';
    }

   
      
    if(address==""){  
    document.getElementById("address").innerHTML=  
    "Please enter your Address";  
    status=false; 
    }else{  
    document.getElementById("address").innerHTML="";  
    }  

    return status;  
    }

function validation(){  
    var Name=document.getElementById("detailname").value;  
    var LastName=document.getElementById('detaillast').
    value;
    var count=document.getElementById('cun').value;
    var street=document.getElementById('street').value;
    var town=document.getElementById('town').value;
    var email=document.getElementById('email').value;
    var phonenumber=document.getElementById('phone').value;

    var status=false; 

    if(Name==""){  
    document.getElementById("detailName").innerHTML=  
    "Please enter your First Name";  
    status=false;
    }else{  
    document.getElementById("detailName").innerHTML="";  
    status=true;
    }

    if(LastName==""){  
    document.getElementById("detailLast").innerHTML=  
    "Please enter your Last Name";  
    status=false;
    }else{  
    document.getElementById("detailLast").innerHTML="";  
    status=true;
    }  

    if(count==""){  
    document.getElementById("cunt").innerHTML=  
    "Please enter your Country Name";  
    status=false;
    }else{  
    document.getElementById("cunt").innerHTML="";  
    status=true;
    }  

    if(street==""){  
    document.getElementById("streetName").innerHTML=  
    "Please enter your Country Name";  
    status=false;
    }else{  
    document.getElementById("streetName").innerHTML="";  
    status=true;
    }

    if(town==""){  
    document.getElementById("city").innerHTML=  
    "Please enter your Country Name";  
    status=false;
    }else{  
    document.getElementById("city").innerHTML="";  
    status=true;
    }  

    if(email==""){  
    document.getElementById("mail").innerHTML=  
    "Please enter your Country Name";  
    status=false;
    }else{  
    document.getElementById("mail").innerHTML="";  
    status=true;
    }  

    if(phonenumber==""){  
    document.getElementById("phoneNum").innerHTML=  
    "Please enter your Country Name";  
    status=false;
    }else{  
    document.getElementById("phoneNum").innerHTML="";  
    status=true;
    }  
    
      
    return status;  
    }
   