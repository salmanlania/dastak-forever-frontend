import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import SearchBar from '../components/SearchBar';
import TopBar from '../components/TopBar';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <header className="sticky top-0 !bg-white shadow-md px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] z-[9999]">
        <Navbar />
      </header>

      <main className="flex-1">
        {/* <SearchBar /> */}
        <div className="p-4 lg:p-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;