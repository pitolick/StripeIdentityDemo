const path = require('path')

// 特殊文字を含んだパスを処理するために、シェルスクリプトを経由する
const buildEslintCommand = (filenames) => `next lint --fix --file "${filenames.map((f) => path.relative(process.cwd(), f)).join('" --file "')}"`

// secretlintignoreが正常に動作しないため、シェルスクリプトを経由して複数ファイルを指定する
const buildSecretlintCommand = (filenames) =>
  `secretlint --secretlintignore .gitignore "${filenames
    .map((f) =>
      path
        .relative(process.cwd(), f)
        .replace(/\\/g, '/')
        // ()を含むファイル名を処理するために、*に置換する
        .replace(/[(]/g, '*')
        .replace(/[)]/g, '*')
        .replace(/[()$&'"`\\]/g, '\\$&'),
    )
    .join('" "')}" --locale ja`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{js,jsx,ts,tsx,css,mdx}': `prettier "**/*.{js,jsx,ts,tsx,css,mdx}"  --write`,
  '*': [buildSecretlintCommand],
}
