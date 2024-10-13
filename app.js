const express = require("express"); 
const app = express(); 
const path = require('path'); 

// Set view engine to ejs 
app.set('view engine', 'ejs'); 

// Serve static files like CSS, images, etc. 
app.use(express.static(path.join(__dirname, 'public'))); 

// Serve home page 
app.get('/', (req, res) => {
    res.render('index'); 
}); 

// Serve the about page
app.get('/about', (req, res) => {
    res.render('about');
});

// Serve the contact-me page
app.get('/contact-me', (req, res) => {
    res.render('contact-me');
});

// Serve the 404 page for any unknown route
app.use((req, res) => {
    res.status(404).render('404');
});

// Start the server 
const PORT = 8080; 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
}); 
