import Link from 'next/link'
import './TimeOfFamily.css'
export default function TimeOfFamily(){
    return (
        <>
        <div className='TimeOfFamily'>
            <h2>It's time to be part of our family, don't miss the opportunity to be fitter and healthier</h2>
            <Link href='/UserDetails'><button>Explore Our Program</button></Link>        </div>
        </>
    )
}