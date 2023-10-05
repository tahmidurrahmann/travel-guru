import { Link } from "react-router-dom";

const Homes = ({ data }) => {
    const { id, name, details, image } = data;
    return (
        <div className="card">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <div className="font-medium">
                    {
                        details.length > 100 ? <p>{details.slice(0, 101)} <Link className="text-blue-600 font-medium text-xl" to={`/place/${id}`}>See more...</Link> </p> : <p>{details}</p>
                    }
                </div>
                <button className="py-3 rounded-xl btn btn-outline font-medium text-white border-none bg-[#F9A51A]">Booking</button>
            </div>
        </div>
    );
};

export default Homes;
