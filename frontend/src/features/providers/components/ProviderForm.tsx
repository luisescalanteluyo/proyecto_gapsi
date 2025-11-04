import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface ProviderFormProps {
  onAdd: (name: string, razonSocial: string, direccion: string) => void;
}

const ProviderForm: React.FC<ProviderFormProps> = React.memo(({ onAdd }) => {
  const [name, setName] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleAdd = () => {
    if (!name || !razonSocial || !direccion) return;
    onAdd(name, razonSocial, direccion);
    setName("");
    setRazonSocial("");
    setDireccion("");
  };

  return (
    <Box display="flex" gap={2} mb={2} alignItems="center">
      <TextField
        label="Nombre"
        variant="outlined"
        size="small"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Razón Social"
        variant="outlined"
        size="small"
        value={razonSocial}
        onChange={(e) => setRazonSocial(e.target.value)}
        fullWidth
      />
      <TextField
        label="Dirección"
        variant="outlined"
        size="small"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        sx={{ height: "40px", px: 3, flexShrink: 0 }}
      >
        Agregar
      </Button>
    </Box>
  );
});

export default ProviderForm;
