import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Nav from './nav';

import * as Pages from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Pages.About />} />
        </Route>
        <Route path="/guide" element={<Nav />}>
          <Route index element={<Pages.Guide />} />
        </Route>
        <Route path="/rules" element={<Nav />}>
          <Route index element={<Pages.Rules />} />
        </Route>
        <Route path="/plugins" element={<Nav />}>
          <Route index element={<Pages.Plugins />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
