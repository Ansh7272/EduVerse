"use client"
import Image from "next/image"
import Link from "next/link"
import Logo from '@/app/public/logo.svg'
// import {UserDropdown} from '@/app/(public)/_components/UserDropdown'
import { ThemeToggle } from "@/components/ui/themeToggle"
import { authClient } from "@/lib/auth-client"
import { buttonVariants } from "@/components/ui/button"
import { UserDropdown } from "./UserDropdown"
const navigation=[{
    name:'Home',
    href:'/'
},{
    name:'Courses',
    href:'/courses'
},{
    name:'Dashboard',
    href:'/dashboard'
}]
 export const Navbar = ()=>{
    const {data:session,isPending} = authClient.useSession()
    return(
       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
            <div className="container flex min-h-16 items-center mx-auto px-4 md:px-6 lg:px-8">
                <Link href="/" className="flex gap-2 items-center space-x-0 mr-4">
                <Image src={Logo} alt="Logo" className="size-11"/>
                <span className="font-bold">AnshuLMS.</span>
                </Link>

                <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between ">
                    <div className="flex items-center space-x-2">{navigation.map((item)=>(
                       <Link className="text-sm font-medium transition-colors hover:text-primary" key={item.name} href={item.href} >{item.name}</Link> 
                    ))}</div>

                    <div className="flex items-center space-x-4">
                        <ThemeToggle/>
                        {isPending?null:session?(<p><UserDropdown email={session.user.email} image={session.user.image || ""} name={session.user.name} /> </p> ):(<><Link className={buttonVariants({variant:"secondary"})} href='/login'>Login</Link><Link className={buttonVariants()} href='/login'>Get Started</Link></>)}
                    </div>
                </nav>
            </div>
       </header>
    )
}