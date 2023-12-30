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
    source='typeId'
    reference='type'
    recordRepresentation='name'
    alwaysOn
  >
    <SelectInput optionText='name' label='Типы' />
  </ReferenceInput>,
];

const CategoryList = () => (
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
    <CategoryGrid />
  </List>
);

const CategoryGrid = () => {
  const { data, isLoading } = useListContext();
  if (isLoading) {
    return null;
  }
  return (
    <Grid container spacing={2} sx={{ mt: 0 }}>
      {data.map((record) => (
        <RecordContextProvider key={record.id} value={record}>
          <CardCastom resource='category' {...record} />
        </RecordContextProvider>
      ))}
    </Grid>
  );
};

export default CategoryList;
