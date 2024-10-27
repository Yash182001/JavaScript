function deleterow(mobileno){

   //console.log(mobileno);
   // console.log(myFormData);
     
   
        for(let i=0; i<myFormData.length; i++){
        if(myFormData[i].mobNo == mobileno){
         // console.log("ttttttt");
              myFormData.splice(i, 1);
             
   }                                                
   
   }
   
console.log("ArrayNew", myFormData);
let tabledata  = ""
             myFormData.map((value, index) => {
                tabledata  += `
                                      <tr>
                                        
                                        <td>${value.firstName}</td>
                                        <td>${value.middleName}</td>
                                        <td>${value.lastName}</td>
                                        <td>${value.motherName}</td>
                                        <td>${value.email}</td>
                                        <td>${value.mobNo}</td>
                                        <td>${value.gender}</td>
                                        <td>${value.skills}</td>
                                         <td>${value.location}</td>  
                                         <td><input type="button" value="Delete" class="btn btn-primary" onclick="deleterow()" ></td>                          
                                        
                                      </tr>
                                      ` 
             });
             document.getElementById("table-body").innerHTML = tabledata


            }