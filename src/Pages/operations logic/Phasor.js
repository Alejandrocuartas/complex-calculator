const phasorOperator = (A, teta, B, alpha, op) => {
    let module = 1;
    let angle = 45;
    let response = {mod: module, ang: angle};
    switch(op){
        case '*':
            module = A*B;
            angle = teta+alpha;
            response = {
                ang: angle,
                mod: module.toFixed(2)
            }
            break;
            
        case '/':
            module = A/B;
            angle = teta-alpha;
            response = {
                ang: angle,
                mod: module.toFixed(2)
            }    
            break;

        default:
            break;    
    }
    return response;
}

export default phasorOperator;