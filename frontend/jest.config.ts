import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // O caminho deve ser relativo à raiz do projeto, então você precisa subir um nível de diretório e, em seguida, entrar no diretório 'frontend'
  setupFilesAfterEnv: ['./setupTests.ts'],
  //setupFilesAfterEnv: ["@testing-library/jest-dom"] 
};

export default createJestConfig(config);
