var search = document.getElementById("search");
var search_text = document.getElementById("search_text");

var c_model = document.getElementById("c_model");
var c_parent = document.getElementById("c_parent");

var home = document.getElementById("home");

c_model.parentElement.removeChild(c_model);
c_parent.parentElement.removeChild(c_parent);

var taille;

var LoadData;

search.onclick = function(e){
    e.preventDefault();
    if(search_text.value=="")
        return;
    if(search.classList.contains("disabled"))
        return;


    search.classList.add("disabled");
    home.style.height = ""+802+"px";
    var res = document.getElementById("result");

    while (res.firstChild) {
        res.removeChild(res.firstChild);
    }

    while(c_parent.firstChild){
        c_parent.removeChild(c_parent.firstChild);
    }

    taille = LoadData(encodeURI(search_text.value), taille);

    setTimeout(function(){
        document.getElementById("result").appendChild(c_parent);
    }, 3000);

    alert("Wait A Bit ! We Are Loading Download Links For You !");
}


LoadData = function(data, taille)
{ 
    if(data=="")
        return;

    console.log(data);

    var xhr; 
    try {  xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
    catch (e) 
    {
        try {   xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
        catch (e2) 
        {
           try {  xhr = new XMLHttpRequest();  }
           catch (e3) {  xhr = false;   }
         }
    }
  
    xhr.onreadystatechange  = function() 
    { 

       if(xhr.readyState  == 4)
       {
        if(xhr.status  == 200){


            if(xhr.responseText=="An Error Occured : Use Valid Youtube Url And Try Again !"){

                img_card.setAttribute("src", "error.png"); 
                title.innerText = "An Error Occured !"
                link.setAttribute("href", "#");
                link.classList.add("disabled");

                return;
            }else{
             
                var rep_obj = JSON.parse(xhr.responseText);

                //console.log("eeeeeeeeeeeeee"+xhr.responseText+";;;;;");

                taille = rep_obj.length;
    
                if(rep_obj.length==0){
                    console.log("No Result Found !")
                    var cur_model = c_model.cloneNode(true);
                    cur_model.querySelector("#title").innerText = "No Result Found ! Try Another Keyword !";
                    cur_model.querySelector("#link1").innerHTML="";
                    cur_model.querySelector("#link2").innerHTML="";
                    cur_model.querySelector("#row").innerText= "-1"
                    c_parent.appendChild(cur_model);

                    search.classList.remove("disabled");

                    return;
                }else{
                    var flf = ""+ (800+rep_obj.length*125) +"px";
                    console.log("fllllf"+flf);
                    home.style.height = flf;
                }

                //lengthc = rep_obj.length;

                rep_obj.forEach((value, index)=>{
                    var cur_model = c_model.cloneNode(true);
                    cur_model.querySelector("#title").innerText = value.title;
                    cur_model.querySelector("#link1").setAttribute("href", value.link1);
                    cur_model.querySelector("#link2").setAttribute("href", value.link2);
                    cur_model.querySelector("#row").innerText= index;


                    c_parent.appendChild(cur_model);

                })

                search.classList.remove("disabled");

                return taille;

            }

        } 
        else{

            img_card.setAttribute("src", "error_.png"); 
            title.innerText = "An Error Occured !"
            link.setAttribute("href", "#");
            link.classList.add("disabled");
            console.log("Error Occured");

        }

        }
    }; 
 
   xhr.open("GET", "http://localhost:6969/udemy/"+data,  true);
   xhr.send(null); 
} 

var download = document.getElementById("download");
var dcma = document.getElementById("dcma");
var help = document.getElementById("help");
var about = document.getElementById("about");
var contact = document.getElementById("contact");
var donate = document.getElementById("donate");

var download_b = document.getElementById("download_b");
var dcma_b = document.getElementById("dcma_b");
var help_b = document.getElementById("help_b");
var about_b = document.getElementById("about_b");
var contact_b = document.getElementById("contact_b");
var donate_b = document.getElementById("donate_b");

var download_bb = document.getElementById("download_bb");
var dcma_bb = document.getElementById("dcma_bb");
var help_bb = document.getElementById("help_bb");
var about_bb = document.getElementById("about_bb");
var contact_bb = document.getElementById("contact_bb");
var donate_bb = document.getElementById("donate_bb");

download_b.onclick = function(e){

    e.preventDefault();

    if(download.classList.contains("hiddo"))
        download.classList.remove("hiddo");

    if(!dcma.classList.contains("hiddo"))
        dcma.classList.add("hiddo");   

    if(!help.classList.contains("hiddo"))
        help.classList.add("hiddo");   

    if(!about.classList.contains("hiddo"))
        about.classList.add("hiddo");

    if(!contact.classList.contains("hiddo"))
        contact.classList.add("hiddo");  
        
    if(!donate.classList.contains("hiddo"))
        donate.classList.add("hiddo");
}

dcma_b.onclick = function(e){

    e.preventDefault();

    if(!download.classList.contains("hiddo"))
        download.classList.add("hiddo");

    if(dcma.classList.contains("hiddo"))
        dcma.classList.remove("hiddo");   

    if(!help.classList.contains("hiddo"))
        help.classList.add("hiddo");   

    if(!about.classList.contains("hiddo"))
        about.classList.add("hiddo");

    if(!contact.classList.contains("hiddo"))
        contact.classList.add("hiddo");  
        
    if(!donate.classList.contains("hiddo"))
        donate.classList.add("hiddo");
}

help_b.onclick = function(e){

    e.preventDefault();

    if(!download.classList.contains("hiddo"))
        download.classList.add("hiddo");

    if(!dcma.classList.contains("hiddo"))
        dcma.classList.add("hiddo");   

    if(help.classList.contains("hiddo"))
        help.classList.remove("hiddo");   

    if(!about.classList.contains("hiddo"))
        about.classList.add("hiddo");

    if(!contact.classList.contains("hiddo"))
        contact.classList.add("hiddo");   

    if(!donate.classList.contains("hiddo"))
        donate.classList.add("hiddo");
}

about_b.onclick = function(e){

    e.preventDefault();

    if(!download.classList.contains("hiddo"))
        download.classList.add("hiddo");

    if(!dcma.classList.contains("hiddo"))
        dcma.classList.add("hiddo");   

    if(!help.classList.contains("hiddo"))
        help.classList.add("hiddo");   

    if(about.classList.contains("hiddo"))
        about.classList.remove("hiddo");

    if(!contact.classList.contains("hiddo"))
        contact.classList.add("hiddo"); 
        
    if(!donate.classList.contains("hiddo"))
        donate.classList.add("hiddo");
}

contact_b.onclick = function(e){

    e.preventDefault();

    if(!download.classList.contains("hiddo"))
        download.classList.add("hiddo");

    if(!dcma.classList.contains("hiddo"))
        dcma.classList.add("hiddo");   

    if(!help.classList.contains("hiddo"))
        help.classList.add("hiddo");   

    if(!about.classList.contains("hiddo"))
        about.classList.add("hiddo");

    if(contact.classList.contains("hiddo"))
        contact.classList.remove("hiddo");
        
    if(!donate.classList.contains("hiddo"))
        donate.classList.add("hiddo");
}

donate_b.onclick = function(e){

    e.preventDefault();

    if(!download.classList.contains("hiddo"))
        download.classList.add("hiddo");

    if(!dcma.classList.contains("hiddo"))
        dcma.classList.add("hiddo");   

    if(!help.classList.contains("hiddo"))
        help.classList.add("hiddo");   

    if(!about.classList.contains("hiddo"))
        about.classList.add("hiddo");

    if(!contact.classList.contains("hiddo"))
        contact.classList.add("hiddo");  
        
    if(donate.classList.contains("hiddo"))
        donate.classList.remove("hiddo"); 
}





download_bb.onclick = function(e){

    e.preventDefault();

    if(download.classList.contains("hiddo"))
        download.classList.remove("hiddo");

    if(!dcma.classList.contains("hiddo"))
        dcma.classList.add("hiddo");   

    if(!help.classList.contains("hiddo"))
        help.classList.add("hiddo");   

    if(!about.classList.contains("hiddo"))
        about.classList.add("hiddo");

    if(!contact.classList.contains("hiddo"))
        contact.classList.add("hiddo");  
        
    if(!donate.classList.contains("hiddo"))
        donate.classList.add("hiddo");
}

dcma_bb.onclick = function(e){

    e.preventDefault();

    if(!download.classList.contains("hiddo"))
        download.classList.add("hiddo");

    if(dcma.classList.contains("hiddo"))
        dcma.classList.remove("hiddo");   

    if(!help.classList.contains("hiddo"))
        help.classList.add("hiddo");   

    if(!about.classList.contains("hiddo"))
        about.classList.add("hiddo");

    if(!contact.classList.contains("hiddo"))
        contact.classList.add("hiddo");  
        
    if(!donate.classList.contains("hiddo"))
        donate.classList.add("hiddo");
}

help_bb.onclick = function(e){

    e.preventDefault();

    if(!download.classList.contains("hiddo"))
        download.classList.add("hiddo");

    if(!dcma.classList.contains("hiddo"))
        dcma.classList.add("hiddo");   

    if(help.classList.contains("hiddo"))
        help.classList.remove("hiddo");   

    if(!about.classList.contains("hiddo"))
        about.classList.add("hiddo");

    if(!contact.classList.contains("hiddo"))
        contact.classList.add("hiddo");   

    if(!donate.classList.contains("hiddo"))
        donate.classList.add("hiddo");
}

about_bb.onclick = function(e){

    e.preventDefault();

    if(!download.classList.contains("hiddo"))
        download.classList.add("hiddo");

    if(!dcma.classList.contains("hiddo"))
        dcma.classList.add("hiddo");   

    if(!help.classList.contains("hiddo"))
        help.classList.add("hiddo");   

    if(about.classList.contains("hiddo"))
        about.classList.remove("hiddo");

    if(!contact.classList.contains("hiddo"))
        contact.classList.add("hiddo"); 
        
    if(!donate.classList.contains("hiddo"))
        donate.classList.add("hiddo");
}

contact_bb.onclick = function(e){

    e.preventDefault();

    if(!download.classList.contains("hiddo"))
        download.classList.add("hiddo");

    if(!dcma.classList.contains("hiddo"))
        dcma.classList.add("hiddo");   

    if(!help.classList.contains("hiddo"))
        help.classList.add("hiddo");   

    if(!about.classList.contains("hiddo"))
        about.classList.add("hiddo");

    if(contact.classList.contains("hiddo"))
        contact.classList.remove("hiddo");
        
    if(!donate.classList.contains("hiddo"))
        donate.classList.add("hiddo");
}

donate_bb.onclick = function(e){

    e.preventDefault();

    if(!download.classList.contains("hiddo"))
        download.classList.add("hiddo");

    if(!dcma.classList.contains("hiddo"))
        dcma.classList.add("hiddo");   

    if(!help.classList.contains("hiddo"))
        help.classList.add("hiddo");   

    if(!about.classList.contains("hiddo"))
        about.classList.add("hiddo");

    if(!contact.classList.contains("hiddo"))
        contact.classList.add("hiddo");  
        
    if(donate.classList.contains("hiddo"))
        donate.classList.remove("hiddo"); 
}