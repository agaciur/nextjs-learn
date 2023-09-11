import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductItemType } from "@/app/type";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul data-testid="products-list">
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
