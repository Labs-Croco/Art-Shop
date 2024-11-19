import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useLogoutMutation } from '../../redux/api/usersApiSlice'
import { logout } from "../../redux/features/auth/authSlice"
import { FaHome, FaStore, FaShoppingCart, FaHeart } from 'react-icons/fa';

const Navigation = () => {

  const { userInfo } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="grid grid-cols-[20%_80%] gap-6 p-6">
      {/* Columna 1: Logo y Links */}
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img src="../../../src/assets/logo_v1.png" alt="logo" width={200} className="mb-8" />

        {/* Links Verticales */}
        <div className="flex flex-col space-y-4 text-center md:space-y-2 md:text-left">
          {/* Enlace para pantallas pequeñas: ícono en burbuja redonda */}
          <Link
            to="/"
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
          >
            <FaHome size={24} />
          </Link>
          <Link
            to="/shop"
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
          >
            <FaStore size={24} />
          </Link>
          <Link
            to="/cart"
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
          >
            <FaShoppingCart size={24} />
          </Link>
          <Link
            to="/favorites"
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
          >
            <FaHeart size={24} />
          </Link>

          {/* Enlace para pantallas más grandes: texto normal */}
          <Link to="/" className="hidden md:inline hover:text-gray-500">
            Inicio
          </Link>
          <Link to="/shop" className="hidden md:inline hover:text-gray-500">
            Tienda
          </Link>
          <Link to="/cart" className="hidden md:inline hover:text-gray-500">
            Carrito
          </Link>
          <Link to="/favorites" className="hidden md:inline hover:text-gray-500">
            Favoritos
          </Link>
        </div>
      </div>

      {/* Columna 2: Resto del contenido */}
      <div>
        <div className="mb-4">
          <button className="text-gray-700 hover:text-gray-500">
            {userInfo ? (
              <span>{userInfo.username}</span>
            ) : (
              <></>
            )}
          </button>
        </div>

        {userInfo && (
          <div className="space-y-4">
            {userInfo.isAdmin && (
              <>
                <Link to="/admin/dashboard" className="hover:text-gray-500">
                  Dashboard
                </Link>
                <Link to="/admin/productlist" className="hover:text-gray-500">
                  Products
                </Link>
                <Link to="/admin/categorylist" className="hover:text-gray-500">
                  Category
                </Link>
                <Link to="/admin/orderlist" className="hover:text-gray-500">
                  Orders
                </Link>
                <Link to="/admin/userlist" className="hover:text-gray-500">
                  Users
                </Link>
              </>
            )}
            <Link to="/profile" className="hover:text-gray-500">
              Profile
            </Link>
            <button onClick={logoutHandler} className="text-red-500 hover:text-red-700">
              Logout
            </button>
          </div>
        )}

        {!userInfo && (
          <div className="space-x-4">
            <Link to="/login" className="hover:text-gray-500">Iniciar Sesion</Link>
            <Link to="/register" className="hover:text-gray-500">Registrarme</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navigation