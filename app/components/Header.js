import React from "react";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
	return (
		<div className="flex justify-around">
			<div className= " flex justify-between bg-[#546E39] text-white items-center w-[456px] mx-auto p-3">
				<h2>Hello Welcome</h2>
				<button>X</button>
              
			</div>
		</div>
	);
};

export default Header;
