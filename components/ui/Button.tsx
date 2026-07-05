type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
  variant === "primary"
    ? "bg-blue-700 hover:bg-blue-800 text-white"
    : variant === "success"
    ? "bg-green-600 hover:bg-green-700 text-white"
    : "border-2 border-white text-white hover:bg-white hover:text-blue-900";

  return (
    <button
      className={`${styles} px-8 py-4 rounded-xl font-semibold transition duration-300`}
    >
      {children}
    </button>
  );
}