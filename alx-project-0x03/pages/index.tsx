import Layout from "@/components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to Splash App
      </h1>
      <p className="text-center mt-4 text-gray-600">
        This is the home page content
      </p>
    </Layout>
  );
}
