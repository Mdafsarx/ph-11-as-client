const CommentCard = ({Com}) => {
    const {name,photo,com}=Com||{}
    return (
            <div className="flex flex-col  p-1 divide-y rounded-2xl shadow-xl border">
                <div className="p-1">
                    <div className="flex flex-col space-x-4 items-center">
                        <div>
                            <img src={photo} alt="" className="object-cover w-12 h-12 rounded-full" />
                        </div>
                        <div>
                            <h4 className="font-bold">{name}</h4>
                        </div>
                    </div>
                </div>
                <div className="p-1 text-sm text-center">
                    <p>{com}</p>
                </div>
            </div>
    );
};

export default CommentCard;