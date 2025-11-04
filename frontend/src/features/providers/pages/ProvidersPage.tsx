import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import ProviderTable from "../components/ProviderTable";
import ProviderForm from "../components/ProviderForm";

interface Provider {
  id: number;
  name: string;
  razonSocial: string;
  direccion: string;
}

const ProvidersPage: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [name, setName] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [direccion, setDireccion] = useState("");
  const [alert, setAlert] = useState<{ open: boolean; message: string; type: "success" | "error" }>({
    open: false,
    message: "",
    type: "success",
  });

  const fetchProviders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/providers");

      const dataArray = Array.isArray(response.data)
        ? response.data
        : response.data.content ?? [];

      const normalized = dataArray.map((item: any, index: number) => ({
        id: item.id ?? index, 
        name: item.name ?? "",
        razonSocial: item.razonSocial ?? item.razon_social ?? "",
        direccion: item.direccion ?? "",
      }));

      setProviders(normalized);
    } catch (error: any) {
      setAlert({
        open: true,
        message: "No se pudo obtener la lista de proveedores",
        type: "error",
      });
    }
  };


const addProvider = async (name: string, razonSocial: string, direccion: string) => {
  if (!name || !razonSocial || !direccion) {
    setAlert({ open: true, message: "Todos los campos son obligatorios", type: "error" });
    return;
  }

  try {
    await axios.post("http://localhost:8080/api/providers", {
      name,
      razonSocial,
      direccion,
    });
    setAlert({ open: true, message: "Proveedor agregado exitosamente", type: "success" });
    fetchProviders();
  } catch {
    setAlert({ open: true, message: "Error al agregar proveedor", type: "error" });
  }
};




  const deleteProvider = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/providers/${id}`);
      setAlert({
        open: true,
        message: "Proveedor eliminado exitosamente",
        type: "success",
      });
      fetchProviders();
    } catch (error) {
      setAlert({
        open: true,
        message: "Error al eliminar proveedor",
        type: "error",
      });
    }
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Nombre", flex: 1 },
    { field: "razonSocial", headerName: "Razón Social", flex: 1 },
    { field: "direccion", headerName: "Dirección", flex: 1 },
    {
      field: "actions",
      headerName: "Acciones",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => deleteProvider(params.row.id)}
        >
          Eliminar
        </Button>
      ),
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
          Proveedores
        </Typography>

          <ProviderForm onAdd={addProvider} />
          <ProviderTable providers={providers} onDelete={deleteProvider} />
      </Paper>

      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={() => setAlert({ ...alert, open: false })}
      >
        <Alert severity={alert.type} onClose={() => setAlert({ ...alert, open: false })}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProvidersPage;
