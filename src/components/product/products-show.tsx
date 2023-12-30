import { Show, useShowController } from "react-admin";
import Box from "@mui/material/Box";
import Slider from "./show-product/slider";
import OptionCollar from "./show-product/option-collar";
import MainInfo from "./show-product/main-info";
import OptionLeash from "./show-product/option-leash";
import OptionHarness from "./show-product/option-harness";
import TitleChangePage from "../ui/title-change-page";

const ProductsShow = () => {
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
      title={record?.name}
      sx={{
        border: "none",
        boxShadow: "unset",
        mt: "1rem",
        borderRadius: "8px",
        bgcolor: (theme: any) => theme.palette.grey[100],
      }}
    >
      <Box sx={{ pl: "1rem" }}>
        <TitleChangePage title='Товар:' />
      </Box>
      <Box
        component='div'
        sx={{ p: "1rem", display: "flex", alignItems: "start", gap: "1rem" }}
      >
        {record.img.length && <Slider imgs={record.img} />}
        <MainInfo />
      </Box>
      {record?.size?.length ? <OptionCollar /> : null}
      {record?.size_2?.length ? <OptionLeash /> : null}
      {record?.size_3?.length ? <OptionHarness /> : null}
    </Show>
  );
};

export default ProductsShow;
