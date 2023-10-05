import { useEffect, useState } from 'react';
import Homes from './Homes';
import Navbar from '../../shared/Navbar/Navbar';
import './Home.css'

const Home = () => {

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setAllData(data.data))
    }, [])
    
    
    return (
        <div className='min-h-screen background bg-blend-overlay 
        hero-overlay bg-opacity-60 text-white font-medium'>
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto'>
                {
                    allData.map(aData => <Homes key={aData.id} data={aData}></Homes>)
                }
            </div>

        </div>
    )
}

export default Home