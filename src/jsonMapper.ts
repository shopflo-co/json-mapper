var jsonpath = require("jsonpath")
export interface IJsonMapper {
    path: string,
    transformer?: Function,
    defaultValue?: any
}
export class JsonMapper {
    map = (mapping: any, payload: object) => {
        let out = {};
        for (let key in mapping) {
            if (this.isAnIJsonMapper(mapping[key])) {
                out = this.iJsonMapperTypeFunc(payload, mapping, key, out);
            } else if (typeof mapping[key] === 'object' && Array.isArray(mapping[key])) {
                out = this.objectArrayFunc(payload, mapping, key, out);
            } else if (typeof mapping[key] === 'object') {
                out = this.objFunc(payload, mapping, key, out);
            } else {
                out = this.genericFunc(mapping, key, out);
            }
        }
        return out;
    }

    private isAnIJsonMapper(obj: any): obj is IJsonMapper {
        return obj.path || obj.transformer || obj.defaultValue;
    }

    private iJsonMapperTypeFunc = (payload: object, mapping: any, key: string, out: any) => {
        let jpOut = jsonpath.apply(payload, mapping[key].path,
            mapping[key].transformer ? mapping[key].transformer : (x) => { return x });
        if(jpOut[0]) {
            out[key] = jpOut[0].value;
        } else if (mapping[key].defaultValue !== undefined) {
            out[key] = mapping[key].defaultValue;
        } else {
            console.log(key, mapping[key]);
            out[key] = mapping[key]
        }
        return out;
    }
    
    private objectArrayFunc = (payload: object, mapping: any, key: string, out: any) => {
        let keyArr: Array<any> = mapping[key];
        let outArr: Array<any> = [];
        for (let i = 0; i < keyArr.length; i) {
            outArr.push(this.map(keyArr[i], payload))
        }
        out[key] = outArr;
        return out;
    }
    
    private objFunc = (payload: object, mapping: any, key: string, out: any) => {
        out[key] = this.map(mapping[key], payload);
        return out;
    }
    
    private genericFunc = ( mapping: any, key: string, out: any) => {
        out[key] = mapping[key];
        return out;
    }
//TODO: Handle array to array deep mapping
}
