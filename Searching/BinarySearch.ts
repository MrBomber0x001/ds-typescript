export default function bs_list(arr: number[], needle: number): boolean {
    let lo = 0;
    let hi = arr.length;

    do {
        let m = Math.floor(lo + (hi - lo) / 2);
        const value = arr[m];

        if (value == needle) {
            return true;
        } else if (value > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);
    return false
}