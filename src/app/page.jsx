import ShopLayout4 from "components/layouts/shop-layout-4";
import FashionTwoPageView from "pages-sections/fashion-2/page-view/fashion-2";
import IndexPageView from "pages-sections/landing/page-view";
export const metadata = {
  title: "Argo Merca",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};
export default function IndexPage() {
  return (
    <ShopLayout4>
      <FashionTwoPageView />
    </ShopLayout4>
  );
}
