 /*
            Logica para calculadora
            1. teclou uma tecla
                2. se tecla é numero
                    3. se sinal é vazio 
                        4. primeiroNumero recebe valor
                    5. senão
                        6. segundoNUmero recebe valor
                7. senao
                    8. se sinal é '='
                        9. calcula o resultado
                    10. senao
                        11. sinal recebe valor
        */
               
                        var Numero = "";
                        var primeiroNumero = "";
                        var segundoNumero = "";
                        var resultado = "";
                        var sinal = "";
                
                        function teclaUm() {
                
                /*
                                    3. se sinal é vazio 
                                        4. primeiroNumero recebe valor
                                    5. senão
                                        6. segundoNUmero recebe valor
                */
                
                                        if ( sinal == "" ) {
                                            if (primeiroNumero.length < 20) {
                                                primeiroNumero = primeiroNumero + 1;
                                                document.getElementById("valor").innerText = primeiroNumero; 
                                            }
                                        } else {
                                            if (segundoNumero.length < 20) {
                                                segundoNumero = segundoNumero + 1;
                                                document.getElementById("valor").innerText = segundoNumero;
                                            }
                                        }
                
                        }
                        function teclaDois() {
                            if ( sinal == "" ) {
                                if (primeiroNumero.length < 20) {
                                    primeiroNumero = primeiroNumero + 2;
                                    document.getElementById("valor").innerText = primeiroNumero; 
                                }
                            } else {
                                if (segundoNumero.length < 20) {
                                    segundoNumero = segundoNumero + 2;
                                    document.getElementById("valor").innerText = segundoNumero;
                                }
                            }
                        }
                        function teclaTres() {
                            if ( sinal == "" ) {
                                primeiroNumero = primeiroNumero + 3;
                                document.getElementById("valor").innerText = primeiroNumero;
                            } else {
                                segundoNumero = segundoNumero + 3;
                                document.getElementById("valor").innerText = segundoNumero;
                            }
                        }
                        function teclaQuatro() {
                            if ( sinal == "" ) {
                                primeiroNumero = primeiroNumero + 4;
                                document.getElementById("valor").innerText = primeiroNumero;
                            } else {
                                segundoNumero = segundoNumero + 4;
                                document.getElementById("valor").innerText = segundoNumero;
                            }
                        }
                        function teclaCinco() {
                            if ( sinal == "" ) {
                                primeiroNumero = primeiroNumero + 5;
                                document.getElementById("valor").innerText = primeiroNumero;
                            } else {
                                segundoNumero = segundoNumero + 5;
                                document.getElementById("valor").innerText = segundoNumero;
                            }
                        }
                        function teclaSeis() {
                            if ( sinal == "" ) {
                                primeiroNumero = primeiroNumero + 6;
                                document.getElementById("valor").innerText = primeiroNumero;
                            } else {
                                segundoNumero = segundoNumero + 6;
                                document.getElementById("valor").innerText = segundoNumero;
                            }
                        }
                        function teclaSete() {
                            if ( sinal == "" ) {
                                primeiroNumero = primeiroNumero + 7;
                                document.getElementById("valor").innerText = primeiroNumero;
                            } else {
                                segundoNumero = segundoNumero + 7;
                                document.getElementById("valor").innerText = segundoNumero;
                            }
                        }
                        function teclaOito() {
                            if ( sinal == "" ) {
                                primeiroNumero = primeiroNumero + 8;
                                document.getElementById("valor").innerText = primeiroNumero;
                            } else {
                                segundoNumero = segundoNumero + 8;
                                document.getElementById("valor").innerText = segundoNumero;
                            }
                        }
                        function teclaNove() {
                            if ( sinal == "" ) {
                                primeiroNumero = primeiroNumero + 9;
                                document.getElementById("valor").innerText = primeiroNumero;
                            } else {
                                segundoNumero = segundoNumero + 9;
                                document.getElementById("valor").innerText = segundoNumero;
                            }
                        }
                        function teclaZero() {
                            if ( sinal == "" ) {
                                primeiroNumero = primeiroNumero + 0;
                                document.getElementById("valor").innerText = primeiroNumero;
                            } else {
                                segundoNumero = segundoNumero + 0;
                                document.getElementById("valor").innerText = segundoNumero;
                            }
                        }
                        function teclaSubtrair() {
                            sinal = "-";
                        }
                        function teclaSomar() {
                /*
                                        11. sinal recebe valor da tecla
                */
                
                            sinal = "+";
                           
                        }
                        function teclaMultiplicar() {
                            sinal = "*";
                        }
                        function teclaDividir() {
                            sinal = "/";
                        }
                        function teclaIgual() {            
                            
                            //  9. calcula o resultado
                
                            /*
                            
                                Se sinal for "+" entao primeiroNumero + segundoNumero
                                Se sinal for "-" entao primeiroNumero - segundoNumero
                            */
                            if (sinal == "*") {
                                resultado = parseFloat(primeiroNumero) * parseFloat(segundoNumero);
                                document.getElementById("valor").innerText = resultado;
                            } 
                            if(sinal == "+") {
                                resultado = parseFloat(primeiroNumero) + parseFloat(segundoNumero);
                                document.getElementById("valor").innerText = resultado; 
                            }
                            if( sinal == "/") {
                
                                if( segundoNumero == "0") { 
                                    document.getElementById("valor").innerText = "Não é possivel dividir por zero";
                                } else {
                                    resultado = parseFloat(primeiroNumero) / parseFloat(segundoNumero);
                                    document.getElementById("valor").innerText = resultado; 
                                }
                            } 
                            if (sinal == "-"){
                                resultado = parseFloat(primeiroNumero) - parseFloat(segundoNumero);
                                document.getElementById("valor").innerText = resultado; 
                            }
                            primeiroNumero = resultado;
                            segundoNumero = "";
                            sinal = "";
                        }
                           // criar uma função para cada tecla da calculadora
                          // adicionar os botões somar, dividir, subtrair e multiplicar 
                         // completar os outros numeros até 0
                        //desafio: fazer a função somar funcionar clicando nos botões da calculadora