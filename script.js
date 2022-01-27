var btnencriptar = document.getElementById("btn-encriptar");
var btndesencriptar = document.getElementById("btn-desencriptar");
var btnCopy = document.getElementById("btn-copy");
var vocals = ["a", "e", "i", "o", "u"];
var llaves = ["ai", "enter", "imes", "ober", "ufat"];
var dict = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [2, 5, 4, 4, 4];

var pass;


function validar(text) {
    var cont=0;
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < dict.length; j++) {
            if (text[i]==dict[j]) {
                cont=cont+1;
                break;
            }
        }
    }
    if (cont==text.length) {
        return true;
    }
    else{
        return false;
    }
}

function encriptar(text) {
    if (validar(text)==true) {
        var text_encript = "";
        for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < 5; j++) {
                pass= 0 ;
                if (text[i] == vocals[j]) {
                    text_encript = text_encript + llaves[j];
                    pass = 1;
                    break;
                }
            }
            if (pass== 0) {
                text_encript = text_encript + text[i];
            }
        }
        return text_encript;
    }
    else{
        alert("Sólo se permiten letras minúsculas, inténtelo nuevamente");
    }
}


function desencriptar(text) {
    if (validar(text)==true) {
        var text_encript = "";
        var i = 0;
        while (i < text.length) {
            for (let j = 0; j < 5; j++) {
                pass = 0;
                if (text[i] == vocals[j]) {
                    text_encript = text_encript + text[i];
                    i = i + numbers[j];
                    pass = 1;
                    break;
                }
            }
            if (pass == 0) {
                text_encript = text_encript + text[i];
                i = i + 1;
            }
        }
        return text_encript;
    }
    else{
        alert("Sólo se permiten letras minúsculas, inténtelo nuevamente");
    }
}


btnencriptar.addEventListener("click", function(event){
	event.preventDefault();
	var texto = document.querySelector("#input-texto").value;
	texto = encriptar(texto);
	document.getElementById("msg").value = texto;
    
    
});

btndesencriptar.addEventListener("click", function(event){
	event.preventDefault();
	var texto = document.querySelector("#input-texto").value;
	texto = desencriptar(texto);
	document.getElementById("msg").value = texto;
});

btnCopy.addEventListener("click",function(event){
    event.preventDefault();
    var texto = document.querySelector("#msg");
    texto.select();
    document.execCommand('copy');
    var msg = document.getElementById("input-texto");
    msg.value = "";
});