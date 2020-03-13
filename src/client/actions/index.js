export const FETCH_USERS = 'fetch_users';
// thunk gives 3 arguments
// * dispatch
// * getState
// * api (this gets implemented when you pass it to the thunk.withExtraArgument method)
// in this case it's the api instance of axios
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');
  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
}
