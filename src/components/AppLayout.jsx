import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="pt-10">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
