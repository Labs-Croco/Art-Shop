import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useLogoutMutation } from '../../redux/api/usersApiSlice'
import { logout } from "../../redux/features/auth/authSlice"

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
    <div>
      Navigation
      <div>

        <Link to="/" >
          Home
        </Link>
        <Link to="/shop" >
          shop
        </Link>
        <Link to="/cart" >
          cart
        </Link>
        <Link to="/cart" >
          favorites
        </Link>
      </div>

      <div>
        <button>
          {userInfo ? (
            <span>{userInfo.username}</span>
          ) : (
            <></>
          )}
        </button>
        <div>
          {userInfo && (
            <div>
              {userInfo.isAdmin && (
                <>
                  <Link to="/admin/dashboard">
                    Dashboard
                  </Link>
                  <Link to="/admin/productlist">
                    Products
                  </Link>
                  <Link to="/admin/categorylist">
                    Category
                  </Link>
                  <Link to="/admin/orderlist">
                    Orders
                  </Link>
                  <Link to="/admin/userlist">
                    Users
                  </Link>
                </>
              )
              }
              <Link to="/profile" >
                Profile
              </Link>
              <button
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          )}
          {!userInfo && (
            <>
              <Link to="/login">login</Link>
              <Link to="/register">register</Link>
            </>
          )}
        </div>
      </div>

    </div>
  )
}

export default Navigation