import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";


interface BodyData {
  id: string | number,
  name: string
  image: string
  email: string
}

export default function useManagmentUser() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [reloadVerifyUserRegister, setReloadVerifyUserRegister] = useState(false)


  useEffect(() => {
    if (user) {
      const body: BodyData = { //! if user exist it is sure that id exist
        id: user.sub || "unknow",
        name: user.name || "unknow",
        email: user.email || "unknow",
        image: user.picture || "unknow"
      }
      const url = `${import.meta.env.VITE_SOME_BASE_URL}/user/create`;
      fetch(url, {
        body: JSON.stringify(body),
        method: "post",
        headers: {
          "Content-Type": "application/json",
        }
      })
    }
  }, [user, reloadVerifyUserRegister])


  const reloadVerifyUserRegisterF = () => setReloadVerifyUserRegister(prev => !prev)

  return { user, reloadVerifyUserRegisterF, loginWithRedirect, logout, isAuthenticated }
}
