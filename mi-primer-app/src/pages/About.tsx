import { Card } from "../components/Presentation/Card";

import ivan from "../assets/ivan.jpg";
import ram from "../assets/ram.jpg";

export function About() {
  return (
    <div className="w-full h-[calc(100vh-5rem)] mt-20 bg-neutral-100 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="flex w-1/2 gap-10 h-fit">
        <Card name="Ivan López" description="Estoy bien wey y menso y wey la gorda" imageUrl={ivan} />
        <Card
          name="Ramses Flores"
          description="Ingeniero en Redes y Soporte en empresa de tecnología DC TECH's"
          imageUrl={ram}
        />
      </div>
    </div>
  );
}
