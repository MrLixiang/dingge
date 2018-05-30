$(function(){
    $("#searchBar").focus(function(){
        var account_value=$(this).val();
        if(account_value=="搜索···"){
            $(this).val("");
        }
    });
    $("#searchBar").blur(function(){
        var account_value=$(this).val();
        if(account_value==""){
            $(this).val("搜索···");
        }
    });
});
