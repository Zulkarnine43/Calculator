 var addd =document.getElementById('add');
       addd.onclick = function (){
var fname =Number(document.getElementById('fname').value);
var lname =Number(document.getElementById('lname').value);
var total = fname+lname;
document.getElementById('tname').value= total;
}

 var sub =document.getElementById('sub');
       sub.onclick = function (){
var fname =Number(document.getElementById('fname').value);
var lname =Number(document.getElementById('lname').value);
var total = fname-lname;
document.getElementById('tname').value= total;
}

 var mul =document.getElementById('mul');
       mul.onclick = function (){
var fname =Number(document.getElementById('fname').value);
var lname =Number(document.getElementById('lname').value);
var total = fname*lname;
document.getElementById('tname').value= total;
}


 var div =document.getElementById('div');
       div.onclick = function (){
var fname =Number(document.getElementById('fname').value);
var lname =Number(document.getElementById('lname').value);
var total = fname/lname;
document.getElementById('tname').value= total;
}




$('#contain').click(function(){
   
   var fname=$('#firstName').val();
   var lname=$('#lastName').val();
   var  tname=fname+ ''+lastName
     
     $('#result').val(tname);


	});




$('fname').keyup(function(){
      alert('hello world');
});