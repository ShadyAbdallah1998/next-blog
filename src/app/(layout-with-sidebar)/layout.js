import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
