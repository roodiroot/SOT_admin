import {
  Create,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  SelectInput,
  ImageInput,
  ImageField,
} from "react-admin";
import { Grid } from "@mui/material";
import TitleChangePage from "../ui/title-change-page";

const CategoryCreate = () => {
  function formatLogo(value: any) {
    if (!value || typeof value === "string") {
      return { url: value };
    } else {
      return value;
    }
  }
  return (
    <Create
      component='div'
      title='Создаем категорию'
      sx={{
        border: "none",
        boxShadow: "unset",
        mt: "1rem",
        borderRadius: "8px",
        bgcolor: (theme: any) => theme.palette.grey[100],
      }}
      redirect='show'
    >
      <SimpleForm sx={{ maxWidth: "40em" }}>
        <TitleChangePage title='Создание категории' />
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={4}>
            <TextInput label='Название' source='name' validate={req} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <ReferenceInput source='typeId' reference='type'>
              <SelectInput
                validate={req}
                label='Тип'
                optionText='name'
                fullWidth
              />
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
    </Create>
  );
};

const req = [required()];

export default CategoryCreate;
