/**
 * External dependencies
 */
 import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

/**
 * Internal dependencies
 */
import Layout from "./components/Layout";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<div>Home</div>}/>
                        <Route path="/about" element={<div>About</div>} />
                        <Route path="/blog" element={<div>Blog</div>} />
                        <Route path="/contact" element={<div>Contact</div>} />
                    </Routes>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
