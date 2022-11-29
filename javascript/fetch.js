function fetcho(){
    fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
        //console.log(data);   json format
        return data.json();     //converted to object
    }).then((objectData)=>{
        //console.log(objectData[0].title);
        let tableData="";
        let chkdata="";
        
        objectData.map((values)=>{
            tableData+=`<tr>
                    
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td><input type="checkbox"  id="checkbox" value=${values.completed}></td>
          </tr>`;
         
          console.log(values.completed);
         // alert(values.completed);
          
        });
        
        document.getElementById("table_body").innerHTML=tableData;
        
        
        

    })


    
          

    
}