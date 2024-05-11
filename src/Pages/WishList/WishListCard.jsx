const WishListCard = ({Wishlist}) => {
    console.log(Wishlist)
    const {title,image,description,category}=Wishlist||{}

    return (
        <div>
            <div className="card card-side border-2 border-black">
                <figure>
                   <img src={image} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishListCard;