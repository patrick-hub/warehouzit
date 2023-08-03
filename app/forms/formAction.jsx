export default function FormAction({
	handleSubmit,
	type = "Button",
	action = "submit",
	text,
	isLoading,
}) {
	return (
		<>
			{type === "Button" ? (
				<button
					type={action}
					className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#546e38] hover:bg-lime-900 focus:outline-none focus:ring-offset-2 focus:ring-lime-500 mt-10"
					onClick={handleSubmit}>
					{isLoading ? "Loading" : 'Register'}
				</button>
			) : (
				<></>
			)}
		</>
	);
}
