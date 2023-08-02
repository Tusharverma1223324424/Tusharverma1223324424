// Get the mode-toggle button and body element
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


  // or use this for progress bar
  // const progress_bar=document.getElementsByClassName('progress')[0];
  // var value=0;
  // const interval=setInterval(function(){
  //   value+=10;
  //   progress_bar.style.width=value+'vw';
  //   if(value==90){
  //     stopinterval()
  //   }
  // },500)

  // function stopinterval(){
  //     clearInterval(interval)
  // }
  //date and time function
  setInterval(()=>{
  var curr_time=new Date().toLocaleTimeString();
  const time=document.getElementsByClassName('time')[0];
  time.innerHTML=curr_time;
  
  },1000);

  function Say(){
    
      var curr_time = new Date().toLocaleTimeString();
      document.getElementById("currentTime").textContent = curr_time; // Update the displayed time
      responsiveVoice.speak(curr_time);
    
    
  }
