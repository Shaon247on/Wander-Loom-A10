import { Outlet } from 'react-router-dom';
import Header from '../Sections/Header';
import Footer from '../Sections/Footer';

const Root = () => {
    return (
        <div className='relative'>
            <div className='z-10 relative'>
                <Header></Header>
            </div>
            <div className='z-0 relative'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;