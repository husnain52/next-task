import { Button, Card, TextField } from "@mui/material";

export default function Home() {
  return (
    <>
      <Card sx={{ m: 2, p: 2, display: "flex" }} title="test">
        <Button variant="contained" color="error" sx={{ flexGrow: 1 }}>
          Test
        </Button>
        <TextField
          sx={{ flexGrow: 2 }}
          size="small"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </Card>
    </>
  );
}
