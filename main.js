const ingressos =[];

function addRedBorder(id)
{
        Element = document.querySelector("#" + id);
        Element.style.border = "5px solid red";
}

function highlightCard(selectorId)
{
        var element = document.querySelector(selectorId);
        element.classList.toggle("card-highlight");
}
function checkKeyboardCode()
{
        document.addEventListener('keydown', (event) =>{
                var name = event.key;
                var code = event.code;
                //Alert the key name and key code on keydown 
                alert('tecla Pressionada ${name} \r\n Key code: ${code}');
        }, false);
}
function addKeyboardEventListeners()
{
        document.addEventListener('keydown', (event) =>{
                var ingresso1 = document.getElementById("quinta");
                var ingresso2 = document.getElementById("sexta");
                var ingresso3 = document.getElementById("esgotado");
                var ingresso4 = document.getElementById("domingo");
                
                var code = event.code;
                if(code == "Digit1") {
                        ingresso1.classList.toggle("card-highlight");
                        ingresso2.classList.remove("card-highlight");
                        ingresso3.classList.remove("card-highlight");
                        ingresso4.classList.remove("card-highlight");
                }

                if (code == "Digit2") {
                        ingresso1.classList.remove("card-highlight");
                        ingresso2.classList.toggle("card-highlight");
                        ingresso3.classList.remove("card-highlight");
                        ingresso4.classList.remove("card-highlight");
                }

                if (code == "Digit3") {
                        ingresso1.classList.remove("card-highlight");
                        ingresso2.classList.remove("card-highlight");
                        ingresso3.classList.toggle("card-highlight");
                        ingresso4.classList.remove("card-highlight");
               }

               if (code == "Digit4") {
                ingresso1.classList.remove("card-highlight");
                ingresso2.classList.remove("card-highlight");
                ingresso3.classList.remove("card-highlight");
                ingresso4.classList.toggle("card-highlight");
                }        
        }, false);
}
addKeyboardEventListeners();

function selectCard(selector){
        var element = document.querySelector(selector);
        element.classList.toggle("card-selected");
        if(ingressos.icludes(selector)) ingressos.pop(selector);
        else ingressos.push(selector)
}

function showSelectedCards ()
{
        if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);
}
addKeyboardEventListeners()

