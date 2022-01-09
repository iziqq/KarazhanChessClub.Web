import UserDto from "@models/user/UserDto";

const LocalStorageKeys = {
  AUTH_TOKEN: "AUTHTOKEN",
  CURRENT_USER: "CURRENTUSER",
  TRANSLATION: "TRANSLATION",
  LOCALE: "LOCALE"
};

const store = {
  saveToken(token: string): void {
    localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, token);
  },
  clearToken(): void {
    localStorage.removeItem(LocalStorageKeys.AUTH_TOKEN);
  },
  getToken(): string | null {
    var tokenJson = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);

    if (!tokenJson) return null;

    return tokenJson;
  },
  isUserLoggedIn(): boolean {
    return !!this.getToken();
  },

  getLocale(): string | null {
    var storedLocale = localStorage.getItem(LocalStorageKeys.LOCALE);

    if (!storedLocale) return null;

    return storedLocale;
  },
  setLocale(locale: string) {
    localStorage.setItem(LocalStorageKeys.LOCALE, locale);
  },
  saveCurrentUser(user: UserDto): void {
    localStorage.setItem(LocalStorageKeys.CURRENT_USER, JSON.stringify(user));
  },
  clearCurrentUser(): void {
    localStorage.removeItem(LocalStorageKeys.CURRENT_USER);
  },
  getCurrentUser(): UserDto | null {
    var userJson = localStorage.getItem(LocalStorageKeys.CURRENT_USER);

    if (!userJson) return null;

    return JSON.parse(userJson);
  }
};

export default store;
