export default function Terms(){
    return(
        <div className="flex items-center justify-between w-96">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[#546e38] border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            I agree to the terms and Conditions
          </label>
        </div>
      </div>

    )
}