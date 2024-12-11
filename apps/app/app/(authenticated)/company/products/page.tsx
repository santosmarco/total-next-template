"use client";

import { getProducts } from "@/app/actions/company/products/get";
import { DashboardWrapper } from "@/app/components/dashboard-wrapper";
import { useQuery } from "@tanstack/react-query";
import { ShoppingBasketIcon } from "lucide-react";

export default function ProductsPage() {
  const {
    data: products,
    error: getProductsError,
    isLoading: isLoadingProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (getProductsError) {
    return <div>Error</div>;
  }

  if (isLoadingProducts) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardWrapper
      title="Products"
      items={products}
      renderItem={() => <div>Product</div>}
      onCreateClick={() => {}}
      empty={{
        text: "No products found",
        icon: <ShoppingBasketIcon />,
      }}
    />
  );
}
