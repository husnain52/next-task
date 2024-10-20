import { Box, Container, CssBaseline } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode;
}

const MainLayout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Header />
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
        maxWidth="md"
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
