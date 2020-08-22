
  function formcontroller(){

    var emergencyPhone = ["333 "," 01944333222"];

    var check1 = document.forms["serious"];
    var check2 = document.forms["additional"];
    var check3 = document.getElementById("temp").value;

    var selected1 = new Array();
    var selected2 = new Array();
   


    var countTemp = 0;
    if(check3>99.5){
      countTemp = 2;
    }else{
      countTemp = 0;
    }
 

  var i;
  for(i=0;i<check1.length;i++){
    if(check1[i].checked){
      selected1.push(check1[i].value);
    }
  }
  var count1 = 0;
  var result1 = 0;
  var count2=0;
  var result2=0;
    if(selected1.length>0){
      count1 = selected1.length;
      if(count1>0 && count1<2){
        result1 = 3;
      }else if(count1>0 && count1 <3){
        result1 = 4;
      }else if(count1>0 && count1 <4){
        result1 = 5;
      } else if(count1>0 && count1 <5){
        result1 = 6;
      } else if(count1>0 && count1 <6){
        result1 = 7;
      } 
    }

    var j;
  for(j=0;j<check2.length;j++){
    if(check2[j].checked){
      selected2.push(check2[j].value);
    }
  }
    if(selected2.length>0){
      count2 = selected2.length;
      if(count2>0 && count2<2){
        result2 = 2;
      }else if(count2>0 && count2 <3){
        result2 = 4;
      }else if(count2>0 && count2 <4){
        result2 = 6;
      } else if(count2>0 && count2 <5){
        result2 = 8;
      } else if(count2>0 && count2 <6){
        result2 = 10;
      } else if(count2>0 && count2 <7){
        result2 = 12;
      } else if(count2>0 && count2 <8){
        result2 = 14;
      } else if(count2>0 && count2 <9){
        result2 = 16;
      }
      
    }
    
    var final = countTemp+result1+result2; 
    if(final<5){
      document.getElementById("para").innerHTML = "Less Chance of infection || Keep Isolation || RESULT : NEGATIVE";
    }else if(final==5){
      document.getElementById("para").innerHTML = "Possible Suspected Case || Contact Doctor || RESULT : POSITIVE";
    }else if(final>5 && final <7){
      document.getElementById("para").innerHTML = "High Chance of Infection || Contact Doctor Urgently || RESULT : POSITIVE || Emergency Corona Helpline : "+emergencyPhone;
    }else if(final >7){
      document.getElementById("para").innerHTML = "Almost Confirm of Infection || Get Hospitalized Urgently || RESULT : POSITIVE || Emergency Corona Helpline : "+emergencyPhone;
    }else{
      document.getElementById("para").innerHTML = " ";
    }
   
   
  }
  





  