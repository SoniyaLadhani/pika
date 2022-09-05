import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

import { routes } from "../navigation/routes";

export const Navbar: FC = (): ReactElement => {
  return (
    <AppBar position="sticky">
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "secondary.main",
          px: "10rem",
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            color="primary.text"
            sx={{
              mr: 2,
            }}
          >
            Pika App
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Box>
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="primary.text"
                  underline="none"
                  variant="button"
                  sx={{ fontSize: "large", marginLeft: "2rem" }}
                >
                  {page.title}
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
