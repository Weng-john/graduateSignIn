var profile= "";
var change= false;

function isChinese(str){
    return /[\u4e00-\u9fa5]/.test(str);
}

function Confirm(){
    profile= document.getElementById("class").value + ",";
    var str= document.getElementById("name").value;
    if(!str){
        alert("請輸入正確的姓名");
        document.getElementById("name").value= "";
    }
    else{
        for (var i = 0; i <  str.length; i++) {
            var temp = str.charAt(i);
            if(isChinese(temp)){
                profile += '\\u' +  temp.charCodeAt(0).toString(16);
            }
            else{
                profile += temp;
            }
        }
    }
    if(!(change)){
        createSession();
        change= true;
    }
    else{
        $("#insert").qrcode({ width: 150, height:150, text: profile});
    }
}

function createSession(){
    $("section").after("<div id="+ "insert" +" class="+"qrCode"+"></div>");
    $("#insert").qrcode({ width: 200, height:200, text: profile});
}