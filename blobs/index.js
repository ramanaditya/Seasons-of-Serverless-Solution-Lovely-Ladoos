const { getAllBlobs } = require("./getAllBlobs");
const { uploadBlob } = require("./uploadBlob");
const multipart = require("parse-multipart");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.method == "GET") {
        context.res = {
            status: 200, /* Defaults to 200 */
            body: await getAllBlobs()
        };
    } else if (req.method == "POST") {
        const bodyBuffer = Buffer.from(req.body);
        const boundary = multipart.getBoundary(req.headers['content-type']);
        const parts = multipart.Parse(bodyBuffer, boundary);
        const filedata = parts[0].data;
        const filename = parts[0].filename;
        context.res = {
            status: 200, /* Defaults to 200 */
            body: await uploadBlob(filedata, filename)
        };
    }
}