import path from "path";

const config = {
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ['/node_modules/'],

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules'],

    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    moduleNameMapper: {
        '^shared/(.*)$': '<rootDir>/src/shared/$1',
        '^widgets/(.*)$': '<rootDir>/src/widgets/$1',
        '^app/(.*)$': '<rootDir>/src/app/$1',
        '^pages/(.*)$': '<rootDir>/src/pages/$1',
        '^entities/(.*)$': '<rootDir>/src/entities/$1',
        '^features/(.*)$': '<rootDir>/src/features/$1',
        '^styles/(.*)$': '<rootDir>/src/app/styles/$1',
        '\\.module\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '\\.svg$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },

    // The root directory that Jest should scan for tests and modules within
    rootDir: '../../',

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // The glob patterns Jest uses to detect test files
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    setupFiles: ['<rootDir>/config/jest/setupTests.ts'],
};

export default config;
