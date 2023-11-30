alert("Welcome To Djerba Travller")
function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }
  var id = generateID();
  var idhotel=id()
  
  function makehotel(idhotel,title,price,star,descr){
    var hotel={
      id:idhotel,
      title:title,
      price:price,
      star:star,
      descr:descr
    }
    return hotel
  }
  var hotel1=makehotel(new Date(),'- Rym Beach -',"150 Dt/nuit",'3 Stars',"Demi pension")
  
  
  $("p1").text(hotel1.id)
  $("p2").text(hotel1.title)
  $("p3").text(hotel1.price)
  $("p4").text(hotel1.star)
  $("p13").text(hotel1.descr)
  
  
   var hotel2=makehotel(new Date(),"- Dar El Mnara -","300 Dt/nuit","4 Stars","All inclusive")
  
  
  $("p5").text(hotel2.id)
  $("p6").text(hotel2.title)
  $("p7").text(hotel2.price)
  $("p8").text(hotel2.star)
  $("p14").text(hotel2.descr)
  
  var hotel3=makehotel(new Date(),"- Marine Beach -","250 Dt/nuit","4 Stars","All inclusive")
  
  
  $("p9").text(hotel3.id)
  $("p10").text(hotel3.title)
  $("p11").text(hotel3.price)
  $("p12").text(hotel3.star)
  $("p15").text(hotel3.descr)
  


$("#image1").click(
function () {
  $("#class1").toggle()  
}
)
$("#image2").click(
    function () {
      $("#class2").toggle()  
    }
    )
    $("#image3").click(
        function () {
          $("#class3").toggle()  
        }
        )     

       
              
              function each(array,func){
                for (var i=0 ; i<array.length ; i++){
             func(array[i],i)
                }
              }
              function filter(array,predicate){
                var res=[]
                each(array,function(e ,i){
                    if (predicate(e,i)){
                        res.push(e)
                    }
                })
                return res
            }
            
          var array=[hotel1,hotel2,hotel3]
          
           function descr(){
            return filter(array,function(e){
               console.log(e.descr)
               console.log(e.descr==="All inclusive")
                return e.descr==="All inclusive"
              
            })
           }  
           $(document).ready(function(){
            $("#all").click(function(){
              $("#image1").toggle();
            });
           
          });
          $(document).ready(function(){
            $("#all").click(function(){
              $("#class1").toggle();
            });
          })
          
          $(document).ready(function(){
            $("#demi").click(function(){
              $("#image2").toggle();
            });
           
          });
          $(document).ready(function(){
            $("#demi").click(function(){
              $("#class2").toggle();
            });
          })
          $(document).ready(function(){
            $("#demi").click(function(){
              $("#image3").toggle();
            });
           
          });
          $(document).ready(function(){
            $("#demi").click(function(){
              $("#class3").toggle();
            });
          })
          
          function star(){
            return filter(array,function(e){
               console.log(e.star)
               console.log(e.star==="5 Stars")
                return e.star==="5 Stars"
              })
            }
          
            $(document).ready(function(){
              $("#vip").click(function(){
                $("#image1").toggle();
              });
             
            });
            $(document).ready(function(){
              $("#vip").click(function(){
                $("#image3").toggle();
              });
             
            });
            $(document).ready(function(){
              $("#vip").click(function(){
                $("#class1").toggle();
              });
             
            });
            $(document).ready(function(){
              $("#vip").click(function(){
                $("#class3").toggle();
              });
             
            });
          






