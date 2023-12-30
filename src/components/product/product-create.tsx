import { Create, TabbedForm } from "react-admin";

import BasicTub from "./create-inputs/basic-tub";
import ImagesTub from "./create-inputs/images-tub";
import CollarPricesTub from "./create-inputs/collar-prices-tub";
import HarnessPricesTub from "./create-inputs/harness-prices-tub";
import LeashPricesTub from "./create-inputs/leash-prices-tub";

const ProductCreate = () => {
  return (
    <Create
      title='Создаём товар'
      component={"div"}
      sx={{
        mt: "1rem",
        borderRadius: "8px",
        bgcolor: (theme: any) => theme.palette.grey[100],
      }}
    >
      <TabbedForm defaultValues={{ sales: 0 }}>
        <TabbedForm.Tab label='Основные' sx={{ maxWidth: "40em" }}>
          <BasicTub />
        </TabbedForm.Tab>
        <TabbedForm.Tab
          label='Изображения'
          path='imges'
          sx={{ maxWidth: "40em" }}
        >
          <ImagesTub />
        </TabbedForm.Tab>
        <TabbedForm.Tab label='Ошейник' sx={{ maxWidth: "70em" }}>
          <CollarPricesTub />
        </TabbedForm.Tab>
        <TabbedForm.Tab label='Поводок' sx={{ maxWidth: "40em" }}>
          <LeashPricesTub />
        </TabbedForm.Tab>
        <TabbedForm.Tab label='Шлейка' sx={{ maxWidth: "50em" }}>
          <HarnessPricesTub />
        </TabbedForm.Tab>
      </TabbedForm>
    </Create>
  );
};

export default ProductCreate;
