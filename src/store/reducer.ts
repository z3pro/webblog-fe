import { combineReducers } from "redux";
import articlesReducer from './slice/articles';
import blogReducer from '~/store/slice/blogSlice';
import categoryReducer from "~/store/slice/category";


const reducer = combineReducers({
    articles: articlesReducer,
    blog: blogReducer,
    category: categoryReducer,
})
export default reducer;