# ISU-GeoBot Demo

ISU-GeoBot is an intelligent web-based campus navigation assistant for Isabela State University (ISU) Echague Campus. It integrates interactive mapping with AI-powered chat assistance to help students, faculty, and visitors navigate the campus.

## Features

- **Interactive Campus Map**: Leaflet-based interactive map showing all campus buildings and facilities
- **AI Chat Assistant**: Powered by Groq AI (Llama 3.3 70B) for natural language queries
- **Pin Mode**: Click anywhere on the map to place pins and ask about locations
- **Faculty Directory**: Search for faculty offices and consultation hours
- **Real-time Location Highlighting**: Automatic map highlighting when locations are mentioned in chat
- **Enhanced RAG Pipeline**: Retrieval-Augmented Generation for context-aware responses

## Files

### Essential Files
- `ISUGeoBot_demo.html` - Main application with map and chat interface
- `isu_locations_database.js` - Campus locations and faculty directory database
- `landingpage.html` - Project landing page with information

### Supporting Files
- `ISUGeoBot_marker_editor.html` - Tool for editing map markers (optional)

## How to Use

1. Open `landingpage.html` to learn about the project
2. Click "Launch Assistant" or directly open `ISUGeoBot_demo.html`
3. The map shows ISU Echague campus with color-coded markers:
   - **Green (A)**: Academic buildings
   - **Red (O)**: Administrative offices
   - **Purple (R)**: Research & Clinic
   - **Orange (S)**: Sports/Recreation
   - **Green (H)**: Housing

4. Use the chat panel to:
   - Ask about building locations
   - Find faculty offices
   - Get directions around campus
   - Learn about campus services

5. Enable **Pin Mode** to click on the map and identify locations

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Mapping**: Leaflet.js
- **AI Model**: Groq API with Llama 3.3 70B Versatile
- **Tiles**: OpenStreetMap

## Setup

No installation required! Simply open the HTML files in a modern web browser.

### For Development
If you need to modify the location database:
1. Edit `isu_locations_database.js`
2. Update coordinates, facilities, or add new locations
3. Refresh the browser to see changes

## API Configuration

⚠️ **REQUIRED**: The application requires a Groq API key to function.

1. Get your free API key from [Groq Console](https://console.groq.com)
2. Open `ISUGeoBot_demo.html` in a text editor
3. Find line ~396: `const GROQ_API_KEY = 'YOUR_GROQ_API_KEY_HERE';`
4. Replace `'YOUR_GROQ_API_KEY_HERE'` with your actual API key
5. Save the file

**Note**: Never commit your actual API key to a public repository!

## Campus Locations Included

- Academic Buildings (11)
- Facilities (11)
- Services (8)
- Housing (2)
- Entrances (1)
- Administration (1)

## Research Context

This project is part of a research study exploring the integration of predictive machine learning models with Retrieval-Augmented Generation (RAG) for context-aware campus navigation and faculty availability prediction.

## License

Educational and Research Use

## Contact

Isabela State University - Echague Campus
