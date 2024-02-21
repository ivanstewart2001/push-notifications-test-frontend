import { useRouter } from "next/router";

export default function Page1() {
  const router = useRouter();
  return (
    <div>
      {" "}
      <h1>Page 1</h1> <button onClick={() => router.push("/")}>Home</button>
      <button onClick={() => router.push("/page1")}>Page 1</button>
      <button onClick={() => router.push("/page2")}>Page 2</button>
    </div>
  );
}
