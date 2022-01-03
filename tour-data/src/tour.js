import React,{useState} from 'react'

const Tour = (props) => {
// const [infoo, setinfoo] = useState("")
const [readMore, setreadMore] = useState(false)
    return(
        <div>
            <img src={props.image} alt={props.name} />
            <footer>
                <div className="info">
                    <h2>{props.name}</h2>
                    <h3>${props.price}</h3>
                </div>
                <div className="desc">
                    <p>
                        
                        {readMore? props.info : `${props.info.substring(0,200)}...`}
                        <button onClick={()=> setreadMore(!readMore)}>
                            {readMore ? 'showLess' : 'showMore'}
                        </button>
                    </p>
                </div>
                <div className="notInterested">
                    <button className="notInterested" onClick={()=>props.removeTour(props.id)}>Not Interested</button>
                </div>
            </footer>
        </div>
    )
}

export default Tour;