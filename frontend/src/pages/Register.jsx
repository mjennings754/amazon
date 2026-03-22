import { useNavigate } from "react-router"
import { useState } from "react";
import { registerUser } from "../api";
export default function Register() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await registerUser(form);
            alert(data.message)
            navigate("/login");
        } catch (err) {
            console.error(err)
            setError(err.message);
        }
    };
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h4>Create an amazon account</h4>
            <label>Username</label>
            <input onChange={(e) => setForm({ ...form, username: e.target.value})}
            />
            <label>Email</label>
            <input onChange={(e) => setForm({ ...form, email: e.target.value})}
            />
            <label>Password</label>
            <input onChange={(e) => setForm({ ...form, password: e.target.value})}
            />
            <button type="submit">Create an Amazon account</button>
        </form>
        </>
    )
}
