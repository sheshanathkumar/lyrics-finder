import React, { useEffect, useState } from 'react'
import Stopwatch from './stopwatch';

export default function Pictable() {

    const [time, setTime] = useState(new Date());
    const [show, setShow] = useState(false);
    const [showImage, setShowImage] = useState(false);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(new Date());
    //     }, 500);
    //     return () => clearInterval(interval);
    // }, []);

    let randomVal = Array.from({ length: 25 }, () => Math.floor((Math.random() * 25) + 1));

    console.log(randomVal);

    const toogleShow = () => {
        setShow(true);
        console.log(show);
    }

    const toogleImage = () => {
        setShowImage(true);
    }


    return (
        <>
            <div className='container' >
                <button type="button" className="btn btn-danger my-3" onClick={toogleShow} >Start Puzzle</button>
                <button type="button" className="btn btn-danger mx-3 my-3" onClick={toogleImage} >Show Image</button>



                <div className='puzzle d-flex'>

                    {show ? <div className='picboard'>

                        <div className='row '   >
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[0]}.jpg`)} alt='' /> </div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[1]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[2]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[3]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[4]}.jpg`)} alt='' /></div>
                        </div>
                        <div className='row' >

                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[5]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[6]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[7]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[8]}.jpg`)} alt='' /> </div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[9]}.jpg`)} alt='' /></div>

                        </div>
                        <div className='row' >
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[10]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[11]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[12]}.jpg`)} alt='' /> </div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[13]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[14]}.jpg`)} alt='' /> </div>

                        </div>
                        <div className='row' >
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[15]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[16]}.jpg`)} alt='' /> </div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[17]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[18]}.jpg`)} alt='' /> </div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[19]}.jpg`)} alt='' /></div>
                        </div>
                        <div className='row' >
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[20]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[21]}.jpg`)} alt='' /> </div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[22]}.jpg`)} alt='' /></div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[23]}.jpg`)} alt='' /> </div>
                            <div className='col pic-cell'><img className='image' src={require(`../assets/syam/${randomVal[24]}.jpg`)} alt='' /></div>
                        </div>


                    </div> : ""}


                    {showImage ? <div className='result mx-3'>
                        <img src={require(`../assets/syam/syam.jpg`)} alt='' />
                    </div> : ""}
                </div>

                <div className='watch'>
                    {show ? <Stopwatch /> : ""}
                </div>

            </div>



        </>
    )
}
