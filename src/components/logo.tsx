import Image from "next/image";
import transparentLogo from "../../public/logos/Transparent-logo.png.png";
import stickyLogo from "../../public/logos/Sticky-logo.png.png";

export function Logo({
  className = "h-[72px] w-auto object-contain",
  variant = "white",
}: {
  className?: string;
  variant?: "white" | "sticky";
}) {
  return (
    <Image
      src={variant === "sticky" ? stickyLogo : transparentLogo}
      alt="Warriors Aluminium & Glass"
      priority
      className={className}
    />
  );
}
