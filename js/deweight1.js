var arr=[1,1,2,3,4,4,5,6,7,7,8,9,1,10];
function deWeight(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])===-1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(deWeight(arr));

