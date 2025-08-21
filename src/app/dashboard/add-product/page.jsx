import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AddProductForm from "@/components/AddProductForm";

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to login if not authenticated
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <AddProductForm />
    </div>
  );
}
