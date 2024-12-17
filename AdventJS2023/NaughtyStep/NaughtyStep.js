function findNaughtyStep (original, modified) {

    let eachOriginal = original.split("");
    let eachModified = modified.split("");
    let flag = false;
    let NaughtyChar = '';

    //if (eachModified.length == eachOriginal.length) {
        flag = true;

        for (let i = 0; i < eachModified.length; i++) {

            if (eachOriginal[i] != eachModified[i]) {
                NaughtyChar = eachModified[i];
            }
        }
    //}
    
    console.log(NaughtyChar);
    return '';
}

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
findNaughtyStep(original2, modified2) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
findNaughtyStep(original3, modified3) // ''