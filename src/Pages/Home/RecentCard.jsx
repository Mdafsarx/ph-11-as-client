const RecentCard = ({blog}) => {
    const {title,image,description,category,primary_color,secondary_color}=blog||{}
    return (
        <div>
            <div className={`card  bg-gradient-to-r from-[${primary_color}] to-[${secondary_color}] shadow-xl p-2`}>
                <figure className="px-6 pt-3">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"  className="rounded-2xl" />
                </figure>
                <div className="p-3 space-y-2 px-10">
                    <h2 className="text-xl font-bold text-pink-500">{title}</h2>
                    <h2><span className="font-bold">Category:</span> {category}</h2>
                    <p>{description}...</p>
                    <div className="flex items-center gap-3">
                        <button className="btn bg-[#E21818] border-0 text-white btn-sm">Details</button>
                        <button className="btn bg-[#4CCD99] border-0 text-white btn-sm">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentCard;