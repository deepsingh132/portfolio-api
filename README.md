# GitHub Pinned Repositories API

This Node.js Express application serves as an API to fetch pinned repositories from GitHub, designed specifically for integration with a portfolio website. By using this API, you can dynamically display your GitHub pinned repositories on your portfolio site, keeping it up-to-date with your latest projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/deepsingh132/portfolio-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd portfolio-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your GitHub access token:

    ```env
    GITHUB_ACCESS_TOKEN=your-github-access-token
    ```

    Note: Ensure your GitHub access token has the `repo` scope.

5. Start the server:

    ```bash
    npm start
    ```

## Usage

Once the server is running, you can make HTTP requests to the specified endpoints to retrieve your pinned repositories.

## Endpoints

### Get Pinned Repositories

- **Endpoint**: `/api/v1/github/pinned-repos`
- **Method**: `GET`
- **Description**: Fetches the pinned repositories from the authenticated user's GitHub account.
- **Example Request**:

    ```bash
    curl http://localhost:5000/api/v1/github/pinned-repos
    ```

- **Example Response**:

    ```json
    {
      "repos": [
        {
          "name": "project-1",
          "description": "A brief description of project 1.",
          "url": "https://github.com/your-username/project-1"
        },
        {
          "name": "project-2",
          "description": "A brief description of project 2.",
          "url": "https://github.com/your-username/project-2"
        },
        // ...
      ]
    }
    ```

## Configuration

You can customize the application by modifying the following parameters in the `.env` file:

- `GITHUB_ACCESS_TOKEN`: Your GitHub access token.

## Contributing

If you would like to contribute to the project, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
