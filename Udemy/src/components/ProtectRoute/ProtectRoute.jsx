import { Navigate } from "react-router-dom";
import { useAuthStore } from "@hooks/store/useAuthStore.js";

const ProtectRoute = ({ children }) => {
    const { user, isHydrated} = useAuthStore();

    if (!isHydrated) return null;

    return user ? children : <Navigate to="/login" />;
}

export default ProtectRoute;