import { ProductList } from "@/ui/organisms/ProductList";
import { ProductItemType } from "@/app/type";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "koszulka",
		category: "accessories",
		price: 2450,
		image: {
			alt: "Alt tekst",
			src: "/img1.jpg",
		},
	},
	{
		id: "2",
		name: "koszulka",
		category: "accessories",
		price: 2450,
		image: {
			alt: "Alt tekst",
			src: "/img2.jpg",
		},
	},
	{
		id: "3",
		name: "koszulka",
		category: "accessories",
		price: 2450,
		image: {
			alt: "Alt tekst",
			src: "/img3.jpg",
		},
	},
	{
		id: "4",
		name: "koszulka",
		category: "accessories",
		price: 2450,
		image: {
			alt: "Alt tekst",
			src: "/img4.jpg",
		},
	},
];

export default function Products() {
	return (
		<section>
			<ProductList products={products} />
		</section>
	);
}
