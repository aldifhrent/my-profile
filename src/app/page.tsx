import ProfileData from "@/components/profile-data";
import SocialMedia from "@/components/social-media";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-full w-full">
        <Image
          src="/profile.jpg"
          alt="Profile Image"
          width={300}
          height={300}
          className="w-24 rounded-full"
        />
        <ProfileData/>
        <SocialMedia />
      </main>
    </>
  );
}
