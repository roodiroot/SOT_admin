import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { Box } from "@mui/material";

const filters = [
  <ReferenceInput source='modelId' reference='model' alwaysOn>
    <SelectInput optionText='name' label='Модели' />
  </ReferenceInput>,
];

const ProductList = () => (
  <List
    filters={filters}
    component='div'
    sx={{
      mt: "1rem",
      borderRadius: "8px",
      p: " 0 1rem",
      bgcolor: (theme: any) => theme.palette.grey[100],
    }}
  >
    <Datagrid rowClick='show'>
      <TextField source='id' label='id' />
      <TextField source='name' label='Название' />
      <Box
        // label='Описание'
        overflow='hidden'
        textOverflow='ellipsis'
        component='div'
        whiteSpace='nowrap'
        maxWidth={{
          xl: "700px",
          lg: "450px",
          md: "300px",
          sm: "200px",
          default: "200px",
        }}
      >
        &nbsp;-&nbsp;
        <TextField source='description' label='Описание' />
      </Box>
      <TextField source='model.category.name' label='Категория' />
      <TextField source='model.category.type.name' label='Тип' />
      <TextField source='parameter' label='Размер' />
      <TextField source='model.name' label='Модель' />
      <EditButton />
    </Datagrid>
  </List>
);

export default ProductList;
