import img from "../../assets/sad-face-90 (1).png"

const No = () => {
    return (
        <div>
            <div  data-aos="zoom-in"  data-aos-duration="3000"   >
            <section className="flex items-center  ">

                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-10 space-y-8 text-center sm:max-w-md">
                    <img src={img} className="w-2/4" />
                    <p className="font-bold text-xl text-balance">No comments have <br /> been made here</p>
                </div>

            </section>
        </div>
        </div>
    );
};

export default No;