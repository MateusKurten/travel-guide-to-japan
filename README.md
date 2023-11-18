# Travel Guide to Japan

Access the website [here](https://travelguidetojapan.netlify.app/) to see the application in action!

## Description

The **Travel Guide to Japan** is a web application built using technologies such as Gatsby, React, TailwindCSS, and Google Maps Embed API. It aims to offer users a rich and informative experience while exploring Japan's cultural and scenic diversity.

## Setting up Google Maps API Key

This project requires a Google Maps API Key for proper functioning. Follow the steps below to set up your API key:

### Generating Google Maps API Key

1. Visit [Google Maps API Key Creation](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=pt-br#create-api-keys) for detailed instructions on generating an API key.
2. Follow the guide provided to create your API key.

### Environment Variables Setup

Once you've generated your API key, you'll need to add it to the project's environment files.

#### .env.development & .env.production

1. Copy the `.env.example` file twice and name the copies as `.env.development` and `.env.production`.
2. Open each copied file and replace `YOUR_API_KEY` with the actual API key you generated from Google.

### Important Notes

- Ensure the API key is kept confidential and not shared publicly to prevent unauthorized access and potential misuse.
- Review Google's terms of service and usage policies related to the Google Maps API to comply with their requirements.

## 🚀 Gatsby quick start

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

2.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

3.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## Technologies Used

- Gatsby (Jamstack)
- CI/CD via Netlify
- React
- TailwindCSS
- Google Maps Embed API
- GraphQL for data querying
- Markdown (MDX) for content

## Contribution Guidelines

Feel free to contribute by opening issues or pull requests. Follow the established contribution guidelines when contributing to this project.

## License

This project is licensed under [MIT License](LICENSE).

## Acknowledgements

- Developed as part of the Infnet postgraduate course by Mateus Kürten Rodrigues.
- Inspired by the desire to provide an informative travel guide for exploring Japan.