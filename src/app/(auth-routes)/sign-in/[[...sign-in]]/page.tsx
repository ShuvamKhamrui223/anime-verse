import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

const page = () => {
  return (
    <section className="w-full min-h-screen relative flex items-center justify-center">
      <Image
        src={"/bg-sign-in.jpg"}
        alt="login background"
        fill
        className="object-center h-full w-full  object-cover -z-10 aspect-video"
      />
        <SignIn />
    </section>
  );
};

export default page;
