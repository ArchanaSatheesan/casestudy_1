function ajax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
         
        if(this.readystate==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output = "";
            console.log(response);
            
            for(var i=0;i<response.length;i++){
                output += "<li>"+response[i].title+"</li>";
               
            }
            
            document.getElementById("list").innerHTML=output;
            
        }
       

    }

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

}