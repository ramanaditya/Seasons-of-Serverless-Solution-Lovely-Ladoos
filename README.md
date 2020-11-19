# Seasons of Serverless: Solution, Lovely Ladoos
![Seasons of Serverless](https://raw.githubusercontent.com/ramanaditya/Seasons-of-Serverless/main/graphics/banner-1.png)

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
- We will use [Postman](https://www.postman.com/) for our API Testing


## Endpoints
**Base URL: http://localhost:7071**

- /api/predict?imageurl=<Image URL>
- /api/uploadImage
