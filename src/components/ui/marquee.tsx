
export default function Marquee({ items }: { items: {label: string, icon: React.ReactElement}[]; }) {
  return (
    <div className="flex justify-center w-full bg-transparent p-8 h-[calc(50vh)] md:h-[calc(70vh)] items-center relative overflow-hidden">
      <>
          <div className="absolute top-1/5 md:top-1/10 right-20 w-12 h-12 bg-pink-500 border-4 border-black transform rotate-45"></div>
          <div className="hidden md:block absolute bottom-20 left-16 w-8 h-16 bg-cyan-400 border-4 border-black transform -rotate-12"></div>
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-400 border-2 border-black rounded-full"></div>
          <div className="absolute w-8 h-16 bottom-1/4 right-1/4 md:bottom-1/5 md:right-1/5 bg-emerald-600 border-4 border-black transform rotate-115 translate-x-8 translate-y-6"></div>
          <div className="relative top-1/5 left-1/3">
            <div className="hidden md:block absolute w-14 h-20 bg-indigo-500 border-4 border-black transform rotate-15 top-2/3 left-1/3 md:translate-x-6 md:translate-y-4 md:shadow-[4px_4px_0px_0px_#000000]"></div>
            <div className="absolute w-10 h-10 bg-amber-400 border-4 border-black transform -rotate-30 top-2/3 left-1/3 md:translate-x-2 md:translate-y-12 md:shadow-[3px_3px_0px_0px_#000000]"></div>
          </div>

      </>
      <div className="relative w-20 mr-6 md:mr-0 md:w-24 h-40">
        <div className="absolute w-16 h-32 bg-red-500 border-4 border-black transform rotate-12 md:shadow-[6px_6px_0px_0px_#000000]"></div>
            <div className="absolute w-12 h-24 bg-blue-600 border-4 border-black transform -rotate-6 translate-x-4 translate-y-2 md:shadow-[4px_4px_0px_0px_#000000]"></div>
            <div className="hidden md:block absolute w-8 h-16 bg-yellow-400 border-4 border-black transform rotate-45 translate-x-8 translate-y-6 shadow-[3px_3px_0px_0px_#000000]"></div>
            <div className="absolute w-6 h-6 bg-pink-500 border-2 border-black rounded-full transform translate-x-2 translate-y-8"></div>
            <div className="absolute w-4 h-4 bg-green-500 border-2 border-black transform rotate-45 translate-x-12 translate-y-12"></div>
      </div>
        <div className="relative flex w-full overflow-x-hidden overflow-y-hidden bg-white border-8 border-black mx-2 transform -rotate-1">
          <div className="animate-marquee whitespace-nowrap py-5 md:py-12">
            {items.map((item, index) => {
              return (
                <div key={index} className="mx-4 text-3xl md:text-4xl inline-flex gap-2 ">
                  <span className="text-3xl md:text-4xl">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-5 md:py-12">
            {items.map((item, index) => {
              return (
                <div key={index} className="mx-4 text-3xl md:text-4xl inline-flex gap-2">
                  <span className=" text-3xl md:text-4xl">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      <div className="relative w-24 h-40">
        <div className="absolute w-20 h-28 bg-purple-600 border-4 border-black transform -rotate-8 md:shadow-[6px_6px_0px_0px_#000000]"></div>
            <div className="absolute w-14 h-20 bg-orange-500 border-4 border-black transform rotate-15 translate-x-6 translate-y-4 md:shadow-[4px_4px_0px_0px_#000000]"></div>
            <div className="absolute w-10 h-10 bg-cyan-400 border-4 border-black transform -rotate-30 translate-x-2 translate-y-12 md:shadow-[3px_3px_0px_0px_#000000]"></div>
            <div className="hidden md:block absolute w-6 h-12 bg-lime-400 border-2 border-black transform rotate-60 translate-x-16 translate-y-8"></div>
      </div>
    </div>
  )
}
