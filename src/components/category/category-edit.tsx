import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  ReferenceInput,
  SelectInput,
  useShowController,
} from "react-admin";
import { Grid } from "@mui/material";
import TitleChangePage from "../ui/title-change-page";

const CategoryEdit = () => {
  const { error, isLoading, record } = useShowController();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }
  function formatLogo(value: any) {
    if (!value || typeof value === "string") {
      return { url: value };
    } else {
      return value;
    }
  }
  return (
    <Edit
      component='div'
      title={`Редактируем ${record?.name}`}
      sx={{
        border: "none",
        boxShadow: "unset",
        mt: "1rem",
        borderRadius: "8px",
        bgcolor: (theme: any) => theme.palette.grey[100],
      }}
    >
      <SimpleForm sx={{ maxWidth: "40em" }}>
        <TitleChangePage title='Изменение категории' />
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={4}>
            <TextInput label='Название' source='name' disabled />
          </Grid>
          <Grid item xs={12} sm={8}>
            <ReferenceInput source='typeId' reference='type' disabled>
              <SelectInput label='Тип' optionText='name' fullWidth disabled />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextInput
              source='description'
              multiline
              label='Описание категории'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <ImageInput
              format={formatLogo}
              source='img'
              accept='image/*'
              label='Загрузите одно изображение'
            >
              <ImageField source='src' title='title' />
            </ImageInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default CategoryEdit;
