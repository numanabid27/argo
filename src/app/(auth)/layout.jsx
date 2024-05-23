import ShopLayout4 from "components/layouts/shop-layout-4";
import AuthLayout from "pages-sections/sessions/layout";
export default function Layout({ children }) {
  return (
    <ShopLayout4>
      <AuthLayout>{children}</AuthLayout>
    </ShopLayout4>
  );
}
