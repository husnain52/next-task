import { Box, Container, Grid, Typography, Link } from "@mui/material";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: "primary.main",
        color: "white",
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a dynamic team dedicated to creating innovative solutions.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            {["Home", "About", "Careers", "Privacy Policy"].map((item) => (
              <>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  component={NextLink}
                >
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    {item}
                  </Typography>
                </Link>
                <br />
              </>
            ))}
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            {["Facebook", "Twitter", "Instagram"].map((item) => (
              <>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  component={NextLink}
                >
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    {item}
                  </Typography>
                </Link>
                <br />
              </>
            ))}
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} FluentBoard. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
