import React, { useState } from 'react';

const Login = ({handleLogin}) => {
 console.log(handleLogin);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent page reload
    handleLogin(email, password);
    console.log('Form submitted with:', { email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-10 w-[400px] min-h-[300px] flex flex-col items-center justify-center rounded-lg">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center gap-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-white outline-none text-center bg-transparent border-2 border-emerald-600 text-xl px-8 py-5 rounded-full placeholder-gray-500 w-80 h-16"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-white outline-none text-center bg-transparent border-2 border-emerald-600 text-xl px-8 py-5 rounded-full placeholder-gray-500 w-80 h-16"
            type="password"
            placeholder="Enter Your Password"
          />
          <button
            type="submit"
            className="text-white outline-none text-center border-none bg-emerald-600 text-xl px-6 py-4 rounded-full placeholder-gray-500 w-80 h-14"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
