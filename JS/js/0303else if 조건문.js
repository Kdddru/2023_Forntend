let dust =30;

if(dust>0 && dust <30){
    document.write("좋음");
}else if(dust>=30 && dust <80){
    document.write("보통");
}
else if (dust>=80 && dust <150){
    document.write("나쁨");
}
else {
    document.write("매우나쁨");
}