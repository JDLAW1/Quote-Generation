import React, { useState, useEffect, useRef } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./styles.css";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

interface frase {
  frase: string;
  autor: string;
}

interface QuoteProps {
  frases: frase[];
}

const Quote: React.FC<QuoteProps> = ({ frases }) => {
  const [fraseRandom, setFraseRandom] = useState(
    frases[Math.floor(Math.random() * frases.length)]
  );
  const intervalRef = useRef<NodeJs.Timeout | null>(null);

  useEffect(() => {
    iniciarTime();

    return () => {
      detenerTime();
    };
  }, [frases]);

  const iniciarTime = () => {
    intervalRef.current = setInterval(() => {
      setFraseRandom(frases[Math.floor(Math.random() * frases.length)]);
    }, 5000);
  };

  const detenerTime = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const cambiarFrase = () => {
    detenerTime();
    setFraseRandom(frases[Math.floor(Math.random() * frases.length)]);
    iniciarTime();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Quote Generator
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              style={{ fontFamily: "mea-culpa-regular" }}
            >
              {fraseRandom.frase}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontFamily: "mea-culpa-regular" }}
            >
              - {fraseRandom.autor}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              startIcon={<RefreshIcon />}
              onClick={cambiarFrase}
            >
              Refresh
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Quote;
