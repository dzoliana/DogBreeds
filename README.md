# Dog breeds

## Project summary

- Dog breeds is a web application that involves creating a frontend app using React and Next.js.
- The app will interact with the Dog CEO's Dog API to display various dog images.
- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements:

1. Set up a next.js project

- Initialize a new next.js project which will serve as the base for your frontend app.

2. Implement pages and navigation:

- Homepage (dog breeds page: a page that lists all dog breeds retrieved from the Dog API.)
- Breed images page: when a user clicks on a breed, they should be taken to this page where they can view various images of the selected breed.

3. Integrate dog CEO's Dog API:

- Utilize the dog API to fetch and display data. This includes listing all breeds and displaying images for a selected breed.

4. User interaction and state management:

- Implement client-side state management to handle user interactions, such as selecting a dog breed.

5. UX/UI and styling:

- Use a CSS/UI framework of your choice for styling (e.g. Bootstrap, Material-UI, Tailwind CSS)

### BONUS

- Preserve the app state on page refresh(you might use React Context or any state management library like Redux).
- Ensure the app is responsive and provides a good user experience.
- Data validation and error handling (Frontend):
  o Implement appropriate error handling for API requests (displaying error messages if the API call fails, for example).
  o Validate user interfaces where necessary (e.g. handling invalid routes or unavailable breeds).

## Deployed site

- project is deployed with Netlify, click to see [dog-breeds](https://dog-breeds-dzoliana.netlify.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
