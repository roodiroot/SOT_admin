import {
  List,
  useListContext,
  RecordContextProvider,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { Grid } from "@mui/material";
import CardCastom from "../ui/card-castom";

const filters = [
  <ReferenceInput
    source='categoryId'
    reference='category'
    recordRepresentation='name'
    alwaysOn
  >
    <SelectInput optionText='name' label='Категории' />
  </ReferenceInput>,
];

const ModelList = () => {
  return (
    <List
      filters={filters}
      sort={{ field: "name", order: "ASC" }}
      perPage={20}
      pagination={false}
      component='div'
      sx={{
        mt: "1rem",
        borderRadius: "8px",
        p: " 0 1rem 1rem",
        bgcolor: (theme: any) => theme.palette.grey[100],
      }}
    >
      <ModelGrid />
    </List>
  );
};

const ModelGrid = () => {
  const { data, isLoading } = useListContext();

  if (isLoading) {
    return null;
  }
  return (
    <Grid container spacing={2} sx={{ mt: 0 }}>
      {data.map((record) => (
        <RecordContextProvider key={record.id} value={record}>
          <CardCastom resource='model' {...record} />
        </RecordContextProvider>
      ))}
    </Grid>
  );
};

export default ModelList;
