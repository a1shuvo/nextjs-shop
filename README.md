# NextJS Shop 🛒

A simple e-commerce shop built with **Next.js, NextAuth.js, DaisyUI, and TailwindCSS**.  
This project demonstrates authentication, product management (via JSON file storage), theming (light/dark), and responsive UI.

---

## 🚀 Features
- 🔑 Authentication using **NextAuth.js**
- 🌓 Light/Dark theme toggle with DaisyUI
- 📦 Add and view products (stored in `products.json`)
- 🖼️ Responsive UI with **TailwindCSS + DaisyUI**
- 🔔 Toast notifications with **react-hot-toast**
- 👤 User dashboard with protected routes

---

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/a1shuvo/nextjs-shop.git
   cd nextjs-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root and configure:
   ```env
   AUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   App will be available at [http://localhost:3000](http://localhost:3000).

---

## 🗂️ Route Summary

| Route                     | Description                               | Auth Required |
|----------------------------|-------------------------------------------|---------------|
| `/`                       | Homepage with welcome message             | ❌ No |
| `/products`               | Displays all available products           | ❌ No |
| `/dashboard/add-product`  | Add new product (form)                     | ✅ Yes |
| `/api/products`           | API endpoint to manage products (CRUD)    | ✅ Yes |
| `/api/auth/[...nextauth]` | NextAuth.js authentication API            | ❌ No |

---

## 📌 Tech Stack
- [Next.js 14](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- JSON file as a database

