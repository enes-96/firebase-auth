import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update the user state when authentication state changes
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>
        {user
          ? `Welcome, ${user.displayName || "User"}!`
          : "You are logged in!"}
      </h1>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
          {/* Add more user details here as needed */}
        </div>
      )}
    </div>
  );
};

export default Home;
