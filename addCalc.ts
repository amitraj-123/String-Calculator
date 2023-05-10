export default function add(calcArg: string):number {
    let sum=parseInt(calcArg);
    if(calcArg.replace(/\s/g, "").length==0)sum= 0;
    return sum;
}

