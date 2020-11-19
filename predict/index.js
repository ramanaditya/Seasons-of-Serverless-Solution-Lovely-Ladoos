const { ClassifyImageUrl } = require("./customvisionPrdiction");
module.exports = async function (context, req) {

    const imageUrl = (req.query.url || (req.body && req.body.url));

    let results;

    results = await ClassifyImageUrl(imageUrl);

    if (!results.length) {
        context.res = {
            status: 404,
            body: { statusCode: 404, message: "Unable to Predict the Image, try again with different Image URL" }
        };
    } else {
        context.res = {
            status: 200, /* Defaults to 200 */
            body: results
        };
    }
}