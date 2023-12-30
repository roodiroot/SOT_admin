import { ArrayField, Datagrid, TextField } from "react-admin";
import { Box, Typography } from "@mui/material";

const OptionCollar = () => {
  return (
    <Box
      sx={{
        p: "0 1rem 1rem",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>Параметры ошейника:</Typography>
      <ArrayField source='size'>
        <Datagrid bulkActionButtons={false}>
          <TextField source='sizeMm' label='Ширина' />
          <TextField
            source='fastex_standard_price'
            label='Фастекс стандартный (застежка пластик)'
          />
          <TextField
            source='fastex_reinforced_price'
            label='Фастекс усиленный 2-мя полукольцами'
          />
          <TextField source='slip_price' label='Слип' />
          <TextField source='martingale_price' label='Мартингейл' />
        </Datagrid>
      </ArrayField>
    </Box>
  );
};

export default OptionCollar;
