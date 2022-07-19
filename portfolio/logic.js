var occup = ["Web Developer" , "Competitive Coder", "Youtuber","Content Writer"] ;
// 

var i = 1 ,j=0;
var str,variable=" " ;
var timer = 125 ;
 setInterval(() => {
     var value = i%4 ;
     str = occup[value];
    change = str.length;
    variable = variable + str[j];
    console.log(variable);
   
  if(j == str.length)
    {
       
   
      for(x = 0; x<10000; x++)
      {
        for(y=0; y<100000; y++)
        {
          // do nothing 
        }
      }
    i++ ; 
    j=0;
    variable = ''
  
    
    }
    else
    {
     j++ ;
    
    }

    document.getElementById("prof").innerText = variable;
 }, timer);

// // logic for the back button
//  var element = document.getElementById("backarrow");

//  element.addEventListener('click',()=>
//  {
//     element.style.display = "none";
    
//  })