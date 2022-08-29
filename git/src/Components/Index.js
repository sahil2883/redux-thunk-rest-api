import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { ShowUser,ADD } from '../redux/action';

function Index() {
    const dispatch = useDispatch();
    const val = useSelector((state) => {
        return state.Show.data
    })
   

    useEffect(() => {
        dispatch(ShowUser())
    }, [dispatch])
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    {val.map((e, i) => {
                        return (
                            <div className='col-md-4 mb-5' key={i}>
                                <div className='box-shadow'>
                                    <div className='img'>
                                        <img src={e.image} className="img-fluid"></img>
                                    </div>
                                    <div>
                                        <p>{e.title.substring(0, 25)}</p>
                                        <p>{e.description.substring(0, 55)}</p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='text-primary'>price : RS.{e.price}</p>
                                            <button className='btn btn-danger' onClick={()=>{dispatch(ADD(e))}}>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Index