import {
  fetchUtils,
  DataProvider,
  CreateParams,
  UpdateParams,
} from "react-admin";
import { stringify } from "query-string";

const apiUrl = import.meta.env.VITE_REST_URL;
const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", token);
  return fetchUtils.fetchJson(url, options);
};

type TypeParams = {
  id: number;
  name: string;
  modelId: number;
  description?: string | undefined;
  size: string;
  size_2: string;
  size_3: string;
  img?:
    | {
        rawFile: File;
      }[]
    | undefined;
};

const createPostFormData = (
  params: CreateParams<TypeParams> | UpdateParams<TypeParams>
) => {
  const formData = new FormData();
  params.data?.size &&
    formData.append("size", JSON.stringify(params?.data?.size));
  params.data?.size_2 &&
    formData.append("size_2", JSON.stringify(params?.data?.size_2));
  params.data?.size_3 &&
    formData.append("size_3", JSON.stringify(params?.data?.size_3));
  if (params?.data?.img?.length)
    for (let i = 0; i < params?.data?.img?.length; i++) {
      if (params?.data?.img[i]?.rawFile) {
        formData.append("img", params?.data?.img[i].rawFile);
      }
    }

  params.data?.name && formData.append("name", params.data.name);
  params.data?.modelId && formData.append("modelId", `${params.data.modelId}`);
  params.data?.description &&
    formData.append("description", params.data?.description);
  return formData;
};

const dataProductProviders: DataProvider = {
  getList: async (resource, params) => {
    // console.log("getList");
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([perPage, (page - 1) * perPage]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { json } = await httpClient(url);

    return {
      data: json.data || [],
      total: json.count || 10,
    };
  },

  getOne: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url);
    return { data: json };
  },

  getMany: async (resource, params) => {
    // console.log("getMany");
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return { data: json?.data || [], total: json?.count || 10 };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([perPage, (page - 1) * perPage]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return {
      data: json?.data || [],
      total: json?.count || 10,
    };
  },

  create: async (resource, params) => {
    // console.log(params);
    const formData = createPostFormData(params);
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: formData,
    });
    return { data: json };
  },

  update: async (resource, params) => {
    console.log(params);
    const formData = createPostFormData(params);
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: formData,
    });
    return { data: json };
  },

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  delete: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: "DELETE",
    });
    return { data: json };
  },

  deleteMany: async (resource, params: any) => {
    const url = `${apiUrl}/${resource}`;
    const { json } = await httpClient(url, {
      method: "DELETE",
      body: JSON.stringify(params.ids),
    });
    // console.log(json);
    return { data: json };
  },
};

export default dataProductProviders;
