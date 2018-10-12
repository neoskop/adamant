export function uuid() {
    return Array.from(new Array(36), (_, i) => {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
            return '-';
        }
        let rnd = (Math.random() * 16) | 0;
        if (i == 14) {
            rnd = 1 + ((Math.random() * 5) | 0);
        }
        if (i === 19) {
            rnd = (rnd & 0x3) | 0x8;
        }
        return rnd.toString(16);
    }).join('');
}
