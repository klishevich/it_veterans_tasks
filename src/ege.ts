export function variants(from: number, to: number, k: number) {
    if (to < from * k) {
        // from 5 to 10
        // k = 3
        // 11...11
        return 1;
    } else if (to === from * k) {
        // 111..111
        // k
        return 2;
    } else {
        return variants(from + 1, to, k) + variants(from * k, to , k);
    }
}

// function memoVariants(from: number, to: number, k: number)

export function egeResult(p: number, q: number, k: number) {
    // check correct params
    const from1toQ = variants(1, q, k);
    const fromQtoP = variants(q, p, k);
    return from1toQ * fromQtoP;
}
