import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import { useAuth } from "../context/AuthContext";
export default function Login() {
    const [form, setForm] = useState({email: "", password: ""});
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit fires")
        try {
            const data = await loginUser(form);
            console.log("Login API response:", data);

            if (data.token) {
                login(data);
                console.log("Navigating to /dashboard...")
                navigate("/dashboard");
            } else {
                alert("Login failed")
            }
        } catch (error) {
            console.error("Login error", error);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input onChange={(e) => setForm({ ...form, email: e.target.value})}
            />
            <label>Password</label>
            <input type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value})}
            />
            <button type="submit">Sign in</button>
        </form>
        </>
    );
}
