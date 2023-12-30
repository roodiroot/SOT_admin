import { Grid } from "@mui/material";
import { ReferenceInput, SelectInput, TextInput, required } from "react-admin";

const BasicTub = () => {
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={12} sm={8}>
        <TextInput
          label='Придумайте название'
          source='name'
          validate={req}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ReferenceInput source='modelId' reference='model'>
          <SelectInput
            label='Модель товара'
            optionText='name'
            fullWidth
            validate={req}
          />
        </ReferenceInput>
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextInput
          source='description'
          multiline={true}
          label='Описание товара'
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default BasicTub;

const req = [required()];
