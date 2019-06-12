var nombre = Math.floor(Math.random()*100 + 1);
console.log(nombre);

let nombreclique = 0;


function bouton()
{   
    let number = document.getElementById("number").value;
    document.getElementById("number").focus();
    document.getElementById("number").select();

    var indicesup = (nombre + 10 );
    var indiceinf= (nombre - 10 );

    let resultat = number - nombre;

    nombreclique++;
    console.log(nombreclique + " " + number);

    if(resultat < 0){
        resultat = resultat * -1;
        }
    console.log(resultat);

    if(resultat > 20 ){
        var froid = document.querySelector(".hotOrCold");
        froid.style.backgroundImage = "url('image/ice.png')";
        froid.innerHTML = "Il fait froiiid !!!"

        }
    if(resultat < 20 && resultat != 0){
        var chaud = document.querySelector(".hotOrCold");
        chaud.style.backgroundImage = "url('image/fire.png')";

        chaud.innerHTML = "Ca chauffe !!!"
        }

    if( resultat < 10 && resultat != 0 ){
        var chaud = document.querySelector(".hotOrCold");
        chaud.style.backgroundImage = "url('image/fire.png')";

        chaud.innerHTML = "Tu brûle !!!";
        }

    if( resultat < 5 && resultat != 0 ){
        var chaud = document.querySelector(".hotOrCold");
        chaud.style.backgroundImage = "url('image/fire.png')";

        chaud.innerHTML = "Encore un ptiiit peeeuuu !!!";
        }

    if ( resultat > 50 ){
        var froid = document.querySelector(".hotOrCold");
        froid.style.backgroundImage = "url('image/ice.png')";

        froid.innerHTML = "Tu es congelé là !!!!";
        }

    if ( resultat == 0 ){
        var gagne = document.querySelector(".hotOrCold");
        gagne.style.backgroundImage = "";

        gagne.className = "gagne";
        
        gagne.innerHTML = "Victoire !!!";
        }

    if(nombreclique == 5){
            var indice = document.querySelector(".hotOrCold");
            indice.innerHTML="Le chiffre que vous devez trouver est compris entre " + indiceinf + " et " + indicesup;
    
            indice.style.backgroundImage = "";
            
            console.log(indicesup + " " + indiceinf);
        }
    
    if(nombreclique == 5 && nombre > 90){
        var indice = document.querySelector(".hotOrCold");
        indice.innerHTML="Le chiffre que vous devez trouver est compris entre " + "80" + " et " + "100";

        indice.style.backgroundImage = "";
        
        console.log(indicesup + " " + indiceinf);
    }

    if(nombreclique == 5 && nombre < 10){
        var indice = document.querySelector(".hotOrCold");
        indice.innerHTML="Le chiffre que vous devez trouver est compris entre " + "0" + " et " + "20";

        indice.style.backgroundImage = "";
        
        console.log(indicesup + " " + indiceinf);
    }

    if(nombreclique == 10){
            var perdu = document.querySelector(".hotOrCold");
            perdu.style.backgroundImage = "";
            perdu.innerHTML = "T'as perdu fpd ! C'était " + nombre + ". A la prochaine !";
            perdu.className = "perdu";
            document.querySelector("#bouton").disabled = true;
        }

    if(number > 100 || number < 1 || number == ""){
            alert("Veuillez saisir un nombre entre 1 et 100, fdp!");
            return false;
        }
        else{
            return true;
        }
    
}