module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./res/script/index.test.js'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};