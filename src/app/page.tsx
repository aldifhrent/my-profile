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
        <div>
          <p
            className={cn(
              "text-black text-xl font-bold mt-2 text-center dark:text-white",
              poppins.className
            )}
          >
            Aldi Ahmad Fahrizi Ilmawan
          </p>
          <div className="max-w-md text-justify mx-4 md:mx-0">
            An enthusiastic and dedicated individual with a strong desire to
            learn and develop in a professional environment. I have strong
            skills in communication, contributing and ready to take on new
            challenges.
          </div>
          <p
            className={cn(
              "p-2 text-md font-bold bg-black text-white text-center mt-2 dark:bg-white dark:text-black ",
              poppins.className
            )}
          >
            Web Developer
          </p>
        </div>
        <SocialMedia />
      </main>
    </>
  );
}
