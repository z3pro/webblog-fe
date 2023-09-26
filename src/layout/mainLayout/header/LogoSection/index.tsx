import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { DASHBOARD_PATH } from '~/config'
import Logo from '~/ui-components/Logo'

const LogoSection = () => {
    return (
        <Link component={RouterLink} to={DASHBOARD_PATH}>
            <Logo />
        </Link>
    )
}

export default LogoSection