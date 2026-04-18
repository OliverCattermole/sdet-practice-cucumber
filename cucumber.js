module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    paths: ["features/*.feature"],
    require: ["steps/*.ts"],
    requireModule: ["ts-node/register"]
  }
}