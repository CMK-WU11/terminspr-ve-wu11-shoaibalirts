import LoginComp from "@/components/login/LoginComp";

export const metadata = {
  title: "Log ind | Dans App",
  description: "User credentials",
};
export default function LoginPage() {
  return (
    <>
      <main className="flex items-center justify-center">
        <section
          id="hero"
          className="min-h-screen w-full flex flex-col items-center justify-center font-ubuntu"
        >
          <LoginComp />
        </section>
      </main>
    </>
  );
}
