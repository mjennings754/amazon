import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getProtectedData } from "../api";

export default function Dashboard() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            const res = await getProtectedData(token);
            setData(res);
        };

        fetchData();
    }, []);

    return (
        <>
        <h4>Seller dashboard</h4>
        <br></br>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}