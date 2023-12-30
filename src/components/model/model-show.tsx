import {
  ChipField,
  Datagrid,
  DeleteWithConfirmButton,
  ReferenceManyField,
  Show,
  TextField,
  useShowController,
} from "react-admin";
import { Box, Typography } from "@mui/material";
import TitleChangePage from "../ui/title-change-page";

// export const ModelShow = () => (
//   <Show>
//     <SimpleShowLayout>
//       <TextField
//         sx={{ fontSize: "20px", fontWeight: "bold" }}
//         label='Название модели'
//         source='name'
//       />
//       <TextField label='Краткое описание' source='description' aria-multiline />
//       <TextField source='img' />
//       <ReferenceManyField label='Товары' reference='product' target='modelId'>

//         <CreateButton sx={{ mt: "1rem" }} variant='contained' />
//       </ReferenceManyField>
//     </SimpleShowLayout>
//   </Show>
// );

const ModelShow = () => {
  const {
    error, // error returned by dataProvider when it failed to fetch the record. Useful if you want to adapt the view instead of just showing a notification using the `onError` side effect.
    isLoading, // boolean that is true until the record is available for the first time
    record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useShowController();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }
  return (
    <Show
      component='div'
      title={`Модель ${record?.name}`}
      sx={{
        border: "none",
        boxShadow: "unset",
        mt: "1rem",
        borderRadius: "8px",
        bgcolor: (theme: any) => theme.palette.grey[100],
      }}
    >
      <Box sx={{ pl: "1rem" }}>
        <TitleChangePage title='Модель:' />
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
          <Box component='div' sx={{ display: "flex", gap: ".5rem" }}>
            <ChipField size='small' source='category.type.name' />
            <ChipField size='small' source='category.name' />
          </Box>
          <TextField
            component='h3'
            sx={{ fontSize: "2rem", fontWeight: "bold" }}
            label='Название товара'
            source='name'
          />
          <TextField source='description' />

          {/* <TextField source='parameter' label='Размеры' /> */}
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
          Товары этой модели:
        </Typography>
        <ReferenceManyField label='Товары' reference='product' target='modelId'>
          <Datagrid rowClick='show'>
            <TextField source='name' label='Название' />
            <TextField source='description' label='Описание' />
            <TextField source='parameter' label='Размер' />
            <TextField source='model.category.name' label='Категория' />
            <TextField source='model.category.type.name' label='Тип' />
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

export default ModelShow;
