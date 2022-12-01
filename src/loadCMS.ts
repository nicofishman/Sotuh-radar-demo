import json from './cms.json';

type CMSSections = keyof typeof json;
type CMSJson = typeof json;

const CMS = <T extends CMSSections>(section: T, part: keyof CMSJson[T]) => {
    return json[section][part];
};

export default CMS;
