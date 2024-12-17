function manufacture(gifts, materials) {

    let eachMaterial = materials.split("");//Separa cada caracter del string de materiales
    let giftsMaked = [];//Se usa para guardar los regalos que se pueden crear

    for (let i = 0; i < gifts.length; i++) {//Ciclo que recorre cada uno de los regalos o elementos del arreglo

        let separedGift = gifts[i].split("");//Separa cada caracter del string que haya en la posición del iterador
        let posible = false;
        let finishLoop = false;
        //let canMake = [];

        //Se compara cada caracter de cada regalo con cada caracter del material para verificar que se pueda crear el regalo
        for (let x = 0; x < separedGift.length; x++) {//Ciclo que recorre cada caracter del arreglo de regalos

            posible = false;

            for (let y = 0; y < eachMaterial.length; y++) {//Ciclo que recorre cada caracter del arreglo de materiales

                if (separedGift[x] == eachMaterial[y]) {//comparación de igualdad de caracteres
                    posible = true;
                    break;
                }

                //Sirve para observar paso a paso como se va guardando cada caracter y como se reinicia cuando no se cumple la condición
                /*if (posible) {

                    canMake.push(separedGift[x])
                    console.log(canMake);
                    break;

                }*/

                if (y == eachMaterial.length - 1 && posible == false) {//Verifica si está en la ultima posición de la lista de materiales y si está es falsa rompe todos los ciclos indicando que ya no se puede hacer el regalo
                    finishLoop = true;
                    break;
                }

            }

            if (finishLoop == true) {//Rompe el ciclo si la verificación de la linea 37 es verdadera
                break;
            }

        }

        if (posible) {//Si la comparación de la linea 20 es correcta se guarda el regalo en el array los regalos que se pueden crear
            giftsMaked.push(gifts[i]);
        }

    }

    return giftsMaked;//Retorna el array de los regalos que se pueden crear
}

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

manufacture(gifts, materials);

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

manufacture(gifts2, materials2)

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

manufacture(gifts3, materials3)
