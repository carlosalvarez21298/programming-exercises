const arr = [2,345,768,12,5,7,8,34,788,12,56,5,89,31,548, 44];

for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-i-1; j++) {

        if(arr[j] > arr[j+1]){
            let aux = arr[j];

            arr[j] = arr[j+1];
            arr[j+1] = aux;
        }
    }  
}
console.log(arr);
