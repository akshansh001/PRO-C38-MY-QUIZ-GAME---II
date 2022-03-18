class Contestant {
  constructor(){
    this.index = 0;
    this.answer = 0;
    this.name = 0;
  }

  getCount(){
   var contestantCountRef = database.ref('contestantCount');

  contestantCountRef.on("value",(data)=>{
     contestantCount = data.val();
     })


   // contestantCountRef.on("value",()=>{
    // contestantCount = data.val();
    // })

   // contestantCountRef.on("value",(data)=>{
   //   contestantCount = data();
  //})
  }

  updateCount(count){
    
    //database.ref('/').update({
      //count: contestantCount
//});


    //database.ref('/').update( {
     // contestantCount: 0
    //});


     //database.ref('').update({
     //  contestantCount: counts
    // });


    database.ref('/').update({
      contestantCount: count
    });

    
  }
    
  }