import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5"
    }}>
      <SignIn 
        path="/sign-in"
        routing="path"
        appearance={{
          elements: {
            card: "shadow-lg rounded-xl p-6 bg-white",
            headerTitle: "text-2xl font-semibold text-center",
            socialButtonsBlockButton: "bg-indigo-600 hover:bg-indigo-700 text-white",
            formButtonPrimary: "bg-indigo-500 hover:bg-indigo-600 text-white",
          },
        }}
      />
    </div>
  );
}
