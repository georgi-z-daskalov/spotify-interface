const config = require('../app.config');
export const getConfigValue = (value: string) => config[value];

export const getConfigHomeList = () => getConfigValue('homelist');
