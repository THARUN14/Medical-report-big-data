let displayTime= document.querySelector("#time");
  console.log(displayTime);
  let time = () => {
    let getData = moment().format(" MMMM Do YYYY, h:mm:ss a");
    displayTime.innerHTML=getData;
   
  };
  
  setInterval(time, 1000);
