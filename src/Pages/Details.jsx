import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Detail from "./Detail";

const Details = () => {
    const [detail, setDetail] = useState({});
    const {id} = useParams();
    const allData = useLoaderData();

    const data = allData.data;

    useEffect(()=> {
        const singleData = data.find(aData => aData.id == id);
        setDetail(singleData)

    },[data, id])
    return (
        <div>
            {
                <Detail detail={detail}></Detail>
            }
        </div>
    );
};

export default Details;