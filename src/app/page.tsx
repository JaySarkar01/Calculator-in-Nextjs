import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 flex items-center justify-center">
      <div className="flex flex-col w-xl bg-gradient-to-bl from-gray-900 via-zinc-700 to-gray-900 rounded-4xl shadow-xl shadow-zinc-900  p-8">
        <h1 className="text-5xl text-right">My Calculator</h1>

        <div className="flex">
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>0</p>
            <p>00</p>
            <p>.</p>
          </div>
          <div>
            <p>+</p>
            <p>-</p>
            <p>*</p>
            <p>/</p>
            <p>=</p>
            <p>C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
