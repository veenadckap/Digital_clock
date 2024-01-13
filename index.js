

var date=new Date("jan 1 2024 ,12:53:04").getTime()


let interval =setInterval(function(){
  let present=new Date().getTime()
  let count=date-present

  var days = Math.floor(count / (1000 * 60 * 60 * 24));
  var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((count % (1000 * 60)) / 1000);

  let day=document.getElementById("day").innerHTML=days
  let min=document.getElementById("min").innerHTML=minutes
  let hour=document.getElementById("hr").innerHTML=hours
  let second=document.getElementById("sec").innerHTML=seconds
  

},1000)