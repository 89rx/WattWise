import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login attempted with:", username, password);
  };

  return (
    <>
      <Helmet>
        <title>Wattwise | Login</title>
      </Helmet>
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/wattbg.jpg')" }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-[#0b1a3f] mb-6">
            Wattwise Login
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0b1a3f] focus:border-[#0b1a3f]"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0b1a3f] focus:border-[#0b1a3f]"
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#0b1a3f] focus:ring-[#0b1a3f] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <a href="#" className="font-medium text-[#0b1a3f] hover:text-[#9288f8]">
                  Forgot password?
                </a>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0b1a3f] hover:bg-[#9288f8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0b1a3f]"
              >
                Sign in
              </button>
            </div>
          </form>
          
          <div className="mt-4 text-center text-sm">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-[#0b1a3f] hover:text-[#9288f8]">
                Contact admin
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;