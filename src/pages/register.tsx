import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    // DEMO SAVE
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "user",
      JSON.stringify({ email })
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md p-6 rounded-xl glass-card"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h1>

        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" className="w-full btn-hero">
            Upgrade & Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

