import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Detail = ({ detail }) => {
    const { name, details, image } = detail;
    return (
        <div>
            <Navbar></Navbar>
            <div className="card w-96">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                </div>
                <Link to='/'><button className="py-3 px-6 rounded-lg btn btn-outline font-medium text-white border-none bg-[#F9A51A]">Go News</button></Link>
            </div>
        </div>
    );
};

export default Detail;