import axios from "axios"
import {
  PITTSBURGH_DIGITAL_FIRM_LLC_USERNAME,
  PITTSBURGH_DIGITAL_FIRM_LLC_PASSWORD
} from "react-native-dotenv"
const pittsburghDigitalFirmLLC = axios.create({
  baseURL: "https://pittsburghcryptofirm.com/",
  auth: {
    username: PITTSBURGH_DIGITAL_FIRM_LLC_USERNAME,
    password: PITTSBURGH_DIGITAL_FIRM_LLC_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
