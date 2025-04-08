
import locationLogo from './location_53876-25530.avif'


export default function Card(props:any){
    console.log(props)
    let {
        
        img,
        title,
        country,
        googleMapsLink,
        dates,
        description,
    } = props

    
    return (
        <article className='journal-entry' >
            <div className='main-img-container'>
                <img className='main-img' src={img.src} alt={img.alt} />
            </div>
            <div className='main-content'>
                <img className='location' src={locationLogo} alt="" />
                <span className={country}>{country} </span>
                <a href={googleMapsLink}>View in google Map</a>
                <h2>{title}</h2>
                <p>{dates}</p>
                <p>{description}</p>
            </div>
        </article>
    )
}