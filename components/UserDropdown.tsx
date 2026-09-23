'use client'

import { useRouter } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import NavItems from "./NavItems"
import { LogOut } from "lucide-react"

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = () => {
        router.push('/sign-in');
    }

    const user = { name: 'John', email: 'contact@hotmail.com' }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
                        <Avatar className="h-8 w-8 ">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-small font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="hidden md:flex flex-col items-start">
                            <span className="text-base font-medium text-gray-400">{user.name}</span>
                        </div>
                    </Button>
                }
            />
            <DropdownMenuContent className="text-gray-400 w-64" align="end">
                <DropdownMenuGroup>

                    <DropdownMenuLabel>
                        <div className="flex relative items-center gap-3 py-2">
                            <Avatar className="h-10 w-10 ">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback className="bg-yellow-500 text-yellow-900 text-small font-bold">
                                    {user.name[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="text-base font-medium text-gray-400">{user.name}</span>
                                <span className="text-sm text-gray-500">{user.email}</span>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-gray-600"/>
                <DropdownMenuItem className="cursor-pointer text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors" onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-4 hidden sm:block" />
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-600"/>
                <nav className="sm:hidden">
                    <NavItems />
                </nav>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown