"use client"
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
const {data: session} = authClient.useSession();
const router = useRouter()


const signout = async()=>{
  await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/");
      toast.success("signout successfully") // redirect to login page
    },
  },
});
}


  return (
    
    <div className="flex justify-between items-center w-full">
      <h1 className="text-2xl font-semibold text-blue-300  ">Hello world</h1>
      <ThemeToggle/>
      
      {session?(
        <div>
          <p>{session.user.name}</p>
          <Button onClick={signout}>Logout</Button>
        </div>
        ):(<Link href="/login"><Button>Login</Button></Link>)}
    </div>
    
    
  );
}
