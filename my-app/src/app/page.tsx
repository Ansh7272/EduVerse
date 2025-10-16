import { ThemeToggle } from "@/components/ui/themeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-between items-center w-full">
      <h1 className="text-2xl font-semibold text-blue-300  ">Hello world</h1>
      <ThemeToggle/>
    </div>
    
    </>
  );
}
