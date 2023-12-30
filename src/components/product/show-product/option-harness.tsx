import { ArrayField, Datagrid, TextField } from "react-admin";
import { Box, Typography } from "@mui/material";

const OptionHarness = () => {
  return (
    <Box
      sx={{
        p: "0 1rem 1rem",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>Параметры шлейки:</Typography>
      <ArrayField source='size_3'>
        <Datagrid bulkActionButtons={false}>
          <TextField source='size' label='Размер' />
          <TextField source='description_size' label='Описание размера' />
          <TextField source='price' label='Цена' />
        </Datagrid>
      </ArrayField>
    </Box>
  );
};

export default OptionHarness;
