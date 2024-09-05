const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // テスト環境の next.config.js と .env ファイルを読み込むために、Next.js アプリケーションへのパスを記載する
  dir: './',
})

// Jest に渡すカスタム設定を追加する
const customJestConfig = {
  // 各テストの実行前に渡すオプションを追加
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // TypeScript の設定で baseUrl をルートディレクトリに設定している場合、alias を動作させるためには以下のようにする必要があります
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  // stories と stories に対応するテストファイルをカバレッジの対象から除外する
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/src/**/*.tsx', '!<rootDir>/src/**/*.stories.ts*'],
}

// createJestConfig は、非同期で next/jest が Next.js の設定を読み込めるようにするため、下記のようにエクスポートします
module.exports = createJestConfig(customJestConfig)
