var date_begin = new Date("Sept 1 2020 00:00:00");

function clock(){
    
    var today = Date.now();
    var remaining = date_begin - today;
    
    var d = Math.trunc(remaining/1000/60/60/24);
    remaining = remaining - d*1000*60*60*24;

    var h = Math.trunc(remaining/1000/60/60);
    remaining = remaining - h*1000*60*60;

    var m = Math.trunc(remaining/1000/60);
    remaining = remaining - m*1000*60;

    var s = Math.trunc(remaining/1000);
    remaining = remaining - s*1000;
    var date_string = d+" Дней;";
	date_string += h+" Часов; ";
    date_string+=m+" Минут; ";
	date_string += s + " Секунд ";
    document.getElementById('clock').innerHTML = date_string;
}
setInterval(clock, 1000);    
