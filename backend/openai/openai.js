const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration)

module.exports = openai