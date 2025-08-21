import { promises as fs } from "fs";
import path from "path";

export async function POST(req) {
  const body = await req.json();
  const filePath = path.join(process.cwd(), "src/lib/products.json");

  try {
    const data = await fs.readFile(filePath, "utf-8");
    const products = JSON.parse(data);

    const newProduct = {
      id: products.length + 1,
      name: body.name,
      description: body.description,
      price: body.price,
      image: body.image || "",
    };

    products.push(newProduct);
    await fs.writeFile(filePath, JSON.stringify(products, null, 2));

    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to save product" }), {
      status: 500,
    });
  }
}
