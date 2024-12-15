import Image from "next/image";
import mg from '../public/_O4A8217.jpg';

export default function page() {
    return (
      <div>Hello Contact
        <Image src={mg} alt="image" width={1920} height={980}/>
      </div>
    );
  }
  