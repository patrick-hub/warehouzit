const fixedInputClass =
	"rounded-md appearance-none relative block w-96 mx-auto px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm";

export default function Input({
	handleChange,
	value,
	labelText,
	labelFor,
	id,
	name,
	type,
	isRequired = false,
	placeholder,
	customClass,
	error,
}) {

  const getErrorMessage = () => {
    if (isRequired && value.trim() === "") {
      return "This field is required.";
    }
    return null; 
  };
  
	return (
		<div className="my-5">
			<label htmlFor={labelFor} className="sr-only">
				{labelText}
			</label>
			<input
				onChange={handleChange}
				value={value}
				id={id}
				name={name}
				type={type}
				required={isRequired}
				className={fixedInputClass + customClass}
				placeholder={placeholder}
				error={error}
			/>
      {/* {getErrorMessage() && (
        <p className="pt-2 text-red-600">{getErrorMessage()}</p>
      )} */}
		</div>
	);
}
