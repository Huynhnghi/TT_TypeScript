import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from 'next/image';

export default function Header() {
    return (
        <header className="grid grid-cols-3 sticky top-0 z-50 items-center p-4 bg-white shadow">

            <div className="flex items-center">
                <Image
                    src="/images/logo.png"
                    alt="Mô tả hình ảnh"
                    width={100}
                    height={100}
                />
            </div>

            <div className="flex justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Trang chủ</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Sản phẩm</NavigationMenuTrigger>
                            <NavigationMenuContent >
                                <NavigationMenuLink className="w-24">Thực phẩm</NavigationMenuLink>
                                <NavigationMenuLink>Rau củ</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Liên hệ</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex justify-end space-x-4">
                <button className="px-4 py-2 text-black rounded hover:bg-blue-700">
                    Sign up
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Sign In
                </button>
            </div>

        </header>
    );
}
