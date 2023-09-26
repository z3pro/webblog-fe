import { createSlice } from "@reduxjs/toolkit";
import { addAticlesToCategory, addCategory, editCategory, getAllCategory, getDetailCategory, removeAticlesToCategory, removeCategory } from "~/services/category";
import { dispatch } from "~/store/indexStore";
import { Payload } from "~/types/role";

const initialState = {
  categories: [],
  pageCount: 0,
  currentPage: 1,
  from: 0,
  to: 0,
  total: 0,
  error: null
}

const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getListCategorySuccess(state, action) {
      state.categories = action.payload;
      // state.pageCount = action.payload.last_page;
      // state.currentPage = action.payload.current_page;
      // state.to = action.payload.to;
      // state.total = action.payload.total;
    },
    hasError(state, action) {
      state.error = action.payload;
    }
  }
})
export default slice.reducer;

export function getListCategory({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await getAllCategory();
      dispatch(slice.actions.getListCategorySuccess(response.data));
      if (callback && response) {
        callback(response.data);
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      if (callback && error) {
        callback(error);
      }
    }
  }
}
export function getOneCategory({ id, callback }: Payload) {
  return async () => {
    try {
      const response = await getDetailCategory(id);
      dispatch(slice.actions.getListCategorySuccess(response.data.data));
      if (callback && response) {
        callback(response.data)
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      if (callback && error) {
        callback(error)
      }
    }
  }
}
export function createCategory({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await addCategory(params);
      if (callback && response) {
        callback(response.data);
      }
    } catch (error) {
      dispatch(slice.actions.hasError);
      if (callback && error) {
        callback(error);
      }
    }
  }
}
export function updateCategory({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await editCategory(params.id, params);
      if (callback && response) {
        callback(response.data)
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      if (callback && error) {
        callback(error);
      }
    }
  }
}
export function deleteCategory({ id, callback }: Payload) {
  return async () => {
    try {
      const response = await removeCategory(id);

      if (callback && response) {
        callback(response);
      }
    } catch (error) {

      dispatch(slice.actions.hasError(error));
      if (callback && error) {
        callback(error);
      }
    }
  }
}
export function addArticles({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await addAticlesToCategory(params.idArticles, params.idCategory);
      if (callback && response) {
        callback(response);
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      if (callback && error) {
        callback(error);
      }
    }
  }
}
export function removeArticles({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await removeAticlesToCategory(params.idArticles, params.idCategory);
      if (callback && response) {
        callback(response);
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      if (callback && error) {
        callback(error);
      }
    }
  }
}