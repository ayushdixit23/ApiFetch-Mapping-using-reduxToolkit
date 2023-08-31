"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchAPI } from "./redux/slice/fetch"
import Image from "next/image"
// import Image from "next/image"

export default function Home() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  console.log(state)

  // const call = async () => {
  //   const api = await fetch(`https://fakestoreapi.com/products`)
  //   const res = await api.json()
  //   setData(res)
  //   console.log(res[0])
  // }

  // useEffect(() => {
  //   call()
  // })

  if (state.fetchData.isLoading) {
    return <h1 className="text-3xl font-semibold flex justify-center items-center h-screen">Loading...</h1>
  }
  else {
    return (
      <>
        <div

          className='flex flex-col justify-center items-center h-[40vh]' >
          <button onClick={() => dispatch(fetchAPI())} className='text-2xl font-bold p-3 bg-blue-400 text-white'>Fetch Data</button>

        </div>
        <div className="text-black text-base gap-6 grid px-[5%] grid-cols-3">
          {state.fetchData.data && state.fetchData.data.map((datas) => (
            <div key={datas.id}>
              <div className="flex border-2 max-w-[400px] col-span-1 rounded-2xl  p-2 justify-center items-center flex-col">
                <Image src={datas.image} width={100} height={100} className=" object-cover" />
                <div> {(datas.title).slice(0, 30)}</div>
                <div>Price: ${datas.price}</div>
              </div>
            </div>
          ))}
        </div>

      </>
    )
  }

}
