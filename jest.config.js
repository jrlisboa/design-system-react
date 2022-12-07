module.exports = {
    setupFiles: [`<rootDir>/__tests__/jest-shim.js`],
    modulePathIgnorePatterns: [`<rootDir>/__tests__/jest-shim.js`],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
    }
};
