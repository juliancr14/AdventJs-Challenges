/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    
    let biggestString = 0

    for (let i = 0; i < names.length; i++) {

        let letterCounting = 0

        for (const item of names[i]) {
            letterCounting++
        }

        if (letterCounting > biggestString) {
            biggestString = letterCounting
        }
    }

    let frammeWidth = biggestString + 3
    let frammework = ""
    let frammeContent = ""

    for (let i = 0; i <= frammeWidth; i++) {
        frammework += "*"
    }

    for(let i = 0; i < names.length; i++) {
        let frammeBetween = frammeWidth - (names[i].length + 2)

        frammeContent += `* ${names[i]}`

        for (let j = 0; j < frammeBetween; j++) {
            frammeContent += " "
        }

        frammeContent += "*\n"
    }

    let framme = frammework + "\n" + frammeContent + frammework
    
    return framme
}

createFrame(['midu', 'madeval', 'educalvolpz'])

/* Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
*************** */

createFrame(['midu'])

/* Resultado esperado:
********
* midu *
******** */

createFrame(['a', 'bb', 'ccc'])

/* Resultado esperado:
*******
* a   *
* bb  *
* ccc *
******* */

createFrame(['a', 'bb', 'ccc', 'dddd'])

/* Resultado esperado:
********
* a    *
* bb   *
* ccc  *
* dddd *
******** */
