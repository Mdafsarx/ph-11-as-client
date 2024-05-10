const RecentCard = ({blog}) => {
    const {title,image,description,category,primary_color,secondary_color}=blog||{}
    
    return (
        <div>
            <div className={`card w-96  bg-gradient-to-r from-[${primary_color}] to-[${secondary_color}] shadow-xl p-2`}>
                <figure className="px-6 pt-3">
                    <img src={image}  className="rounded-2xl h-52 w-full" />
                </figure>
                <div className="p-3 space-y-2 pl-7">
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