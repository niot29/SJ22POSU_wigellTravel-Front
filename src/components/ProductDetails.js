import React from "react";
import "../style/shoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductDetails = ({
    visibilty,
	products,
	onProductRemove,
	onClose,
	onQuantityChange,
}) => {
    return (
		<div
			className="modal"
			style={{
				display: visibilty
					? "block"
					: "none",
			}}>
			<div className="shoppingCart">
				<div className="header">
					<h2>Product Details</h2>
					<button
						className="btn close-btn"
						onClick={onClose}>
						<AiFillCloseCircle
							size={30}
						/>
					</button>
				</div>
				<div className="cart-products">
					{products.length === 0 && (
						<span className="empty-text">
							Your basket is
							currently empty
						</span>
					)}
					
					
					{products.length > 0 && (
						<button className="btn checkout-btn">
							Proceed to checkout
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProductDetails