import { List, useListContext, RecordContextProvider } from "react-admin";
import { Grid } from "@mui/material";
import CardCastom from "../ui/card-castom";

const TypeList = () => {
  return (
    <List
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
      <TypeGrid />
    </List>
  );
};

const TypeGrid = () => {
  const { data, isLoading } = useListContext();

  if (isLoading) {
    return null;
  }
  return (
    <Grid container spacing={2} sx={{ mt: 0 }}>
      {data.map((record) => (
        <RecordContextProvider key={record.id} value={record}>
          <CardCastom resource='type' {...record} />
        </RecordContextProvider>
      ))}
    </Grid>
  );
};

export default TypeList;
