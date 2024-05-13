import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import { motion } from "framer-motion";

const RecentCard = ({ blog }) => {
    const { title, image, description, category } = blog || {};
    const { User } = useAuth()
    const axiosUrl = useAxiosUrl();
    const wishlist = { title, image, description, category, email: User?.email }

    const handleWishlist = () => {
        if (!User) return toast.error('Login first')
        axiosUrl.post('/wishlist', wishlist)
            .then(data => { if (data.data.insertedId) toast.success('Successfully added') })
            .catch(error => console.log(error))
    }

    return (
        <motion.div whileTap={{ scale: 1.2 }}  >
            <div data-aos="zoom-in"  data-aos-duration="3000" data-aos-delay="500">
                <div className={`card w-96 shadow-xl p-2`}>
                    <figure className="px-6 pt-3">
                        <img src={image} className="rounded-2xl h-52 w-full" />
                    </figure>
                    <div className="p-3 space-y-2 pl-7">
                        <h2 className="text-xl font-bold text-pink-500">{title}</h2>
                        <h2><span className="font-bold">Category:</span> {category}</h2>
                        <p>{description}...</p>
                        <div className="flex items-center gap-3">
                            <button className="btn bg-[#E21818] border-0 text-white btn-sm">Details</button>
                            <button className="btn bg-[#4CCD99] border-0 text-white btn-sm" onClick={handleWishlist}>Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div >
            );
};

            export default RecentCard;