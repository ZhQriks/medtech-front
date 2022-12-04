export const selectAuth = (state: any) => state.auth;
export const selectAuthUserToken = (state: any) => state.auth.user.token;
export const selectIsAuthenticated = (state: any) => state.auth.isLoggedIn;
export const selectIsInitialized = (state: any) => state.auth.isInitialized;
