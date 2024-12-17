function findFirstRepeated(gifts) {

    let repeatedI = [];
    let firstRepeated;
    let z = 0;
    
    //Este ciclo obtiene los número repetidos en orden inverso y los guarda en el array repeatedI
    for (let i = gifts.length; i >= 0; i--) {

        let id = gifts[i];

        for (let x = i - 1; x >= 0; x--) {

            if (id == gifts[x]) {
                repeatedI[z] = id;
                z++;
            }
            
        }
    }

    //Aquí obtenemos el primer número que se repite en el arreglo con ayuda del arreglo que se saco de manera inversa
    let lastNumber = repeatedI[repeatedI.length -1];

    //Se recorre el arreglo gifts y se compara cada valor en orden para verificar cual es el primero en repetirse
    //Por medio del condicional el cuál guarda el repetido en la variable firstRepeated
    for (let i = 0; i < gifts.length; i++) {

        if (lastNumber == gifts[i]) {
            firstRepeated = gifts[i];
            break;
        } else {
            firstRepeated = -1;
        }

    }

    //Se imprime el primer valor repetido
    console.log("The first repeated number is: " + firstRepeated);

    //Mostrar números repetidos en orden inverso
    /*for (let i = 0; i < repeatedI.length; i++) {
        console.log(repeatedI[i]);
    }*/

    //Retorna el primer valor repetido
    if (firstRepeated === undefined) {
        return -1;
    } else {
        return firstRepeated;
    }

}

const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId);

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2);

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3);

const giftIds4 = [];
const firstRepeatedId4 = findFirstRepeated(giftIds4);
console.log(firstRepeatedId4);