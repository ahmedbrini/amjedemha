




    
  function makeGover(name,temperature,location,distance){
    
    var gover={}
      gover.name=name
      gover.temperature=temperature
      gover.location=location
      gover.distance=distance

      // gover.add=addGover
      // gover.remove=removeGover  
      gover.sortByTemperature=sortByTemperature
      gover.sortByDistance=sortByDistance
      return gover
      
    }
    
  var gover1 =makeGover("Hammamet",39,"Cap Bon",40)
  var gover2 =makeGover("Jerba",32,"South",70)
  var gover3 =makeGover("Sousse",35,"South",30)

var list = [gover1,gover2]

function addGover(gover) {
  return list.push(gover)
}

var gover3 =makeGover("Sousse",35,"South",30)
addGover(gover3)
console.log(list)

  $('p1').text("Government: " + list[0].name + " Temperature: " +  list[0].temperature + " Location:" + list[0].location + " Distance from Aerport (km) :" + list[0].distance) 
  $('p2').text("Government: " + list[1].name + " Temperature: " + list[1].temperature + " Location:" + list[1].location + " Distance from Aerport (km) :" + list[1].distance) 
  $('p3').text("Government: " + list[2].name + " Temperature: " +  list[2].temperature + " Location:" +list[2].location + " Distance from Aerport (km):" + list[2].distance) 
 


// console.log(this.list)
  // $('p1').text("Government: " + gover1.name + " Temperature: " +  gover1.temperature + " Location:" + gover1.location + " Distance from Aerport (km) :" + gover1.distance) 
  // $('p2').text("Government: " + gover2.name + " Temperature: " + gover2.temperature + " Location:" + gover2.location + " Distance from Aerport (km) :" + gover2.distance) 
  // $('p3').text("Government: " +gover3.name + " Temperature: " +  gover3.temperature + " Location:" +gover3.location + " Distance from Aerport (km):" + gover3.distance) 
 
  // $('p1').text(<ul> <li>gover1.name</li> <li>gover2.weather  </li> <li> gover1.location</li> </ul>)

  
 var sortByTemperature=function() {
  console.log("ff",list)
  list.sort(function(a,b){
   return  a.temperature - b.temperature
  })
 }


 var sortByDistance =function(){
  console.log(list)
  list.sort(function(a,b){
    return a.distance-b.distance
  })
 }

 
  
    


    $(".image1").click(function(){
      $(".ham").toggleClass("active");
    })
    ;$(".image2").click(function(){
      $(".jer").toggleClass("active");
    })
    ;$(".image3").click(function(){
      $(".sus").toggleClass("active");
    })

    $('input').on("click",
    sortByTemperature())


      // $(document).ready(function(){
  // })
    



//   $(document).ready(function(){

// ;$(".image4").click(function(){
//       $(".Hammamet").toggleClass("active");
//     })
//     ;$(".image5").click(function(){
//       $(".Hammamet").toggleClass("active")
//     })


//     $(".Dje").click(function(){
//         $(".jerba").toggleClass("active");
//       });
    
//       $(".click").click(function(){
//         $(".Sousse").toggleClass("active");
//       });

//     })
