import {
  SavedQueriesList,
  FilterLiveSearch,
  FilterList,
  FilterListItem,
} from "react-admin";
import { Card, CardContent } from "@mui/material";
import CategoryIcon from "@mui/icons-material/LocalOffer";

export const PostFilterSidebar = () => (
  <Card sx={{ order: -1, mr: 2, mt: 6, width: 250 }}>
    <CardContent>
      <SavedQueriesList />
      <FilterLiveSearch />
      {/* <FilterList label="Subscribed to newsletter" icon={<MailIcon />}>
        <FilterListItem label="Yes" value={{ has_newsletter: true }} />
        <FilterListItem label="No" value={{ has_newsletter: false }} />
      </FilterList> */}
      <FilterList label='Типы' icon={<CategoryIcon />}>
        <FilterListItem label='Биология' value={{ type_id: 28 }} />
        <FilterListItem label='Математика' value={{ type_id: 29 }} />
      </FilterList>
      <FilterList label='Категории' icon={<CategoryIcon />}>
        <FilterListItem
          label='Математический анализ'
          value={{ category_id: 2 }}
        />
        <FilterListItem
          label='Дифференциальные уравнения'
          value={{ category_id: 3 }}
        />
        <FilterListItem
          label='Математическая физика'
          value={{ category_id: 4 }}
        />
      </FilterList>
      <FilterList label='Модели' icon={<CategoryIcon />}>
        <FilterListItem label='ПЕРЕЛЬМАН' value={{ model_id: 1 }} />
        <FilterListItem label='КОЛМОГОРОВ' value={{ model_id: 2 }} />
        <FilterListItem label='КОВАЛЕВСКАЯ' value={{ model_id: 3 }} />
        <FilterListItem label='ЛЕЙБНИЦ' value={{ model_id: 4 }} />
      </FilterList>
    </CardContent>
  </Card>
);
