import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex">
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
