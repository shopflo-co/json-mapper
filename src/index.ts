import { JsonMapper } from "./jsonMapper";
const sfJsonMapper = (eventMapping: any, analyticsData: any) => {
    let mappedJson = new JsonMapper().map(eventMapping, analyticsData);
    return mappedJson
};
export default sfJsonMapper;