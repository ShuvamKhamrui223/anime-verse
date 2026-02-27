import Link from "next/link";
type Props = { label: string; url: string; style: "filled" | "outline" };
const Chip = ({ label, url, style }: Props) => {
  return (
    <Link
      href={url}
      className={`text-xs py-1 px-2 rounded-full ${
        style === "filled"
          ? "bg-amber-700 text-white hover:bg-amber-800/90 transition-colors duration-100"
          : "border border-amber-500 text-amber-500"
      }`}
    >
      {label}
    </Link>
  );
};

export default Chip;
