/*Selection sort works by selecting the minimum value in a list and 
swapping it with the first value in the list. It then starts at the 
second position, selects the smallest value in the remaining list, 
and swaps it with the second element. It continues iterating through 
the list and swapping elements until it reaches the end of the list. 
Now the list is sorted. Selection sort has quadratic time complexity 
in all cases.*/

let selectionSort = (array)=>{
    /*Validations*/
    if(!(Array.isArray(array))) return `ERROR: ${array} is not an array`;
    for (const number of array) {
        if(!(typeof number == "number")) return `ERROR: ${number} in [${array}] is not a number`;
    }

    /*Code*/
    let aux;

    for (let i = 1; i < array.length; i++) {

        for (let j = i; j > 0; j--) {

            if(array[j-1] > array[j]){ 
                aux = array[j-1];
                array[j-1] = array[j];
                array[j] = aux;
            }
        }       
    }

    return array;
}

selectionSort([3,4,5,8,3,9,8,4,3,1]);