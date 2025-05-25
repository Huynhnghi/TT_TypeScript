'use client';
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Errors {
  email?: string;
  password?: string;
  confirm?: string;
}

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [registered, setRegistered] = useState(false);

  const router = useRouter();

  const validate = () => {
    const newErrors: Errors = {};
    if (!email) newErrors.email = "Email không được để trống";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email không hợp lệ";

    if (!password) newErrors.password = "Mật khẩu không được để trống";
    else if (password.length < 6) newErrors.password = "Mật khẩu phải ít nhất 6 ký tự";

    if (confirm !== password) newErrors.confirm = "Xác nhận mật khẩu không khớp";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Đăng ký thành công!");
      setEmail("");
      setPassword("");
      setConfirm("");
      setErrors({});
      setRegistered(true);

      // Chuyển trang sau 1.5s
      setTimeout(() => {
        router.push("/login"); // dùng router của Next.js
      }, 1500);
    } else {
      toast.error("Vui lòng sửa lỗi trước khi gửi");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-lg bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-12">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-indigo-700 drop-shadow-lg">
          Đăng ký tài khoản
        </h2>

        {registered ? (
          <div className="text-center space-y-6">
            <p className="text-red-600 text-xl font-semibold">Bạn đã đăng ký thành công!</p>
            <Link
              href="/login"
              className="inline-block px-10 py-4 bg-indigo-600 text-white text-xl font-bold rounded-3xl shadow-lg hover:bg-indigo-700 transition"
            >
              Đến trang đăng nhập
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email */}
            <div>
              <label
                className="block mb-3 text-lg font-semibold text-black"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Nhập email của bạn"
                className={`w-full px-6 py-4 text-lg border-2 rounded-2xl transition  text-black
                  focus:outline-none focus:ring-4 focus:ring-indigo-300 ${
                    errors.email ? "border-red-500" : "border-indigo-300"
                  }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="mt-2 text-red-600 text-sm font-medium">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                className="block mb-3 text-lg font-semibold text-black"
                htmlFor="password"
              >
                Mật khẩu
              </label>
              <input
                id="password"
                type="password"
                placeholder="Nhập mật khẩu"
                className={`w-full px-6 py-4 text-lg border-2 rounded-2xl transition text-black
                  focus:outline-none focus:ring-4 focus:ring-indigo-300 ${
                    errors.password ? "border-red-500" : "border-indigo-300"
                  }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="mt-2 text-red-600 text-sm font-medium">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                className="block mb-3 text-lg font-semibold text-black"
                htmlFor="confirm"
              >
                Xác nhận mật khẩu
              </label>
              <input
                id="confirm"
                type="password"
                placeholder="Nhập lại mật khẩu"
                className={`w-full px-6 py-4 text-lg border-2 rounded-2xl transition text-black 
                  focus:outline-none focus:ring-4 focus:ring-indigo-300 ${
                    errors.confirm ? "border-red-500" : "border-indigo-300"
                  }`}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              {errors.confirm && (
                <p className="mt-2 text-red-600 text-sm font-medium">{errors.confirm}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-indigo-600 text-white text-xl font-bold rounded-3xl shadow-lg hover:bg-indigo-700 active:scale-95 transition-transform duration-150"
            >
              Đăng ký
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Signup;
