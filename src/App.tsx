import color from '~/assets/scss/_themes-vars.module.scss';
import Routes from '~/routers';
import ThemeCustomization from './themes';
import 'react-quill/dist/quill.snow.css';
import './assets/scss/style.scss';
import { useContext } from 'react';
import { ConfigContext } from './contexts/ConfigContext';
import { useEffect } from 'react';
import { JWTProvider as AuthProvider } from './contexts/JWTContext';
const App: React.FC = () => {
  const value = useContext<any>(ConfigContext);
  useEffect(() => {

    
  }, [])


  return (
    <ThemeCustomization>
      <AuthProvider>
        <>
          <Routes />
        </>
      </AuthProvider>
    </ThemeCustomization>
  );
}

export default App;
