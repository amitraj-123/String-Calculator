export default function add(calcArg: string):number {
    let sum=parseInt(calcArg);
    if(calcArg.replace(/\s/g, "").length==0)sum= 0;
    const indexOfBackSlash=calcArg.indexOf("//");
    const delimiterUsed=(indexOfBackSlash > -1)?calcArg.charAt(indexOfBackSlash+2):",";
    calcArg = calcArg.replace(/[\n\r]/g, delimiterUsed);
    let intArg = calcArg.split(delimiterUsed).map(x => parseInt(x)).filter(Boolean);
    let negativeArr = intArg.filter(x => x < 0);
    if (negativeArr.length > 0)
        throw new Error(`Negatives are not allowed: ${negativeArr.join(',')}`);
    if(intArg.length>1){
        sum=0;
        for (let i = 0; i < intArg.length; i++) {
            sum += intArg[i]
        }
    }
    return sum;
}

