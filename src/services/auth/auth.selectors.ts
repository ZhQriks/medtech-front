export const selectAuth = (state: any) => state.auth;
export const selectAuthUser = (state: any) => state.auth.user;
export const selectIsAuthenticated = (state: any) => state.auth.isLoggedIn;
export const selectIsInitialized = (state: any) => state.auth.isInitialized;
