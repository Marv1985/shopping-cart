import Header from './Header/Header';
import Footer from './Footer/Footer';
import { HeaderProvider } from './HeaderContext';

const Layout = ({ children }) => {
  return (
    <HeaderProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </HeaderProvider>
  );
};

export default Layout;
