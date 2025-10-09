import { cookies } from "next/headers";
import Image from "next/image";

const fetchItems = async () => {
  const { signal } = new AbortController();
  const res = await fetch("https://dog.ceo/api/breeds/image/random",{
    // signal,
    cache: "force-cache",
  });
  const items = await res.json();
  console.log(items)
  return items;
};

export default async function Home() {
  console.log("刷新了");
  // await cookies()
  const items1 = await fetchItems();
  const items2 = await fetchItems();
  const items3 = await fetchItems();
  return (
    <div>
      <Image
        src={items1?.message || ""}
        width={300}
        height={300}
        alt=""
      />
      <Image
        src={items2?.message || ""}
        width={300}
        height={300}
        alt=""
      />
      <Image
        src={items3?.message || ""}
        width={300}
        height={300}
        alt=""
      />
    </div>
  );
}
