import Image from "next/image";
import Text from "./Text";

const Card = () => {
  return (
    <div className="h-96 w-80 overflow-hidden rounded-lg bg-green-100 shadow-lg">
      <div className="h-52 w-full bg-slate-400 "></div>
      <div className="p-4">
        <Text type="h3">Ini judul Card</Text>
        <Text type="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nobis et ex, animi repudiandae recusand</Text>
      </div>
    </div>
  );
};

export default Card;
