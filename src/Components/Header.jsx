import moment from 'moment/moment';
import img from '../assets/logo.png'
const Header = () => {
    var moments = moment().format("dddd, MMMM D, YYYY"); // require
    

    return (
        <div className='flex flex-col justify-center items-center gap-2 py-3'>
           <div className='logo'>
           <img className='w-[420px]' src={img} alt={img} />
           </div>

           <div>
            <h3 className='text-gray-400'>Journalism Without Fear or Favour</h3>
           </div>
           <div>
           <p className='text-gray-400'>{moments}</p>
           </div>
        </div>
    );
};

export default Header;