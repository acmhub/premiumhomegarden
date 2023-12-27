import { IoMailOpenOutline } from "react-icons/io5";
import { HiOutlinePhoneArrowDownLeft } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
	{
		href: "mailto:solution.phg@gmail.com",
		Icon: IoMailOpenOutline,
		label: "solution.phg@gmail.com",
	},
	{
		href: "tel:+40767858360",
		Icon: HiOutlinePhoneArrowDownLeft,
		label: "+40 767 858 360",
	},
	{
		href: "https://www.facebook.com/Premium-Home-Garden-Solutions-107377011425838/",
		Icon: FaFacebookF,
		label: "Facebook",
	},
	{
		href: "https://www.instagram.com/premium_homeandgarden/",
		Icon: FaInstagram,
		label: "Instagram",
	},
	{
		href: "http://wa.me/+40767858360",
		Icon: FaWhatsapp,
		label: "Whatsapp",
	},
];

export default socials;
