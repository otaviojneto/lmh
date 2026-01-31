import { IcBrand } from "../../../icons";

export function Brand({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="
        flex
        h-[42px] w-[42px]
        items-center justify-center
        rounded-full
        bg-white
        bg-no-repeat bg-center
        bg-[length:32px]
        transition-opacity duration-400 ease-in
        hover:opacity-60
      "
      style={{
        backgroundImage: `url(${IcBrand})`,
      }}
    />
  );
}
