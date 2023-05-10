export default function add(calcArg: string):number {
    const indexOfBackSlash=calcArg.indexOf("//");
    const delimiterUsed=(indexOfBackSlash > -1)?calcArg.charAt(indexOfBackSlash+2):",";
    calcArg = calcArg.replace(/[\n\r]/g, delimiterUsed);
    let intArg = calcArg.split(delimiterUsed).map(x => parseInt(x));
    let negativeArr = intArg.filter(x => x < 0);
    if (negativeArr.length > 0)
        throw new Error(`Negatives are not allowed: ${negativeArr.join(',')}`);
    return intArg.filter(Boolean).reduce((a, b) => a + b, 0);
}

