import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddProductForm from "@/components/AddProductForm";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to login if not authenticated
    redirect("/login");
  }

  return (
    <div className="bg-base-100 flex flex-col items-center justify-center">
      <div className="bg-base-100 shadow-xl rounded-2xl w-full max-w-2xl">
        <AddProductForm />
      </div>
    </div>
  );
}
