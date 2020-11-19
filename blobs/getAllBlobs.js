const {
    BlobServiceClient,
    StorageSharedKeyCredential,
    newPipeline
} = require('@azure/storage-blob');

const sharedKeyCredential = new StorageSharedKeyCredential(
    process.env.AZURE_STORAGE_ACCOUNT_NAME,
    process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY);
const pipeline = newPipeline(sharedKeyCredential);

const containerName = process.env.CONTAINER_NAME;

async function getAllBlobs() {
    let results = [];
    try {
        const blobServiceClient = new BlobServiceClient(
            `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
            pipeline
        );
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const listBlobsResponse = await containerClient.listBlobFlatSegment();

        if (listBlobsResponse.segment.blobItems.length) {
            results = listBlobsResponse.segment.blobItems;
            results.forEach(function (blobItem, index) {
                results[index].imageUrl = `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${containerName}/${blobItem.name}`;
            }, results);
        }
        return results;
    } catch (err) {
        return err;
    }
}

module.exports = { getAllBlobs };