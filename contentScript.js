$(document).ready(function(){
    var sites=$("a");
   for(var i=0;i<sites.length;i++){
    if($(sites[i]).attr("href") !=undefined && $(sites[i]).attr("href").indexOf("https://forums.coronalabs.com/")==0){
     
       var  title=($(sites[i]).find("h3").length!=0)?($(sites[i]).find("h3")[0].innerText):($(sites[i]).text().replace("...",""));
        title=title.replace(" - Corona Labs Forums","")
        
        $(sites[i]).parent().append("<div><a href='https://forums.solar2d.com/search?q="+escape(title)+"'>Redirect to Solar2d forum</a></div>")
    }
   }
   
   
})