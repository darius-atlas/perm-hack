/* eslint-disable */
export default {
  displayName: 'py-categories-service',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html', 'py'],
  coverageDirectory: '../../coverage/apps/py-categories-service',
};
