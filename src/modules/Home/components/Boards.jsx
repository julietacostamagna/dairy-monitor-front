function Boards() {
    return (
        <>
            <div className='text-center text-zinc-900 dark:text-white bg-white dark:bg-gray-800 rounded-lg shadow-gray-500 shadow-md drop-shadow-md p-3 py-10 w-full lg:w-[32%] mb-4'>
                <p className="text-xl">Clientes Activos</p>
                <p style={{fontSize: '40px'}} className="m-3">231</p>
            </div>
            <div className='text-center text-zinc-900 dark:text-white  bg-white dark:bg-gray-800 rounded-lg shadow-gray-500 shadow-md drop-shadow-md p-3 py-10 w-full lg:w-[32%] mb-4'>
                <p className="text-xl" >Establecimientos en alarma</p>
                <p style={{fontSize: '40px'}} className="m-3">17</p>
            </div>
            <div className='text-center text-zinc-900 dark:text-white  bg-white dark:bg-gray-800 rounded-lg shadow-gray-500 shadow-md drop-shadow-md p-3 py-10 w-full lg:w-[32%] mb-4'>
                <p className="text-xl">Tareas pendientes​</p>
                <p style={{fontSize: '40px'}} className="m-3"> 4</p>
            </div>
        </> 
    );
}
export default Boards
