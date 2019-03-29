const TelegramBot = require('node-telegram-bot-api');
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
let context = {};


const watsonAssistant = new AssistantV1({
  "version": "2018-07-10",
  "iam_apikey": "your_watson_api_key-RHNAQs0AmzcOWlccEeEx",
  "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:conversation:us-east:a/60c90d29ecae487b93d92313c7ab535f:4ae7e7fa-ba97-40e3-836e-afce9fa98e58::",
  "iam_apikey_name": "auto-generated-apikey-154c1a01-ae97-4d10-88cd-f8ddc5d23787",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/60c90d29ecae487b93d92313c7ab535f::serviceid:ServiceId-1cd7be3d-61ca-495e-bbbf-fd5999c54df1",
  "url": "https://gateway-wdc.watsonplatform.net/assistant/api"
});


const TOKEN = 'your_token_telegram'

const bot = new TelegramBot(TOKEN, { polling: true })

bot.on('message', (msg) => {
    let username = msg.from.username;
    context.namePerson = username;

    console.log(JSON.stringify(msg, null, "\t"));
  
    
  const params = {
    input: { text: msg.text },
    workspace_id: '0d7ccc5b-d889-45a6-a462-57b7df9b1ba6',
    text: msg.text,
    context,
};
  watsonAssistant.message(params, (err, response) => {
    if(err)
          bot.sendMessage(msg.chat.id, 'Eita... deu algum  erro na API :S');

    let dialog = response.output.generic[0];

    if(dialog.response_type == 'image') {
        const photo = dialog.source;
        bot.sendPhoto(msg.chat.id, photo, {caption: dialog.title});
    } else {
        bot.sendMessage(msg.chat.id, response.output.text.join('\n'));
    }

    context = response.context;
});
})