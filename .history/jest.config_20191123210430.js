const { defaults } = require('jest-config');
module.exports = {
	'setupFilesAfterEnv': ['<rootDir>/jest.setup.js'],
	'modulePathIgnorePatterns': ['/node_modules/', '<rootDir>/.history/'],
};
