const msRest = require("@azure/ms-rest-js");
const { PredictionAPIClient } = require("@azure/cognitiveservices-customvision-prediction");

const projectId = process.env.PROJECT_ID
const publishedName = process.env.PUBLISHED_NAME
const predictionKey = process.env.PREDICTION_KEY
const endPoint = process.env.PREDICTION_ENDPOINT
const predictionResourceId = process.env.PREDICTION_RESOURCE_ID

async function ClassifyImageUrl(imageUrl) {
    const predictor_credentials = new msRest.ApiKeyCredentials({ inHeader: { "Prediction-key": predictionKey } });
    const predictor = new PredictionAPIClient(predictor_credentials, endPoint);
    let results;
    try {
        results = await predictor.classifyImageUrl(projectId, publishedName, { url: imageUrl });
    } catch (err) {
        results = { predictions: [] }
        console.log(err);
    }

    results.predictions.forEach(function (ele, index) {
        results.predictions[index].probability = `${(ele.probability * 100.0).toFixed(2)}%`;
    }, results.predictions);

    return results.predictions
}

module.exports = { ClassifyImageUrl };