import toast from "react-hot-toast";
import img from "../../assets/undraw_Subscriber_re_om92.png"

const Newsletter = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        //   const email=e.target.email.value ;
        toast.success('Thankyou for subscribing our newsletter')
        e.target.reset()
    }


    return (
        <div className="flex flex-col md:flex-row items-center mx-5 md:mx-32 bg-white  shadow-2xl my-10 rounded-2xl border" data-aos="zoom-in"  data-aos-duration="3000" data-aos-delay="500">

            <figure className="hidden md:flex md:w-1/2">
                <img src={img} alt="" />
            </figure>
            <div className="divider hidden md:flex lg:divider-horizontal py-10"></div>
            <form onSubmit={handleSubmit} className="md:w-1/2 text-black p-14 space-y-3">
                <div className=" text-center">
                    <h1 className="text-3xl font-bold uppercase">Subscribe now</h1>
                    <p>Subscribe to our email newsletter today to receive updates on the latest news, tutorial and spacial offers</p>
                </div>
                <div className="space-y-3">
                    <input name="email" type="email" placeholder="Email" className="input input-bordered w-full " required />
                    <button type="submit" className="btn btn-block bg-[#E21818] hover:bg-[#4CCD99] text-[#4CCD99] hover:text-[#E21818] border-0 block">Subscribe</button>
                </div>
            </form>

        </div>
    );
};

export default Newsletter;