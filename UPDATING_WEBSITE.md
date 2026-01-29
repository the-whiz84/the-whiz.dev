# Updating the Website Content

This guide explains how to update the data and assets for your portfolio website.

## 1. Updating Data (Experience, Education, Projects)

All the content for the website is stored in a single file: `src/data/index.ts`.
You can edit this file to add new job experiences, certifications, projects, or update your profile information.

### Where to edit:
File: `src/data/index.ts`

### How to add a new Work Experience:
1.  Open `src/data/index.ts`.
2.  Find the `experience` array.
3.  Add a new object to the **beginning** of the array (to show it first) or end.
    ```typescript
    {
      company: "New Company Name",
      logo: "/assets/img/logos/new-logo.png", // See Section 2 for images
      role: "Your Role",
      period: "Month Year - Present",
      accomplishments: [
        "Accomplishment 1...",
        "Accomplishment 2...",
      ],
    },
    ```

### How to add a new Certification:
1.  Find the `certifications` array in `src/data/index.ts`.
2.  Add a new entry:
    ```typescript
    {
      title: "Certification Name",
      image: "/assets/img/logos/cert-logo.png",
      description: "Description of the certification...",
      link: "https://link-to-certificate.com",
    },
    ```

## 2. Adding Images

Images should be placed in the `public/assets/img/` directory.

### Steps:
1.  **Copy your image file** to `/public/assets/img/` (or a subdirectory like `/public/assets/img/logos/`).
2.  **Reference the image** in `src/data/index.ts` using the path starting with `/assets/img/...`.

**Example:**
If you place a file named `my-new-cert.png` in `public/assets/img/logos/`:
In `src/data/index.ts`, set the image property to: `"/assets/img/logos/my-new-cert.png"`.

## 3. Applying Changes

After making changes to the data or adding images, you may need to redeploy your website or restart your local development server to see the changes.

- **Local Development**: The changes should appear immediately if the server is running.
- **Production**: Push your changes to GitHub to trigger a new deployment (if connected to Vercel/Netlify).

## 4. Key Files Overview
- **`src/data/index.ts`**: The main database for your text content.
- **`public/assets/img/`**: The folder where all images are stored.
- **`src/components/`**: Contains the code for the visual layout (only edit if changing the design).
