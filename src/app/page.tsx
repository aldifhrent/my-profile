import ProfileData from "@/components/profile-data";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <>
      <main>
        <div
          className="flex
          flex-col
          items-center
          justify-center
          h-screen
          w-full"
        >
          <ProfileData />
        </div>

        <Skills />
      </main>
    </>
  );
}
