# Pierfrancesco Melucci - Personal Academic Website

A modern, responsive React website for showcasing academic achievements, work experience, and publications with automatic Google Scholar integration.

## Features

- 🎨 Modern, clean design with Tailwind CSS
- 📱 Fully responsive layout
- 🔄 Automatic publications loading from Google Scholar (framework ready)
- ⚡ Fast development with Vite
- 🎯 Smooth scrolling navigation
- 📋 Structured sections for work experience, academic background, and publications
- 🔗 Social media integration

## Sections

- **Hero/About**: Personal introduction and contact information
- **Work Experience**: Professional experience with detailed descriptions
- **Academic Experience**: Education, research areas, and achievements
- **Publications**: Research papers with Google Scholar integration
- **Footer**: Quick navigation and contact links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Edit the following files to update your personal information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, location, and bio
   - Replace social media links
   - Add your profile photo (replace the placeholder)

2. **Work Experience** (`src/components/WorkExperience.jsx`):
   - Update the `experiences` array with your work history
   - Modify job titles, companies, dates, and descriptions

3. **Academic Experience** (`src/components/AcademicExperience.jsx`):
   - Update the `education` array with your academic background
   - Modify the `achievements` array with your awards
   - Update the `researchAreas` array with your research interests

### Google Scholar Integration

The Publications section is designed to fetch data from Google Scholar automatically. To enable this:

1. **Option 1: Backend API** (Recommended)
   - Set up a backend service that scrapes Google Scholar
   - Use services like SerpAPI or ScrapingBee for reliable data extraction
   - Update the API endpoint in `src/components/Publications.jsx`

2. **Option 2: Static Data**
   - Replace the `samplePublications` array in `src/components/Publications.jsx`
   - Add your actual publications manually

3. **Option 3: Third-party Services**
   - Use academic APIs like CrossRef or ORCID
   - Integrate with academic management systems

### Styling

The website uses Tailwind CSS. You can:

- Modify colors in `tailwind.config.js`
- Update fonts and spacing
- Add custom CSS in `src/index.css`

### Contact Information

Update contact information in:
- `src/components/Hero.jsx` (main contact section)
- `src/components/Footer.jsx` (footer links)

## Google Scholar Integration Details

### Why No Direct API?

Google Scholar doesn't provide an official API, which means you need alternative approaches:

1. **Web Scraping**: Use tools like Puppeteer, Selenium, or services like SerpAPI
2. **Proxy Services**: ScrapingBee, Bright Data, or similar services
3. **Academic APIs**: ORCID, CrossRef, or institutional repositories

### Implementation Example

Here's how you could implement real Google Scholar integration:

```javascript
// Example using SerpAPI (requires API key)
const fetchPublications = async () => {
  const response = await fetch(`https://serpapi.com/search.json?engine=google_scholar_author&author_id=YOUR_AUTHOR_ID&api_key=YOUR_API_KEY`);
  const data = await response.json();
  return data.articles;
}
```

### Sample Backend Endpoint

```javascript
// Express.js backend example
app.get('/api/scholar/:authorId', async (req, res) => {
  try {
    const publications = await scrapeGoogleScholar(req.params.authorId);
    res.json({ publications });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch publications' });
  }
});
```

## Deployment

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Update base URL in `vite.config.js` if needed

### Netlify/Vercel

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Custom Hosting

Upload the contents of the `dist` folder to your web server.

## Technologies Used

- **React 18**: UI framework
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Axios**: HTTP client for API requests

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or issues:
1. Check the documentation above
2. Review the code comments
3. Create an issue if you find bugs
4. Contribute improvements via pull requests

---

**Note**: Remember to update all placeholder information with your actual details before deploying the website! 