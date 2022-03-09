console.log("hi");

setInterval(()=>{
   d=new Date();
   HTtime=d.getHours();
   MNtime=d.getMinutes();
   SCtime=d.getSeconds();

   hrotation=30*HTtime+(MNtime/2);
   // mrotation=6*MNtime;
   mrotation=6*MNtime+(SCtime/10);
   srotation=6*SCtime;

   hour.style.transform=`rotate(${hrotation}deg)`;
   minute.style.transform=`rotate(${mrotation}deg)`;
   second.style.transform=`rotate(${srotation }deg)`;

} ,1000)