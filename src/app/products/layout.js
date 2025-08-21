import Navbar from "@/components/Navbar";

export default function ProductsLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
