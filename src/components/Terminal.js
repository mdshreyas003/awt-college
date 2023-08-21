const Terminal =(e)=>{
    return(
        <div className="flex flex-col bg-terminal mx-1 xs: w-screen xs:mx-3 md:w-6/12 text-white font-mono  my-8 rounded-xl shadow-terminal shadow- pb-10">

            <div className="w-full bg-lightblack h-9 px-4  m-auto flex rounded-t-xl">
                <div className="w-4 h-4 my-2 mx-1 rounded-full bg-red"></div>
                <div className="w-4 h-4 my-2 mx-1 rounded-full bg-yellow"></div>
                <div className="w-4 h-4 my-2 mx-1 rounded-full bg-lightgreen"></div>
            </div>
            {e.text}
        </div>
    )
}

export default Terminal;