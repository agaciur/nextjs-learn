import { ProductItemType } from "../../app/type";

type ItemDescriptionProps = {
	product: ProductItemType;
};

export const ItemDescription = ({
	product: { name, category, price },
}: ItemDescriptionProps) => {
	return (
		<div>
			<h3>{name}</h3>
			<p>
				Kategoria:<span>{category}</span>
			</p>
			<p>
				Cena:<span>{price}</span>
			</p>
		</div>
	);
};
