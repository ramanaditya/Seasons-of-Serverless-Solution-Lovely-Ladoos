# Seasons of Serverless: Solution, Lovely Ladoos
![Seasons of Serverless](https://raw.githubusercontent.com/microsoft/Seasons-of-Serverless/main/graphics/seasons-of-serverless-banner-animated.gif)

The solution creates a Serverless Endpoint which is used to
- List all the images on the Azure Blob Storage
- Upload new image on the Azure Blob Storage
- Predict the already uploaded image using Custom Vision API

## Pre-requisites
- Create Resource Group
- Create Azure Blob Storage
- Create a Container
- Deploy the Custom Vision API, you can use this [datasets](./datasets)
- Publish your prediction

## Running the Serverless Functions
#### Clone the Project
```bash
git clone git@github.com:ramanaditya/Seasons-of-Serverless-Solution-Lovely-Ladoos.git
```

#### Install Dependencies
```bash
npm install
```

#### Export `.env` variables
```bash
export $(grep -v '^#' .env | xargs)
```

> Required Environment Variables are given in the [.env.example](https://github.com/ramanaditya/Seasons-of-Serverless-Solution-Lovely-Ladoos/blob/main/.env.example)

#### Run the function locally
```bash
func start
```

## Checking and Working of API endpoint
- Test API using [Postman](https://www.postman.com/)

## Endpoints
**Base URL: http://localhost:7071**

- /api/predict?imageurl=<Image URL>
- /api/blobs

### Requests

| endpoint      | method    | parameters        | required |
| :---          | :---:     | :---:             | :---:    |
| /api/predict  | `GET`     | imageurl=\<ImageURL\> | True |
| /api/blobs    | `GET`     |                       |      |
|               | `POST`    |                       |      |

### Response
#### `/api/blobs`: `GET`
```json
[
  {
    "name": "11624351181437143-11108a41.jpg",
    "properties": {
      "createdOn": "2020-11-18T17:19:44.000Z",
      "lastModified": "2020-11-18T17:19:44.000Z",
      "etag": "0x8D88BE624813E21",
      "contentLength": 46337,
      "contentType": "image/jpeg",
      "contentEncoding": "",
      "contentLanguage": "",
      "contentMD5": {
        "type": "Buffer",
        "data": []
      },
      "contentDisposition": "",
      "cacheControl": "",
      "blobType": "BlockBlob",
      "leaseStatus": "unlocked",
      "leaseState": "available",
      "serverEncrypted": true,
      "accessTier": "Hot",
      "accessTierInferred": true,
      "Content-CRC64": ""
    },
    "objectReplicationMetadata": "",
    "OrMetadata": "",
    "imageUrl": "https://<storage-account>.blob.core.windows.net/<container-name>/11624351181437143-11108a41.jpg"
  }
]
```

#### `/api/blobs`: `POST`
```json
{
  "message": {
    "etag": "\"0x8D88C9867471CEB\"",
    "lastModified": "2020-11-19T14:35:46.000Z",
    "xMsContentCrc64": {
      "type": "Buffer",
      "data": [236, 13, 94, 16, 86, 9, 229, 124]
    },
    "clientRequestId": "####-####-####-####",
    "requestId": "####-####-####-####",
    "version": "2020-02-10",
    "date": "2020-11-19T14:35:46.000Z",
    "isServerEncrypted": true,
    "content-length": "0",
    "server": "Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0"
  },
  "url": "https://<storage-account>.blob.core.windows.net/<container-name>/image (62).jpeg"
}
```

#### `/api/predict?imageurl=<Image-URL>`: `GET`
```json
[
  {
    "probability": "94.44%",
    "tagId": "def6ab54-27d1-4604-9bd8-f05e8ec7bc13",
    "tagName": "ladoo",
    "tagType": "Regular"
  },
  {
    "probability": "5.30%",
    "tagId": "c0797ccb-bf83-46be-b07b-08d5f60100e1",
    "tagName": "doughnut",
    "tagType": "Regular"
  },
  {
    "probability": "0.26%",
    "tagId": "36c3a169-0f43-4bc7-ba0b-76845a97b607",
    "tagName": "sesame",
    "tagType": "Regular"
  }
]
```

## Resources
- [Visual Studio Code](https://code.visualstudio.com)
- [Azure Account](https://azure.microsoft.com)
- [Azure Command-Line Interface (CLI)](https://docs.microsoft.com/en-us/cli/azure/)
- [Azure Functions Extension](https://docs.microsoft.com/en-us/azure/azure-functions/)
- [Custom Vision](https://docs.microsoft.com/en-in/azure/cognitive-services/custom-vision-service/)

## Contributors
- [Aditya Raman](https://twitter.com/_adityaraman)
- [Rama Soumya Naraparaju](https://www.linkedin.com/in/soumyanarapa-3a8740169/)