import Image from "next/image";
import Link from "next/link";

const AuthForm = ({ type }: { type: "sign-in" | "sign-up" }) => {
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
          <Image src="/icons/logo.svg" width={34} height={34} alt="logo" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Surge
          </h1>
        </Link>
      </header>
    </section>
  );
};

export default AuthForm;
