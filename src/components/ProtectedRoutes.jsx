import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const userName = useSelector((state) => state.name)
  // console.log(userName)

  if (userName.length > 5) {
    return <Outlet />
  } else {
    return <Navigate to='/' />
  } // Aquí le debemos decir la ruta a la que queremos llevar
} // al usuario si no está autenticado

export default ProtectedRoutes
