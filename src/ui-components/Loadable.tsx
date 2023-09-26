import { ElementType, Suspense } from 'react'
import Loader from './Loader'

const Loadable = (Component: ElementType) => (props: any) => {
    return (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    )
}

export default Loadable