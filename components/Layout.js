import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      {children}
      <Footer />
    </div>
  );
}
