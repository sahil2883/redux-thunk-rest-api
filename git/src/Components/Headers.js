import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';

function Headers() {
    const val = useSelector((state) => {
        return state.Add.product
    })

    console.log(val)
    return (
        <div className='bg-dark text-white'>
            <div className='container py-1'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <h2>Logo</h2>
                    </div>
                    <div className='custom'>
                        <ul className='d-flex align-items-center m-0'>
                            <li className='mx-2 px-3 py-2'>Product</li>
                            <Link to="/" className='text-white'><li className='mx-2 px-3 py-2'>Home</li></Link>
                            <div className='d-flex cart'>
                                <Link to="/cart">
                                    <AiOutlineShoppingCart className='icons' />
                                    <div className='text-0'>{val.length}</div>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers;