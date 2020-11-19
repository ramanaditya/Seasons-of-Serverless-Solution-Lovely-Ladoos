const { getAllBlobs } = require("./getAllBlobs");
const { uploadBlob } = require("./uploadBlob");
const multipart = require("parse-multipart");

function getFileData(req) {
    const bodyBuffer = Buffer.from(req.body);
    const boundary = multipart.getBoundary(req.headers['content-type']);
    const parts = multipart.Parse(bodyBuffer, boundary);
    const fileData = parts[0].data;
    const fileName = parts[0].filename;
    return { fileName, fileData };
}

module.exports = async function (context, req) {
    if (req.method == "GET") {
        context.res = {
            status: 200,
            body: await getAllBlobs()
        };
    } else if (req.method == "POST") {
        const { fileName, fileData } = getFileData(req);
        context.res = {
            status: 200,
            body: await uploadBlob(fileName, fileData)
        };
    }
}