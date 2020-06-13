let obj1 = {
    countries_obj: countries.slice(0),
    outContries: function(about) { 
       // this.lol;
         let tab ="<div>"
		for(let i = 0; i < this.countries_obj.length; i++){
		    tab+="<div>"
			tab +='<table width="85%">';  
			tab+="<tr>"
			tab+="<td colspan=2 align=center>"+"<h1>"+  this.countries_obj[i][0] +"-" +this.countries_obj[i][1]  + "</h1>"+"</td>"
			tab+="</tr>"
            for(let k = 2; k < 6; k++){
                tab+="<tr>"
                tab+="<td>" + about[k] + "</td>"
                tab+="<td>" + this.countries_obj[i][k] + "</td>"
                tab+="</tr>";
            }

            for(let k = 6; k < 7; k++){
                tab+="<tr>"
                tab+="<td>" + about[k] + "</td>"
                tab+="<td>"
                let arr = this.countries_obj[i][k].map((num, ii)=>{
                    return "<div>" + (ii+1) + "." + num +"</div>"
                }) 
                arr = arr.join(" ")
                tab += arr + "</td>"
            }
			
            for(let k = 7; k < about.length; k++){
               tab+="<tr>"  
                if (k < about.length-1 ) {
                    tab+="<td>" + about[k] + "</td>"
                    tab+="<td>"
                    let l = this.countries_obj[i][k].map((num, ii)=>{
                        let p = num.map((n)=>{
                            return n
                        })
                        p = p.join(" ")
                        return "<div>" +(ii+1)+ "." + p +"</div>"
                    }) 
                    l = l.join(" ")
                    tab += l + "</td>"
                }
                else {
				   tab+="<tr>"
				   tab+="<td td colspan=2 align=center>"+"<b>"+about[k]+"</b>"+"</td>"
				   tab+="</tr>"
                    tab+="<tr>"
                    for (var key in this.countries_obj[i][k]) {
						tab+="<tr>"
                        tab+="<td>"+key +"-" + this.countries_obj[i][k][key] + "</td>"
						tab+"</tr>"
						
                    }
                    tab+="</tr>";
                }
                tab+="</tr>";
				
            }
         tab+="</table>"
		 tab+= "</div>"
        }
		
        
        
        document.getElementById('tabl').innerHTML = tab;
    }
};

function Change(){
    this.countries_obj = [];
    for (i=0; i<countries.length; i++) {
        if (Array.isArray(countries[i])){
            for (j=0; j<countries[i].length; j++) { 
                if (Array.isArray(countries[i][j])){
                    for (t=0; t<countries[i][j].length; t++) { 
                        if (Array.isArray(countries[i][j][t])){
                            if ( t == 0 ) this.countries_obj[i][j] = [];
                            this.countries_obj[i][j][t] = [];
                            this.countries_obj[i][j][t] = countries[i][j][t].slice()
                        }
                        else{ 
                            if (t == 0 )this.countries_obj[i][j] = [];
                            this.countries_obj[i][j][t] = countries[i][j][t]
                        }
                    }
                }
                else { 
                    if (j ==0 )this.countries_obj[i] = [];
                    this.countries_obj[i][j] = countries[i][j]; 
                }
            }
        }
    };
    this.changeCountries = function(data) {
        this.countries_obj.forEach((country) => {
		   if(data==1){
			country[6]=country[6].sort();
		   }
		   if(data==0){
			   country[6]=country[6].sort();
			   country[6]=country[6].reverse();
		   }
        });
    }
};
var obj2 = new Change();

obj1.outContries(about);


