module.exports = {
  presets: [["@babel/preset-env", { "targets": { "node": "current" } }], "@babel/preset-typescript"], // 告诉babel ，以我当前node版本为基础做转换
}