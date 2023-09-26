import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "~/store/indexStore";
import { addBlog, addUserLikeBlog, editBlog, getAllBlog, getDetailBlog, removeBlog, removeUserLikeBlog } from "~/services/blog";
import { Payload } from "~/types/role";


const initialState: any = {
  pageCount: 0,
  blogs: [],
  currentPage: 1,
  from: 0,
  to: 0,
  total: 0,
  error: null
}

const slice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    getListBlogsSusses(state, action) {
      state.blogs = action.payload.data;
      state.pageCount = action.payload.last_page;
      state.currentPage = action.payload.current_page;
      state.from = action.payload.from;
      state.to = action.payload.to;
      state.total = action.payload.total;
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
      const response = await getAllBlog(params);
      dispatch(slice.actions.getListBlogsSusses(response.data.data));
      if (callback && response) {
        callback(response.data);
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      if (callback && error) {
        callback(error);
      }
    }
  };
}

export function getOneBlog({ id, callback }: Payload) {
  return async () => {
    try {
      const response = await getDetailBlog(id);
      dispatch(slice.actions.getListBlogsSusses(response.data.data));
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
};

export function createBlog({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await addBlog(params);
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
};

export function updateBlog({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await editBlog(params.id, params);
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
};

export function deleteBlog({ id, callback }: Payload) {
  return async () => {
    try {
      const response = await removeBlog(id);
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
};

export function addLikeBlog({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await addUserLikeBlog(params.idUser, params.idArticles);
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
};

export function removeLikeBlog({ params, callback }: Payload) {
  return async () => {
    try {
      const response = await removeUserLikeBlog(params.idUser, params.idArticles);
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
};