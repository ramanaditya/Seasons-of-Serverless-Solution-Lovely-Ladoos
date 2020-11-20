const { ClassifyImageUrl } = require("./customvisionPrdiction");


module.exports = async function (context, req) {
    // get url of the image as the query parameter
    const imageUrl = (req.query.imageurl || (req.body && req.body.imageurl));

    // To store the response
    let results;

    // Call the predict function for finding the accuracy
    results = await ClassifyImageUrl(imageUrl);

    if (!results.length) {
        context.res = {
            status: 404,
            body: { message: `Unable to Predict the Image, try again with different Image URL. Did you use the url of the image in imageurl parameter ?` }
        };
    } else {
        context.res = {
            status: 200, /* Defaults to 200 */
            body: results
        };
    }
}