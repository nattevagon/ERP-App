import { Sidebar } from "@/components";
import "../globals.css";
import Header from "@/components/molecules/Header";

export default function AppLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 w-full">
        <Header/>
        <div className="container mx-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
}