import { AuthProvider, HttpError, fetchUtils } from "react-admin";
import { jwtDecode } from "jwt-decode";

const apiUrl = import.meta.env.VITE_REST_URL;
// const httpClient = fetchUtils.fetchJson;

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", token);
  return fetchUtils.fetchJson(url, options);
};

interface UserResult {
  id: string;
  email: string;
  roles: string[];
  avatar: string;
  fullName: string;
}

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    // console.log("login");
    const { json } = await httpClient(`${apiUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      credentials: "include",
    });
    if (json?.accessToken) {
      const user: UserResult = jwtDecode(json.accessToken);
      if (!user.roles.includes("ADMIN")) {
        await httpClient(`${apiUrl}/auth/logout`, {
          credentials: "include",
        });
        throw new HttpError("Forbidden", 403, {
          message: "Invalid username or password",
        });
      }
      localStorage.setItem("token", json?.accessToken);
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          avatar: `${import.meta.env.VITE_APP_IMG}/${user.avatar}`,
        })
      );
      localStorage.setItem(
        "permissions",
        user.roles.includes("ADMIN") ? "ADMIN" : "USER"
      );
      return;
    }
    throw new HttpError("Unauthorized", 401, {
      message: "Invalid username or password",
    });
  },

  logout: async () => {
    // console.log("logout");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("permissions");
    await httpClient(`${apiUrl}/auth/logout`, {
      credentials: "include",
    });
    return;
  },

  checkError: () => {
    // console.log("checkError");
    return Promise.reject(
      new HttpError("Forbidden", 403, {
        message: "Странная ошибка.",
      })
    );
  },

  checkAuth: async () => {
    // console.log("checkAuth");
    const { json } = await httpClient(`${apiUrl}/auth/refresh-tokens`, {
      credentials: "include",
    });
    if (json?.accessToken) {
      const user: UserResult = jwtDecode(json.accessToken);
      if (!user.roles.includes("ADMIN")) {
        await httpClient(`${apiUrl}/auth/logout`, {
          credentials: "include",
        });
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("permissions");
        throw new HttpError("Forbidden", 403, {
          message: "Не достаточно прав для выполнения действия.",
        });
      }
      localStorage.setItem("token", json?.accessToken);
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          avatar: `${import.meta.env.VITE_APP_IMG}/${user.avatar}`,
        })
      );
      localStorage.setItem(
        "permissions",
        user.roles.includes("ADMIN") ? "ADMIN" : "USER"
      );
      return;
    }
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("permissions");
    await httpClient(`${apiUrl}/auth/logout`, {
      credentials: "include",
    });
    throw new HttpError("Unauthorized", 401, {
      message: "Нет токена авторизации.",
    });
  },

  getPermissions: () => {
    // console.log("getPermissions");
    const role = localStorage.getItem("permissions");
    return role ? Promise.resolve(role) : Promise.reject();
  },

  getIdentity: () => {
    // console.log("getIdentity");
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;
    return Promise.resolve(user);
  },
};

export default authProvider;
