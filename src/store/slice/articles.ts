import { createSlice } from "@reduxjs/toolkit";

import { addAticles, addUserLikeAticles, editAticles, getAllAticles, getDetailAticles, removeAticles, removeUserLikeAticles } from "~/services/aticles";
import { Payload } from "~/types/role";
import { dispatch } from "~/store/indexStore";

const initialState = {
  articlesList: [],
  pageCount: 0,
  currentPage: 1,
  from: 0,
  to: 0,
  total: 0,
  error: null
}
const slice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    getListArticlesSusses(state, action) {
      state.articlesList = action.payload;
      // state.pageCount = action.payload.last_page;
      // state.currentPage = action.payload.current_page;
      // state.from = action.payload.from;
      // state.to = action.payload.to;
      // state.total = action.payload.total;
    },
    hasError(state, action) {
      state.error = action.payload
    }
  }
})
export default slice.reducer;
export function getListArticles({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await getAllAticles(params);
      dispatch(slice.actions.getListArticlesSusses(response.data));
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
export function getOneArticles({ id, callback }: Payload) {
  return async () => {
    try {
      const response = await getDetailAticles(id);
      dispatch(slice.actions.getListArticlesSusses(response.data.data));
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
export function createArticle({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await addAticles(params);
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
export function updateArticle({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await editAticles(params.id, params);
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
export function deleteArticle({ id, callback }: Payload) {
  return async () => {
    try {
      const response = await removeAticles(id);
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
export function addLikeArticles({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await addUserLikeAticles(params.idUser, params.idArticles);
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
export function removeLikeArticle({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await removeUserLikeAticles(params.idUser, params.idArticles);
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