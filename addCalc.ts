export default function add(calcArg: string):number {
    let sum=parseInt(calcArg);
    if(calcArg.replace(/\s/g, "").length==0)sum= 0;
    calcArg = calcArg.replace(/[\n\r]/g, ',');
    let intArg = calcArg.split(',').map(x => parseInt(x));
    if(intArg.length>1){
        sum=0;
        for (let i = 0; i < intArg.length; i++) {
            sum += intArg[i]
        }
    }
    return sum;
}

