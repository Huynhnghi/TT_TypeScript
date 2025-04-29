import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header className="grid grid-cols-3 sticky top-0 z-50 items-center p-4 bg-white opacity-95 shadow-md transition-all duration-300">
            
            {/* Logo */}
            <div className="flex items-center justify-start space-x-4">
                <Image
                    src="/images/logo.png"
                    alt="Mô tả hình ảnh"
                    width={100}
                    height={100}
                />
            </div>

            {/* Menu */}
            <div className="flex justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="cursor-pointer">Trang chủ</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="cursor-pointer">Sản phẩm</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink className="w-24 cursor-pointer">Thực phẩm</NavigationMenuLink>
                                <NavigationMenuLink className="cursor-pointer">Rau củ</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="cursor-pointer">Liên hệ</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Cart + Buttons */}
            <div className="flex justify-end space-x-4 items-center">
                <p className="text-black text-3xl hover:text-pink-300 transition-colors duration-300">
                    <FontAwesomeIcon icon={faCartPlus} />
                </p>

                <Button variant="outline" className="text-black hover:bg-gray-200">
                    Sign up
                </Button>

                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                    Sign In
                </Button>
            </div>
        </header>
    );
}