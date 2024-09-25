interface props {
  text: string;
}

export default function Button({ text }: props) {
  return (
    <button className=" bg-[#00A97F] hover:shadow-lg hover:shadow-slate-50/5 w-[193px] h-[38px] font-bold rounded-lg text-lg text-white hover:scale-110 transition-all ease-linear duration-200">
      {text}
    </button>
  );
}
