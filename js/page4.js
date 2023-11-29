function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }
  var id = generateID();
  var idhotel=id()
  
  function makehotel(idhotel,title,price,star){
    var hotel={
      id:idhotel,
      title:title,
      price:price,
      star:star,
    }
    return hotel
  }
  var hotel1=makehotel(new Date(),'Rym Beach',"150 Dt/nuit",'3 Stars')
  
  
  $("p1").text(hotel1.id)
  $("p2").text(hotel1.title)
  $("p3").text(hotel1.price)
  $("p4").text(hotel1.star)
  
  
   var hotel2=makehotel(new Date(),"Dar El Mnara","300 Dt/nuit","4 Stars")
  
  
  $("p5").text(hotel2.id)
  $("p6").text(hotel2.title)
  $("p7").text(hotel2.price)
  $("p8").text(hotel2.star)
  
  var hotel3=makehotel(new Date(),"Marine Beach","250 Dt/nuit","4 Stars")
  
  
  $("p9").text(hotel3.id)
  $("p10").text(hotel3.title)
  $("p11").text(hotel3.price)
  $("p12").text(hotel3.star)
  


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








