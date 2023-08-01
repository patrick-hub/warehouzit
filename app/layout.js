import { Poppins } from "next/font/google";
import Header from "./components/Header";
import style from "./styles/globals.css";
import Button from "./components/Button";
import styles from "./styles/Layout.module.css";
import signIn from "./signin/page";

import Link from "next/link";

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Warehouzit",
	description: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className=" text-white items-center mx-auto p-3 border-box w-[476px]">
				<Header />
				<div
					className={`flex justify-start gap-5 text-[#C2C2C2] mt-5 p-2 mx-4 ${styles.logRegButton}`}>
					<Link href="/signin">Log In</Link>
					<Link href="/signup">Register</Link>
				</div>
				<hr className="w-[400px] h-[2px] mb-3 bg-neutral-300 border-0 m-auto" />
				<div className={`flex justify-center gap-2  ${styles.spaceseekers}`}>
					<Button style={{ backgroundColor: "#e4e5e7", color: "#c2c2c2" }}>
						Space Seekers
					</Button>
					<Button>Space Owners</Button>
				</div>

				<main>{children}</main>
			</body>
		</html>
	);
}
