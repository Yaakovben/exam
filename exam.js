
function Mission1(arr) {
    return arr.filter(function(num) {
        return num % 2 === 0;
    });
}

console.log(Mission1([1,5, 8,2, 10, ]));




function Mission2(str) {
    const words = str.split(" ");
    return words.filter((word) => {
        return word.length === 4;
    }).length
}

console.log(Mission2("ehadd hjokmkk seni"));

function Mission4(arrNum) {
    let up = 1;
    for(i = 0; i< arrNum.length; i++){
        for( x = 0; x < arrNum.length-1; x++){
            if(arrNum[i] > arrNum[x]){
                resp = 1;
            }
            else if (arrNum[i] < arrNum[x]){
                resp = 2;
            }
            else{
                resp = 0;
            }
        }
    }
    return resp;  
}

console.log(Mission4([1, 2, 4, 6, 8]));









function Mission5(arr1,arr2 ) {
    let obj = {};
    if(arr1.length < arr2.length){
      for (let i = 0; i < arr1.length; i++) {
      obj[arr1[i]] = arr2[i];
        }
    } 
    else{
        for (let i = 0; i < arr2.length; i++) {
            obj[arr1[i]] = arr2[i];
        }     
    }  
    return obj;
}

console.log(Mission5([1, 2, 3, 4, 5],[1, 2, 3, 4, 5]))



module.exports = {
    Mission1,
    Mission2,
    Mission4,
    Mission5


}

    







