$(function(){
    /*锚点跳转*/
    
//search事件
function search(){
  function submit(id){
    var $K = $("#"+id);
    var k = $.trim($K.val());
    if (k == ""){
      //location.href= "http://cms-unv.uniview.com/Search/search.aspx";
      return false;
    }else{
      //location.href= "http://cms-unv.uniview.com/Search/search.aspx?PublicSearchKey=" + encodeURI(k);
      //location.href= "http://cms-unv.uniview.com/Search/search.aspx?PublicSearchKey=" + encodeURI(k) + "&publicTypeKey=type1&publicTypeValue=PressReleases&PageIndex=0";
        location.href = "http://cms-unv.uniview.com/Search/search.aspx?PublicSearchKey=" + encodeURI(k) + "&publicTypeKey=type1&PageIndex=0";
	}
  }
  
  function searchAction(k,c,t){
    if (k == "") {
    alert("Please enter the keyword！");
    return false;
    }

    if(c===undefined){
    location.href = "https://global.uniview.com/search?kw="+encodeURI(k);
	}else{
    location.href = "https://global.uniview.com/search?kw="+encodeURI(k)+"&"+(t?"ft":"fw")+"="+encodeURI(c);
	}
}

  return{
    submit  : searchAction
  }
}

var S = search();
$("#K,#K2,#K3").keydown(function(e){
    var curKey = e.which, k = $.trim($(this).val());
    if(curKey == 13){
        S.submit(k);
    }
});
$("#SearchBtn").on("click",function(){
	S.submit("K");
});
$("#SearchBtn3").on("click",function(){
  k = $.trim($('#K3').val());
	S.submit(k);
});





});