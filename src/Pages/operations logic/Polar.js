const polarOperator = (A,B,C,D,op) => {
    let X = 0;
    let Y = 0;
    if(op==='+'){
        X = A + C;
        Y = B + D;
    }else{
        X = A - C;
        Y = B - D;
    }
    return {
        x: X,
        y: Y
    }
}

export default polarOperator;