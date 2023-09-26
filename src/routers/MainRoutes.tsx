import { lazy } from 'react'
import MainLayout from '~/layout/mainLayout'
import Loadable from '~/ui-components/Loadable'
import AuthGurad from '~/utils/route-guard/AuthGurad';

const Home = Loadable(lazy(() => import('~/views/pages/home')));
const NewPost = Loadable(lazy(() => import('~/views/pages/NewPost')));
const ViewAticles = Loadable(lazy(() => import('~/views/pages/aticles/viewAticles')));
const ViewTopic = Loadable(lazy(() => import('~/views/pages/topic/viewTopic')));
const ViewProfile = Loadable(lazy(() => import('~/views/pages/profile')));
const ViewPosts = Loadable(lazy(() => import('~/views/pages/posts')))

const MainRoutes = {
    path: "/",
    element: (
        <AuthGurad>
            <MainLayout />
        </AuthGurad>
    ),
    children: [
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/new-post',
            element: <NewPost />
        },
        {
            path: '/aticles/view/:slug',
            element: <ViewAticles />
        },
        {
            path: '/topic/view/:slug',
            element: <ViewTopic />
        },
        {
            path: '/user/profile',
            element: <ViewProfile />
        },
        {
            path: '/user/posts',
            element: <ViewPosts />
        }
    ]
}

export default MainRoutes