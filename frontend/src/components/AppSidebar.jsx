import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from '../redux/api/usersApiSlice';
import { logout } from "../redux/features/auth/authSlice";
import { Home, ShoppingCart, Store, Heart } from "lucide-react";
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

// Menu items.
const items = [
    {
        title: "Inicio",
        url: "/",
        icon: Home,
    },
    {
        title: "Tienda",
        url: "/store",
        icon: Store,
    },
    {
        title: "Carrito",
        url: "/cart",
        icon: ShoppingCart,
    },
    {
        title: "Favoritos",
        url: "/favorites",
        icon: Heart,
    },
];

export function AppSidebar() {
    const { userInfo } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Sidebar>
            <SidebarHeader>
                <img src="../../src/assets/img/kroco-wa.png" alt="" />
            </SidebarHeader>
            <SidebarContent>
                {items.map((item) => (
                    <div className="mx-6">
                        <Button className="w-full">
                            <Link to={item.url} >
                                {item.title}
                            </Link>
                        </Button>
                    </div>
                ))}

                {/* Conditionally rendered links based on user authentication */}
                {userInfo ? (
                    <>
                        {userInfo.isAdmin && (
                            <>
                                <a href="/admin/dashboard">Dashboard</a>
                                <a href="/admin/productlist">Products</a>
                                <a href="/admin/categorylist">Category</a>
                                <a href="/admin/orderlist">Orders</a>
                                <a href="/admin/userlist">Users</a>
                            </>
                        )}
                    </>
                ) : (
                    null
                )}
            </SidebarContent>
            <SidebarFooter>
                {userInfo ? (
                    <>
                        <a href="/profile">Profile</a>
                        <button onClick={logoutHandler}>Logout</button>
                    </>
                ) : (
                    <>
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </>
                )}
            </SidebarFooter>
        </Sidebar>
    );
}
