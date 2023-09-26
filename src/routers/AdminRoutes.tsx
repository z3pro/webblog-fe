import path from "path";
import { lazy } from "react";
import AdminLayout from "~/layout/adminLayout";
import Loadable from "~/ui-components/Loadable";

const Dashboard = Loadable(lazy(() => import('~/views/pages/admin/dashboard')));
const User = Loadable(lazy(() => import('~/views/pages/admin/user')))
const Articles = Loadable(lazy(() => import('~/views/pages/admin/articles')));
const Category = Loadable(lazy(() => import('~/views/pages/admin/category')));
const Blog = Loadable(lazy(() => import('~/views/pages/admin/blog')));
const ActiveBlog = Loadable(lazy(() => import('~/views/pages/admin/activeBlog')));
const CreateArticle = Loadable(lazy(() => import('~/views/pages/admin/articles/newPost')));

const AdminRoutes = {
    path: 'admin',
    element: (
        <AdminLayout />
    ),
    children: [
        {
            path: 'dashboard',
            element: <Dashboard />
        },
        {
            path: 'manageAccounts',
            element: <User />
        },
        {
            path: 'manageCategory',
            element: <Category />
        },
        {
            path: 'manageArticles',
            element: <Articles />
        },
        {
            path: 'manageBlog',
            element: <Blog />
        },
        {
            path: 'active-blog',
            element: <ActiveBlog />
        },
        {
            path: 'create-articles',
            element: <CreateArticle />
        }
    ]
}
export default AdminRoutes;