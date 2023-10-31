function Donate() {
    return (
        <div className='bg-slate-50 shadow dark:bg-slate-900'>
            <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="group flex-1 truncate">
                    <div className="flex items-center space-x-3">
                        <h3
                            className="truncate text-sm font-medium text-slate-900 transition-colors dark:text-slate-200"
                        >
                            Donate: 0xa48EB2b5860F5538a4c933e144B3cCaB2dfD99be
                        </h3>
                    </div>
                    <p className="mt-1 truncate text-sm text-slate-500">
                        <marquee direction="left" scrollamount="10">We accept donations on the EVM netwokrs</marquee>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Donate
