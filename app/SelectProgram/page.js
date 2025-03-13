export const metadata = {
    title: "Select A Program",
    description: "Select A Program To Achieve Your Goal",
  };
  
  import Image from 'next/image';
  import './SelectProgram.css';
  import { FaWeightHanging, FaHeart, FaTree, FaRocket, FaCarrot, FaFemale } from 'react-icons/fa';
  import Link from 'next/link';
  
  export default function SelectProgram() {
    return (
      <div className="selectprogram">
        <h2>Select A Program To Fit Your Life Style</h2>
        <p>Tailored workout plans, nutritional guides, and expert tips to transform your life</p>
        <div className="programcontainer">
          <div className="program">
            <FaWeightHanging size={30} color="darkgreen" />
            <h3>Weightness</h3>
            <p>Experience dedicated assistance tailored to your unique requirements and goals</p>
            <Link href="/DietPlan"><button>Explore Our Program</button></Link>
          </div>
          <div className="program">
            <FaCarrot size={30} color="green" />
            <h3>Vegetarian</h3>
            <p>Experience dedicated assistance tailored to your unique requirements and goals</p>
            <Link href="/DietPlan"><button>Explore Our Program</button></Link>
          </div>
          <div className="program">
            <FaFemale size={30} color="darkgreen" />
            <h3>New Mom</h3>
            <p>Experience dedicated assistance tailored to your unique requirements and goals</p>
            <Link href="/DietPlan"><button>Explore Our Program</button></Link>
          </div>
          <div className="program">
            <FaTree size={30} color="darkgreen" />
            <h3>Gluten Free</h3>
            <p>Experience dedicated assistance tailored to your unique requirements and goals</p>
            <Link href="/DietPlan"><button>Explore Our Program</button></Link>
          </div>
          <div className="program">
            <FaHeart size={30} color="darkgreen" />
            <h3>Low Cholesterol</h3>
            <p>Experience dedicated assistance tailored to your unique requirements and goals</p>
            <Link href="/DietPlan"><button>Explore Our Program</button></Link>
          </div>
          <div className="program">
            <FaRocket size={30} color="darkgreen" />
            <h3>Fitness & Performance</h3>
            <p>Experience dedicated assistance tailored to your unique requirements and goals</p>
            <Link href="/DietPlan"><button>Explore Our Program</button></Link>
          </div>
        </div>
      </div>
    );
  }
  