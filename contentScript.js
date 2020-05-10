$(document).ready(function(){
    var sites=$("a");
   for(var i=0;i<sites.length;i++){
    if($(sites[i]).attr("href") !=undefined && $(sites[i]).attr("href").indexOf("https://forums.coronalabs.com/")==0){
        var title="";
        if($(sites[i]).find("h3").length!=0){
            title=escape($(sites[i]).find("h3")[0].innerText.replace(" - Corona Labs Forums",""));
            console.log(title);
        }else{
            title=escape($(sites[i]).text().replace("...",""));
            console.log(title);
        }
        $(sites[i]).parent().append("<div><a href='https://forums.solar2d.com/search?q="+title+"'>Redirect to Solar2d forum</a></div>")
    }
   }
   
   
})