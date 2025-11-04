import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";

interface Provider {
  id: number;
  name: string;
  razonSocial: string;
  direccion: string;
}

interface ProviderTableProps {
  providers: Provider[];
  onDelete: (id: number) => void;
}

const ProviderTable: React.FC<ProviderTableProps> = ({ providers, onDelete }) => {
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
          onClick={() => onDelete(params.row.id)}
        >
          Eliminar
        </Button>
      ),
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={providers}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50]}
      />
    </div>
  );
};

export default ProviderTable;
