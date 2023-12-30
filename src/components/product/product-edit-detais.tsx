import {
  ArrayInput,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleFormIterator,
  TextInput,
} from "react-admin";
import { Grid } from "@mui/material";

export const ProductEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={12}>
      <TextInput source='name' fullWidth validate={req} />
    </Grid>
    <Grid item xs={12} sm={4}>
      <ReferenceInput source='modelId' reference='model'>
        <SelectInput optionText='name' validate={req} fullWidth />
      </ReferenceInput>
    </Grid>
    <Grid item>
      <ArrayInput source='size' label='Цены'>
        <SimpleFormIterator inline>
          <TextInput source='sizeMm' label='Ширина' helperText={false} />
          <NumberInput
            source='fastex_standard_price'
            label='Фастекс стандартный (застежка пластик)'
            helperText={false}
          />
          <NumberInput
            source='fastex_reinforced_price'
            label='Фастекс усиленный 2-мя полукольцами'
            helperText={false}
          />
          <NumberInput source='slip_price' label='Слип' helperText={false} />
          <NumberInput
            source='martingale_price'
            label='Мартингейл'
            helperText={false}
          />
        </SimpleFormIterator>
      </ArrayInput>
    </Grid>
  </Grid>
);

const req = [required()];
