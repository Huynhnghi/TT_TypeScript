'use client';
import React, { useState } from 'react';

interface AuthFormProps {
  title: string;
  buttonText: string;
  onSubmit: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ title, buttonText, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-16 p-10 rounded-3xl shadow-2xl bg-white">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-indigo-700 drop-shadow-md">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-7">
        <div>
          <label className="block mb-2 text-sm font-semibold text-black">Email</label>
          <input
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email của bạn"
            className="w-full px-5 py-3 border-2 border-indigo-300 rounded-xl  text-black focus:outline-none focus:ring-4 focus:ring-indigo-300 text-black focus:border-indigo-500 transition"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold text-black">Password</label>
          <input
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
            className="w-full px-5 py-3 border-2 border-indigo-300 rounded-xl text-black focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-2 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-indigo-700 active:scale-95 transition-transform duration-150"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
