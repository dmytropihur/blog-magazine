import axios from "axios"

export const getCurrentUser = async (accessToken) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_DATABASE_URL}/auth/current`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
    
    ).then(response => response.data)
    return res
  } catch (error) {
    console.error(error)
  }
}