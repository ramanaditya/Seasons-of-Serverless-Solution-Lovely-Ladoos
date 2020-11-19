const { getAllBlobs } = require("./getAllBlobs");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.method == "GET") {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: await getAllBlobs()
        };
    }
}