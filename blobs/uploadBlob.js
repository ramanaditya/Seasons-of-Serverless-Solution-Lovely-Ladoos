const { BlobServiceClient } = require('@azure/storage-blob');
const streamifier = require("streamifier");

const containerName = process.env.CONTAINER_NAME;

async function uploadBlob(fileName, fileData) {
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AzureWebJobsStorage);
    const containerClient = blobServiceClient.getContainerClient(containerName);;

    const blockBlobClient = containerClient.getBlockBlobClient(fileName);

    try {
        const result = await blockBlobClient.uploadStream(streamifier.createReadStream(Buffer.from(fileData)), fileData.length);

        return { message: result, url: `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${containerName}/${fileName}` };
    } catch (err) {
        return { message: err };
    }
}

module.exports = { uploadBlob };