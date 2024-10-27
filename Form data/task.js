function deleteRow(data_table){
  
    var table = document.getElementById(data_table);
    var rowCount = table.rows.length;
  
    for(var i=0; i<rowCount; i++){
      var row = table.rows[i];
    var chkbox = row.cells[0].childNodes[0];
     if(null != chkbox && true == chkbox.checked){
      table.deleteRow(i);
            rowCount--;
             i--;
}
    
  }
}

