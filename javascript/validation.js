let uname=document.getElementById("exampleInputEmail1");
let pswd=document.getElementById("exampleInputPassword1");

function validation(callback){
    
    if(exampleInputEmail1.value==""&&exampleInputPassword1.value=="")
    {
        alert("Enter valid credentials");
        return false;
        
    }

     else if(exampleInputEmail1.value=="admin"&&exampleInputPassword1.value=="12345")
     {
        alert("successful login");
        return true;
        callback();
        
    }
    else
    {
alert("invalid credentials");
return false;
    }

}
function redirect(){
    window.location.href="list.html";
}