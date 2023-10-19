var imagenes = [ "f1.png", "f2.png", "f3.png", "f4.png" , "f1.png" ];

var i = 0;


function siguiente(){
    if (i<4){
        document.getElementById("album").src = imagenes[i];
        
        i++;
    }
    else 
    {
        i = 0;

    }
}