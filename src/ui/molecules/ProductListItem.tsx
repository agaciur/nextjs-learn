import { ProductItemType } from "@/app/type";
import { ItemDescription } from "../atoms/ItemDescription";
import { ItemImage } from "../atoms/ItemImage";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<ItemImage />
			<ItemDescription product={product} />
		</li>
	);
};
