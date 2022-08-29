import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { ADD } from '../redux/action';
import { Add } from '../redux/reducer/reducers';


const Cart = () => {
    const [total,settotal] = useState(0)
    const dispatch = useDispatch();
    const [vals,setvals] = useState([])
    const val = useSelector((state) => {
        return state.Add.product
    })
    

    const fetch = () =>{
        setvals(val)
    }

    console.log(val)

    const Total = () =>{
        let price = 0
        val.map((e)=>{
            price = (e.val.price*e.qty)+price
        })
        settotal(price)
    }

    const handleClick = (vals) =>{
        dispatch(ADD(vals))
        console.log(val)
    }

    useEffect(()=>{
        Total()
        fetch()
    },[Total,fetch])

    return (
        <>
        {val.length===0?
            <><p>No Data is avaliable</p></>:
        <div>
            <div className='container mt-3 d-flex align-items-center justify-content-end'>
            <p className='text-danger'><strong className='text-primary'>total Amount to Pay:</strong>{Math.ceil(total)}</p>
            </div>
            <div className='container mt-5'>
                {val.map((e, i) => {
                    return (
                        <div key={i} className="mt-4">
                            <div className="row">
                                <div className='col-md-4'>
                                    <img src={e.val.image} className="img-fluid" style={{height:"300px"}} />
                                </div>
                                <div className='col-md-8'>
                                    <p><strong>title:</strong>{e.val.title}</p>
                                    <p><strong>Discription:</strong>{e.val.description}</p>
                                    <p><strong>Price:</strong>{e.val.price}</p>
                                    <p ><strong>Quantity:</strong><small className='mx-2 p-1 bg-dark text-white pointer' onClick={()=>{handleClick(e.val)}}>+</small>{e.qty}<small className='mx-2 pointer  p-1 bg-dark text-white'>-</small></p>
                                    <p><strong>Total Price:</strong>{e.val.price*e.qty}</p>
                                    </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>}
        </>
    )
}

export default Cart