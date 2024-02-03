import './About.css'

function About(){
    return(
       <article className=" relative  grid grid-cols-2">
            <div className="relative">
                <span className="w-[400px] h-[300px] flex bg-[#796fc7] rounded absolute left-[-2rem] top-[-2rem] z-10 animate-cardin duration-1000 " >
                </span>
                <span className="degrade-onda right-[4rem] top-[-8.5rem]"></span>
            </div>
            <div className=" flex flex-col justify-center">
                <div className="relativ mb-2">
                <h1 className="font-ibm text-[5rem] font-bold text-blue-400 opacity-30">
                    Tagy.me
                </h1>
                <h2 className="font-ibmMono font-semibold text-xl text-slate-700">
                    Tu tarjeta inteligente
                </h2>
                </div>
                <p className="font-ibm w-[90%] font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint vel nam laborum id ab magnam sit laudantium dignissimos. Similique, reiciendis vero? Doloremque incidunt asperiores reprehenderit fugit amet, fugiat eius pariatur sunt.
                </p>
            </div>
       </article>
    )
}

export { About }