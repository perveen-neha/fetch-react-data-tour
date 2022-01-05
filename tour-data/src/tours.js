import React from 'react'
import Tour from './tour'

const Tours = (props) =>{
    return(
        <section>
            <div className="title">
            <h1>Our Tours</h1>
            </div>
            <div className="underline"></div>
            <div>
                {
                    props.tours.map((tour) => {
                        return (
                            <Tour key={tour.id}
                                name={tour.name}
                                image={tour.image}
                                info={tour.info}
                                price={tour.price} 
                                // {...tour} to pass name, image, info and price it can be passed like this also instead of breaking and passing all separately

                                id={tour.id}
                                removeTour={props.removeTour}
                            />
                        )
                    })
                }
            </div>
        </section>
    )

}

export default Tours;