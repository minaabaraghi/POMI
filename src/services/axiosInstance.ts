import axios from 'axios'
// import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const axiosInstance = axios.create({
	baseURL: 'https://pori-movie-collection.herokuapp.com/api/',
	headers: {
		'Content-Type': 'application/json',
		accept: '/',
		// Authorization: 'Bearer ' + localStorage.getItem('token')
	}
})
axiosInstance.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		if (error.response.status === 400) {
			toast.error('خطایی در درخواست رخ داده است.')
		} else if (error.response.status === 401) {
			toast.error('هویت کاربر تایید نشده است.')
		} else if (error.response.status === 403) {
			toast.error('شما مجاز به این درخواست نمی‌باشید.')
		} else if (error.response.status === 404) {
			toast.error('صفحه مورد نظر یافت نشد.')
		} else if (error.response.status === 500) {
			toast.error('سرور با مشکل مواجه شده است لطفا مجدد تلاش کنید.')
		} else {
			toast.error('خطایی رخ داده است لطفا مجدد تلاش کنید.')
		}
		return Promise.reject(error)
	}
)

export default axiosInstance
