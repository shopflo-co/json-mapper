export interface IJsonMapper {
    path: string;
    transformer?: Function;
    defaultValue?: any;
}
export declare class JsonMapper {
    map: (mapping: any, payload: object) => {};
    private isAnIJsonMapper;
    private iJsonMapperTypeFunc;
    private objectArrayFunc;
    private objFunc;
    private genericFunc;
}
