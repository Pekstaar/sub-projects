import AxiosUtility, { setAuthToken } from "./AxiosService";

// login
async function fetchBookings() {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/admins/api/orders/");

  return res.data;
}

async function ownersBookings(first_name) {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get(`/admins/api/orders/?owner__first_name=${first_name}`);

  return res.data;
}

const BookingServices = { fetchBookings, ownersBookings };

export default BookingServices;