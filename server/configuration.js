'use strict';

import { default as development } from './configuration/development.json';
import { default as production } from './configuration/production.json';

const configurations = {
    development,
    production
}

const configuration = configurations[process.env.NODE_ENV] ?? development;

export { configuration };
