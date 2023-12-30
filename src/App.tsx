import { Admin, Resource, combineDataProviders } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";

import dataTypeProviders from "./providers/dataTypeProviders";
import dataProductProviders from "./providers/dataProductProviders";
import types from "./components/type";
import categoryes from "./components/category";
import models from "./components/model";
import products from "./components/product";
import { authProvider } from "./providers/authProviders";
import { theme } from "./theme/theme";
import ruMessages from "./providers/ruMess";
import dataCategoryProviders from "./providers/dataCategoryProviders";
import dataModelProviders from "./providers/dataModelProviders";
import { Layout } from "./layout";
import Login from "./layout/login";

const dataProvider = combineDataProviders((resource) => {
  switch (resource) {
    case "type":
      return dataTypeProviders;
    case "model":
      return dataModelProviders;
    case "category":
      return dataCategoryProviders;
    case "size":
      return dataTypeProviders;
    case "size2":
      return dataTypeProviders;
    case "product":
      return dataProductProviders;
    default:
      throw new Error(`Unknown resource: ${resource}`);
  }
});

const i18nProvider = polyglotI18nProvider(
  () => {
    return ruMessages;
  },
  "ru",
  [{ locale: "ru", name: "Russian" }]
);

function App() {
  return (
    <Admin
      i18nProvider={i18nProvider}
      authProvider={authProvider}
      dataProvider={dataProvider}
      theme={theme}
      layout={Layout}
      loginPage={Login}
    >
      <Resource name='type' {...types} options={{ label: "Типы" }} />
      <Resource
        name='category'
        {...categoryes}
        options={{ label: "Категории" }}
      />
      <Resource name='model' {...models} options={{ label: "Модели" }} />
      <Resource name='product' {...products} options={{ label: "Товары" }} />
    </Admin>
  );
}

export default App;
