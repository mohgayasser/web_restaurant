 
function checkname(){ 
    var  myname = document.forms["myForm"]["Name"].value,
  mymessage = document.forms["myForm"]["Message"].value;
if (myname!=""&&mymessage!=""){
  window.alert("Hello "+myname +" your message sent successfully");

}
else if (myname=="" && mymessage==""){
  window. alert("you should enter  message & your name ");
    return false;
}

else if (mymessage==""){
   window. alert("you should enter  message ");
    return false;
}
else {
 alert("you should enter your name");
    return false;
}
}
