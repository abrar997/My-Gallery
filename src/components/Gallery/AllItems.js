import Data from "../../data/data";
import Item from "./Item";

export default function AllItems() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
      {Data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
