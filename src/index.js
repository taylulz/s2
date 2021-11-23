import React from 'react';
import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import App from './App';

import Needs from './routes/needs';
import Feelings from './routes/feelings';
import Feeling from './routes/feeling';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="needs" element={<Needs />} />
        <Route path="feelings" element={<Feelings />}>
          {/* the index route has index prop because it shares the route path of parent */}
          <Route 
            index
            element={
              <main style={{ padding: "1rem"  }}>
                <p>Select an feeling</p>
              </main>
            }
          />
          <Route path=":feelingId" element={<Feeling />} />
        </Route>
        <Route 
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);