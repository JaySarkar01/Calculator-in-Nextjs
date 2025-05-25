import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full bg-zinc-200 text-black flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-xl bg-slate-50 rounded-4xl shadow-2xl">
        <h1>My Calculator</h1>
        <h1>Here you go!</h1>

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
