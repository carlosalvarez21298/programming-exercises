/*The mathematical term symmetric difference (△ or ⊕) of two sets is the set of 
elements which are in either of the two sets but not in both. For example, 
for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. 
So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), 
you must complete one operation at a time. Thus, for sets A and B above, 
and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.*/

let symmetricDifference = (...args)=>{

    /*VALIDATIONS*/

    for (let i = 0; i < args.length; i++) {
        if(!(Array.isArray(args[i]))) return `ERROR: parameter ${args[i]} is not an array`;

        for (let j = 0; j < args[i].length; j++) {
            if(!(typeof args[i][j] == "number")) return `ERROR: the element ${args[i][j]} in [${args[i]}] is NaN`;
        }
    }

    let aux=[];
    let len = args.length;

    for (let i = 0; i < (len-1); i++) {
        aux=[];
        
        for (let j = 0; j < args[i].length; j++) {

            if(args[i+1].includes(args[i][j])) continue;
            if(aux.includes(args[i][j])) continue;

            aux.push(args[i][j]);
        }
        
        for (let j = 0; j < args[i+1].length; j++) {

            if(args[i].includes(args[i+1][j])) continue;
            if(aux.includes(args[i+1][j])) continue;

            aux.push(args[i+1][j]);
        } 

        args[i+1] = aux;
    }
    
    return aux.sort(function(a,b){return a-b;});
}

console.log(symmetricDifference([1, 2, 3], [2, 3, 4], [2, 3]));