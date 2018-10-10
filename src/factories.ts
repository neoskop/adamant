import * as equal from "fast-deep-equal";


export function equalCheckerFactory() {
    return equal;
}


export function adamantIdFactory() {
    return {
        head(name : string) {
            return `${name}_0`
        },
        tail(name : string) {
            return `${name}_9`
        },
        build(name : string, type : typeof String | typeof Number, id : string|number) : string {
            if(type === String) {
                return `${name}_2_${id}`;
            } else if(type === Number) {
                const idStr = id.toString();
                return `${name}_1_${'0'.repeat(16 - idStr.length)}${idStr}`;
            }
            throw new Error(`Invalid id type "${type}"`);
        },
        parse(id : string) : { name: string, type: typeof String | typeof Number, id : string | number } {
            const match = /^(.*)_(1|2)_(.*)$/.exec(id);
            
            if(!match) {
                throw new TypeError(`Invalid id "${id}"`);
            }
            
            return {
                name: match[1]!,
                type: match[2] === '2' ? String : Number,
                id: match[2] === '2' ? match[3] : Number.parseInt(match[3], 10)
            };
        }
    }
}

