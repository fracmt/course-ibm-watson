let VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
let fs = require('fs');

let visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
    "iam_apikey": "your_watson_api_key",
    "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:watson-vision-combined:us-south:a/60c90d29ecae487b93d92313c7ab535f:b49aea47-ac27-4db5-948a-15c87cdce6e0::",
    "iam_apikey_name": "auto-generated-apikey-9d3d68d6-5fb6-46e5-8089-3e1ca8569430",
    "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
    "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/60c90d29ecae487b93d92313c7ab535f::serviceid:ServiceId-4580282a-d443-492f-9a12-8a21ba20c816",
    "url": "https://gateway.watsonplatform.net/visual-recognition/api",
    "headers": {
        // Watson services log requests and their results to improve the services
        // for future users. The logged data is NOT shared or made public.
        // Set X-Watson-Learning-Opt-Out to true or 1 on each request that you
        // do not want IBM to access for general service improvements.
        'X-Watson-Learning-Opt-Out': 'true'
    }
});

let params = {
  name: 'dogs',
  beagle_positive_examples: fs.createReadStream('./beagle.zip'),
  beagle_positive_examples_filename: 'beagle.zip',
  husky_positive_examples: fs.createReadStream('./husky.zip'),
  husky_positive_examples_filename: 'husky.zip',
  negative_examples: fs.createReadStream('./cats.zip'),
  negative_examples_filename: 'cats.zip'
};

visualRecognition.createClassifier(params,
  function (err, response) {
    if (err) { 
      console.log(err);
    } else {
      console.log(JSON.stringify(response, null, 2))
    }
});