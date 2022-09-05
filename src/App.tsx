import React from "react";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { theme } from "./theme";
import { Store } from "./redux/";
import { Navbar } from "./components";
import { configureAxios } from "./api/axiosConfig";
import { routes as appRoutes } from "./navigation/routes";

configureAxios();
const App: React.FC = () => {
  return (
    <>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box>
            <Router>
              <Navbar />
              <Routes>
                {appRoutes.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </Router>
          </Box>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
