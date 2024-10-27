function myfunction(){
    document.getElementById("demo").innerHTML="This is Changed Paragraph"
}

function myfunction2(){
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;

    let text
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
      } else {
        text = "Input OK";
      }
      document.getElementById("demo3").innerHTML = text;
    }
    

