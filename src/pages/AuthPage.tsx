import { useState } from "react";
import { AuthBanner } from "../components/auth/AuthBanner";
import { AuthForm } from "../components/auth/AuthForm";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="flex min-h-screen w-full font-sans bg-white overflow-hidden">
      <AuthBanner isSignIn={isSignIn} />
      <AuthForm isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
    </div>
  );
};

export default AuthPage;
