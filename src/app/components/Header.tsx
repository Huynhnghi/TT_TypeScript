'use client';

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
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { products } from "../container/category/products";

export default function Header() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Lấy email từ localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const email = localStorage.getItem("userEmail");
      setUserEmail(email);
    };

    handleStorageChange(); // lần đầu

    window.addEventListener("userEmailUpdated", handleStorageChange);
    return () => {
      window.removeEventListener("userEmailUpdated", handleStorageChange);
    };
  }, []);

  // Ẩn dropdown khi click ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown]);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserEmail(null);
    window.location.reload();
  };
  const initialCart = [
    { product: products[0], quantity: 2 }, // 2 gạo ST25
    { product: products[4], quantity: 3 }, // 3 cà chua Đà Lạt
  ];
  
  return (
    <header className="grid grid-cols-3 sticky top-0 z-50 items-center p-4 bg-white opacity-95 shadow-md transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center justify-start space-x-4 cursor-pointer">
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
      </div>

      {/* Menu */}
      <div className="flex justify-center space-x-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuTrigger className="cursor-pointer">
                  Trang chủ
                </NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer">
                Sản phẩm
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="w-24 cursor-pointer">
                  Thực phẩm
                </NavigationMenuLink>
                <NavigationMenuLink className="cursor-pointer">
                  Rau củ
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer">
                Liên hệ
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Cart + Auth */}
      <div className="flex justify-end space-x-4 items-center relative">
        <Link
            href="/cart"
            className="text-black text-3xl hover:text-pink-300 cursor-pointer transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faCartPlus} />
        </Link>
        {userEmail ? (
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setShowDropdown((prev) => !prev);
              }}
              className="flex items-center gap-2 text-blue-600 cursor-pointer"
            >
              <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
              <span className="text-sm underline">{userEmail}</span>
            </div>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md z-50 w-36">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/signup">
              <Button
                variant="outline"
                className="text-black hover:bg-gray-200"
              >
                Sign up
              </Button>
            </Link>

            <Link href="/login" passHref>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Sign In
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
