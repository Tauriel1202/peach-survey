This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and configured by DC-CC-21.

## Getting Started
1. Change to correct directory
    ``` bash
    cd <YourDirectory> 
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run dev server
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Editing
You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file

#### Page files
- ```page.js``` files handle each / route
- ```layout.js``` files create a template for this route and all child routes unless a new ```layout.js``` file is specified.
- The ```ui``` folder holds all template user interface components. 
- The ```lib``` folder holds shared library functions.
- All code should be located in the ```src/app``` directory and imports using the "@" symbol will start at ```src```

#### Images 
- Development images should be placed in the ```public/
largeImages``` folder.
- Production ready webp images should be placed in the ```public/images``` folder.



### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

To deploy, just push your code to [GitHub](https://github.com)

### Environment
A MONGO_URI variable is required to run this application
```bash
 MONGO_URI = "<Your Mongo URI here>"
```

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
