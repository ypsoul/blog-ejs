function myMin() {
    if(arguments.length==0) return Infinity;
    var arr=[];
    for(var i= 0;i<arguments.length;i++){
        if(arguments[i]===null) arr.push(0);
        else arr.push(arguments[i]);
        if(isNaN(arr[i])) return NaN;
        if(arr[i] instanceof Array){
            var temp=arr[i][0];
            while (temp instanceof Array){
                temp=temp[0];
            }
            if(temp===undefined) temp=0;
            if(isNaN(temp)) return NaN;
            arr[i]=temp;
        }
    }
    var result =arr ? arr[0] : 0;
    for (var i=0;i<arr.length;i++){
        result=arr[i]-result>0?result:arr[i];
    }
    console.log(result)
    return result;
}
myMin(666,4444);