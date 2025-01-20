import MobileNavbar from "@/components/mobile-navbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Sam", lastName: "Me" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="menu icon" width={30} height={30} />

          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>

        {children}
      </div>
    </main>
  );
}
