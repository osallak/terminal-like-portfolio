export default function BorderFrame() {
  return (
    <div className="w-full h-full p-10">
      <div className="relative w-full h-full ">
        <div
          className="
        absolute 
        w-full h-full
        border-2 border-[#6fc0ba] 
        rounded-md
        shadow-[0_0_2px_#005b8e,inset_0_0_2px_#005b8e]
        z-10
      "
        />
        <div
          className="
        absolute 
        left-[20px] top-[10px]
        right-[20px] bottom-[10px]
        border-2 border-[#6fc0ba] 
        rounded-md
        shadow-[0_0_2px_#005b8e,inset_0_0_2px_#005b8e]
        z-20
      "
        >
          {/* Here Goes Magic*/}
        </div>
      </div>
    </div>
  );
}
