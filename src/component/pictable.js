import React, { useEffect, useState } from 'react'
import Stopwatch from './stopwatch';

export default function Pictable() {

    const [time, setTime] = useState(new Date());
    const [show, setShow] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [currentTime, setCurrenttime] = useState();
    const [timeLeft, setTimeleft] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 100);
        return () => clearInterval(interval);
    }, []);

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
                {show ? "" : <button type="button" className="btn btn-danger my-3" onClick={toogleShow} >Start Puzzle</button>}


                {show ? <div className='picboard'>

                    <div className='row '   >
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[0]}.jpg`)} alt='' /> </div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[1]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[2]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[3]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[4]}.jpg`)} alt='' /></div>
                    </div>
                    <div className='row' >

                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[5]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[6]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[7]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[8]}.jpg`)} alt='' /> </div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[9]}.jpg`)} alt='' /></div>

                    </div>
                    <div className='row' >
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[10]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[11]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[12]}.jpg`)} alt='' /> </div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[13]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[14]}.jpg`)} alt='' /> </div>

                    </div>
                    <div className='row' >
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[15]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[16]}.jpg`)} alt='' /> </div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[17]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[18]}.jpg`)} alt='' /> </div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[19]}.jpg`)} alt='' /></div>
                    </div>
                    <div className='row' >
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[20]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[21]}.jpg`)} alt='' /> </div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[22]}.jpg`)} alt='' /></div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[23]}.jpg`)} alt='' /> </div>
                        <div className='col pic-cell'><img className='image' src={require(`../assets/rajini/${randomVal[24]}.jpg`)} alt='' /></div>
                    </div>


                </div> : ""}
                <button type="button" className="btn btn-danger mx-3 my-3" onClick={toogleImage} >Show Image</button>

                <div className='result d-flex my-3' >
                    <div className='watch'>
                        {show ? <Stopwatch /> : ""}
                    </div>

                    {showImage ? <div className='images mx-2'>
                        <img style={ {height: '200px', width: '200px'} } src={require(`../assets/rajini/rajini.jpg`)} alt='' />
                    </div> : ""}


                </div>


            </div>
        </>
    )
}
