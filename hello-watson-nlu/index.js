const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

const nlu = new NaturalLanguageUnderstandingV1({
  'version': '2018-04-05',
  'iam_apikey': "A57y-Qwd281cW3ZaRWSM5afrkz7GexcNOmTa0yqDu9SD",
  "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:natural-language-understanding:us-east:a/60c90d29ecae487b93d92313c7ab535f:a8ef89f7-e9f0-49f6-99ad-510c5265bb60::",
  "iam_apikey_name": "auto-generated-apikey-7290c8fe-690c-4cfd-9443-89d59757e59d",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/60c90d29ecae487b93d92313c7ab535f::serviceid:ServiceId-05eb2730-1d39-4c08-8895-36bce4398b63",
  "url": "https://gateway-wdc.watsonplatform.net/natural-language-understanding/api"
});

const text = `Worked at Soluções Global
Past: Elógica Processamento de Dados
Edit your work

Studied at Unibratec
Past: CNSD
Edit your education

Lives in Recife, Brazil
From Recife, Brazil
Edit the places you've lived

In a relationship with Franciele Melo
Edit your family and relationship status
Phones
(81) 98874-7484
Address
Recife, PE, Brazil
Social Links
fracmt@gmail.com(Google Talk)
Birthday
August 14, 1985`;

const options = {
  text,
  features: {
    entities: { },
    keywords: { },
    sentiment: { }
  }
}

nlu.analyze(options, (err, results) => {
  if (err) {
    console.log(err);
  }
  console.log(results);
});