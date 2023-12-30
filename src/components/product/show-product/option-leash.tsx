import { ArrayField, Datagrid, TextField } from "react-admin";
import { Box, Typography } from "@mui/material";

const OptionLeash = () => {
  return (
    <Box
      sx={{
        p: "0 1rem 1rem",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>Параметры поводка:</Typography>
      <ArrayField source='size_2'>
        <Datagrid bulkActionButtons={false}>
          <TextField source='length' label='Длина' />
          <TextField source='price' label='Цена' />
        </Datagrid>
      </ArrayField>
    </Box>
  );
};

export default OptionLeash;
