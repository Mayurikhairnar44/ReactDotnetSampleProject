//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'

//createRoot(document.getElementById('root')).render(
//  <StrictMode>
//    <App />
//  </StrictMode>,
//)

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';   // Import Header component
import Footer from './Footer';   // Import Footer component
import './styles.css'

const App = () => {
    return (
        <div>
            <Header />  {/* Render Header */}
            <main>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <h2>Home Page Content</h2>
                    <p>This is the content of the homepage.</p>
                </div>
            </main>
            <Footer />  {/* Render Footer */}
        </div>
    );
};

// Rendering the App component inside the root div
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

