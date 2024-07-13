import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@ag-grid-community|@ag-grid-enterprise)/)"
  ],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};

export default config;
