import './BestSolution.css'
import Image from 'next/image'
import Link from 'next/link';
import { FaRunning, FaFootballBall, FaUser, FaUserTie } from 'react-icons/fa';
export default function BestSolution(){
    return (
        <>
        <div id='sol' className='BestSolution'>
            <div className='b-left'>
                <h2>Transforming Your Experience With Tailored Solution</h2>
                <p>At PureFit, we prioritize your needs by offering customized services that enchanse your journey . Our commitment to innovation ensures you receieve the bst solutions available</p>
                <div className='left-bottom'>
                    <div>
                        <h5><FaUserTie/></h5>
                        <h3>Customized Nutritionist</h3>
                        <p>Experience dedicated assistance tailored to your uniqe requirements and goals</p>
                        
                    </div>
                    <div>
                        <h5><FaRunning/></h5>
                        <h3>Workout Plan </h3>
                        <p>Experience dedicated assistance tailored to your uniqe requirements and goals</p>
                        
                    </div>
                </div>
                <Link href='/UserDetails'><button>Expolre Our Program</button></Link>
                
            </div>
            <div className='b-right'>
                <Image src="/Assets/6b0e48c3fd7eb54ebad043f021ebd731.png" alt="Fitness Goal"width={450} height={300} />
            </div>
        </div>
        </>
    )
}