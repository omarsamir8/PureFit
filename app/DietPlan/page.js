export const metadata = {
    title: "Diet Plan",
    description: "Get Diet Plan Suitable For You",
  };

import Image from 'next/image';
import './dietplan.css'
export default function DietPlan(){
    return (
        <>
        <div className='plan'>
            <h2>Here's the ultimate diet plan to help you lose weight offortlessly.</h2>
            <p style={{color:"gray"}}>Day 1</p>
            <div className='Dayscontainer'>
                <div className='day1'>
                    <h3>BreakFast</h3>
                    <div className='foodcontainer'>
                        <Image src='/Assets/b5912194947ba4d445aaaeae876abf60.jpeg' alt='foodimg' width={300} height={300}/>
                        <div className='f-right'>
                            <h3>Egg&Rice</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            <h4>250 Calories</h4>
                            <ul>
                                <li>2 Egg</li>
                                <li>50g Rice</li>
                                <li>1 Cucumber</li>
                                <li>1 Tomato</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='day1'>
                    <h3>Lunch</h3>
                    <div className='foodcontainer'>
                        <Image src='/Assets/9f61fa76fe48b5210ab2a00b5458ccb0.png' alt='foodimg' width={300} height={300}/>
                        <div className='f-right'>
                            <h3>Grilled Chicken Breast</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            <h4>350 Calories</h4>
                            <ul>
                                <li>2 Chicken</li>
                                <li>50g Rice</li>
                                <li>1 Cucumber</li>
                                <li>1 Tomato</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='day1'>
                    <h3>Snack</h3>
                    <div className='foodcontainer'>
                        <Image src='/Assets/5aca2188af1f8722f851772c3ba08919.png' alt='foodimg' width={300} height={300}/>
                        <div className='f-right'>
                            <h3>Fruits</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            <h4>250 Calories</h4>
                            <ul>
                                <li>2 Egg</li>
                                <li>50g Rice</li>
                                <li>1 Cucumber</li>
                                <li>1 Tomato</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='day1'>
                    <h3>Dinner</h3>
                    <div className='foodcontainer'>
                        <Image src='/Assets/6d8ea96ebd2561db1194b725c8f2aa2f.png' alt='foodimg' width={300} height={300}/>
                        <div className='f-right'>
                            <h3>Grilled Salmon Fillet</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            <h4>250 Calories</h4>
                            <ul>
                                <li>70g Salmon</li>
                                <li>50g Rice</li>
                                <li>30g Brocly</li>
                                <li>Cucumber</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}