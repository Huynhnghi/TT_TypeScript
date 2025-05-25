'use client';
import { useRouter } from 'next/navigation';
import AuthForm from '../../components/AuthForm';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
    // Hiển thị toast thành công
    toast.success(`Đăng nhập thành công!`, {
      duration: 3000, 
    });

    // Lưu email và phát sự kiện
    localStorage.setItem("userEmail", email);
    window.dispatchEvent(new Event("userEmailUpdated"));

    // Chuyển hướng
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 to-indigo-100 via-purple-100">
      <AuthForm title="Đăng nhập" buttonText="Login" onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
