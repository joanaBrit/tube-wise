import type {Config} from 'jest';

const config: Config = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  transform: {
    '.+\\.(ts|tsx|js|jsx|mjs)$': "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@ag-grid-community|@ag-grid-enterprise)/)"
  ],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  setupFiles: ["./jest.setup.js"]
};

export default config;
