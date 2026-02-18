import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

const page = () => {
  return (
    <section className="w-full min-h-screen relative flex items-center justify-center">
      <Image
        src={"/bg-sign-up.jpg"}
        alt="sign up background"
        fill
        className="object-cover -z-10 aspect-video"
      />

      <SignUp />
    </section>
  );
};

export default page;
