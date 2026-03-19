# Engineering Portfolio Website

This repository contains a static personal portfolio website for an Industrial Automation / Digital Twin Engineer. It is built with plain HTML, CSS, and vanilla JavaScript so it can be deployed directly to GitHub Pages without any build step.

## File Structure

```text
/
|-- index.html
|-- styles.css
|-- script.js
|-- README.md
`-- assets/
    `-- images/
```

## Deploy with GitHub Pages

1. Create a GitHub repository named `username.github.io`.
2. Upload the files from this project to the root of that repository.
3. Commit and push the files to the default branch, usually `main`.
4. Open the repository on GitHub and go to `Settings` > `Pages`.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose the default branch and the `/ (root)` folder, then save.
7. Visit `https://username.github.io` after GitHub Pages finishes publishing the site.

## Update the Website

1. Open `index.html` to change text, project descriptions, links, and section content.
2. Open `styles.css` to update colors, layout, spacing, and responsive behavior.
3. Open `script.js` if you want to adjust the mobile navigation or active section behavior.
4. Commit and push your changes to GitHub. GitHub Pages will redeploy the site automatically.

## Customize Project Sections

1. In `index.html`, locate the `<section id="projects">` block.
2. Replace the example project titles, descriptions, tags, and bullet points with your real work.
3. Duplicate or remove project cards as needed by copying or deleting an `<article class="card project-card">` block.
4. Update the Articles, About, and Contact sections with your actual content and links.

## Personalization Checklist

- Replace `Your Name` in `index.html` with your real name.
- Replace the email, LinkedIn, and GitHub placeholders in the Contact section.
- Update the hero summary so it matches your actual experience and technical focus.
- Add screenshots or diagrams to `assets/images/` if you want to expand the site later.

## Notes

- The website is fully static and does not require Node.js, npm, or any framework.
- The layout is responsive and designed for both desktop and mobile screens.
- You can publish it as-is or customize the sections before deployment.
