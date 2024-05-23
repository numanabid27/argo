import ShopLayout4 from "components/layouts/shop-layout-4";
import { NotFoundPageView } from "pages-sections/not-found";
export const metadata = {
  title: "404 - AGRO MERCA 2",
  description: "Agro merca Not Found Page View",
};
export default function NotFound() {
  return (
    <ShopLayout4>
      <NotFoundPageView />
    </ShopLayout4>
  );
}
