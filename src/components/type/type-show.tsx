import {
  Datagrid,
  DeleteWithConfirmButton,
  ReferenceManyField,
  Show,
  TextField,
  useShowController,
} from "react-admin";
import { Box, Typography } from "@mui/material";
import TitleChangePage from "../ui/title-change-page";
// or
const TypeShow = () => {
  const { error, isLoading, record } = useShowController();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }
  return (
    <Show
      component='div'
      title={`Тип ${record?.name}`}
      sx={{
        border: "none",
        boxShadow: "unset",
        mt: "1rem",
        borderRadius: "8px",
        bgcolor: (theme: any) => theme.palette.grey[100],
      }}
    >
      <Box sx={{ pl: "1rem" }}>
        <TitleChangePage title='Тип:' />
      </Box>
      <Box
        component='div'
        sx={{
          p: "0 1rem 1rem",
          display: "flex",
          alignItems: "start",
          gap: "1rem",
        }}
      >
        {record.img && (
          <Box
            content='img'
            src={`${import.meta.env.VITE_APP_IMG}/${record.img}`}
            title='green iguana'
            component={"img"}
            sx={{
              borderRadius: "4px",
              maxWidth: 150,
              objectFit: "cover",
              aspectRatio: "2/3",
              cursor: "pointer",
            }}
          />
        )}
        <Box sx={{ maxWidth: "30rem" }}>
          <TextField
            component='h3'
            sx={{ fontSize: "2rem", fontWeight: "bold" }}
            label='Название типа'
            source='name'
          />
          <TextField source='description' label='Описание' />
        </Box>
      </Box>
      <Box
        sx={{
          p: "0 1rem 1rem",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", pl: "1rem", mb: ".5rem" }}
          variant='body2'
        >
          Категории этого типа:
        </Typography>
        <ReferenceManyField
          label='Категории'
          reference='category'
          target='typeId'
        >
          <Datagrid rowClick='show'>
            <TextField source='name' label='Название' />
            <TextField source='description' label='Описание' />
            <Box sx={{ display: "flex" }}>
              <DeleteWithConfirmButton
                variant='contained'
                redirect={false}
                to={{ state: { skipFormReset: true } }}
                sx={{ ml: "auto" }}
              />
            </Box>
          </Datagrid>
        </ReferenceManyField>
      </Box>
      <Box
        sx={{
          p: "0 1rem 1rem",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", pl: "1rem", mb: ".5rem" }}
          variant='body2'
        >
          Модели этого типа:
        </Typography>
        <ReferenceManyField label='Модели' reference='model' target='typeId'>
          <Datagrid rowClick='show'>
            <TextField source='name' label='Название' />
            <TextField source='description' label='Описание' />
            <TextField source='category.type.name' label='Тип' />
            <Box sx={{ display: "flex" }}>
              <DeleteWithConfirmButton
                variant='contained'
                redirect={false}
                to={{ state: { skipFormReset: true } }}
                sx={{ ml: "auto" }}
              />
            </Box>
          </Datagrid>
        </ReferenceManyField>
      </Box>
      <Box
        sx={{
          p: "0 1rem 1rem",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", pl: "1rem", mb: ".5rem" }}
          variant='body2'
        >
          Товары этого типа:
        </Typography>
        <ReferenceManyField label='Товары' reference='product' target='typeId'>
          <Datagrid rowClick='show'>
            <TextField source='name' label='Название' />
            <TextField source='description' label='Описание' />
            <TextField source='model.category.type.name' label='Тип' />
            <TextField source='model.category.name' label='Категория' />
            <TextField source='model.name' label='Модель' />
            <Box sx={{ display: "flex" }}>
              <DeleteWithConfirmButton
                variant='contained'
                redirect={false}
                to={{ state: { skipFormReset: true } }}
                sx={{ ml: "auto" }}
              />
            </Box>
          </Datagrid>
        </ReferenceManyField>
      </Box>
    </Show>
  );
};

export default TypeShow;
