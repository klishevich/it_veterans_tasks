class Cache {
    public cache = new Map<string, number>();

    calcHash(from: number, to: number) {
        return from.toString(10) + '_' + to.toString(10);
    }

    get(from: number, to: number) {
        return this.cache.get(this.calcHash(from, to));
    }

    set(from: number, to: number, value: number) {
        this.cache.set(this.calcHash(from, to), value);
    }
}

const cache = new Cache();

export function variants(from: number, to: number, k: number) {
    const resultFromCache = cache.get(from, to);
    if (resultFromCache) {
        return resultFromCache;
    }
    let res: number;
    if (to < from * k) {
        // from 5 to 10
        // k = 3
        // 11...11
        res = 1;
    } else if (to === from * k) {
        // 111..111
        // k
        res = 2;
    } else {
        res = variants(from + 1, to, k) + variants(from * k, to, k);
    }
    cache.set(from, to, res);
    return res;
}

// function memoVariants(from: number, to: number, k: number)

export function egeResult(p: number, q: number, k: number) {
    // check correct params
    const from1toQ = variants(1, q, k);
    const fromQtoP = variants(q, p, k);
    return from1toQ * fromQtoP;
}
