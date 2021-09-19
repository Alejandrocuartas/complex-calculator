const converter = (A, B) => {
    const angle = Math.atan(B/A);
    const mod = Math.sqrt(B*B + A*A);
    const deg = (angle*180)/Math.PI;
    return {
        module: mod.toFixed(2),
        dir: deg.toFixed(2)
    }
}

const converter0 = (A, θ) => {
    const rad = (θ*Math.PI)/180;
    const X = A*Math.cos(rad);
    const Y = A*Math.sin(rad);
    return {
        X: X.toFixed(2),
        Y: Y.toFixed(2)
    }
}

export {converter, converter0};