import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebase";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      // After successful login
      window.history.replaceState(null, "", "/"); // Replace with the appropriate URL
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      setError("Invalid email or password");
      setIsLoading(false);
    }
  };

  const handleRegistration = async () => {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      // After successful login
      window.history.replaceState(null, "", "/"); // Replace with the appropriate URL

      setIsLoading(false);
      console.log("User registered:", email);
      navigate("/home");
    } catch (error) {
      setError("Registration failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Login or Register</h1>
      <div className="mb-4">
        <input
          className="border-2 p-2 w-full"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="border-2 p-2 w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="flex gap-4">
        <button
          className={`bg-blue-500 text-white py-2 px-6 rounded-md disabled:opacity-50`}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        <button
          className="bg-green-500 text-white py-2 px-6 rounded-md disabled:opacity-50"
          onClick={handleRegistration}
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
