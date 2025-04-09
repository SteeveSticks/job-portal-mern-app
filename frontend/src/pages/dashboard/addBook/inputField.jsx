const InputField = ({ label, name, type = "text", register, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-600 dark:text-gray-200 mb-2">
        {label}
      </label>
      <input
        type={type}
        {...register(name, { required: true })}
        className=" p-2 border w-full rounded-md focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-200 dark:border-gray-800 dark:placeholder:text-gray-800"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
