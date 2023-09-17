function MusicPlayer() {
    return (
        <div className='rounded-lg bg-slate-50 shadow dark:bg-slate-900'>
            <div className="flex w-full items-center justify-between space-x-6 p-6">
                <button className="group flex-1 truncate">
                    <div className="flex items-center space-x-3">
                        <h3
                            className="truncate text-sm font-medium text-slate-900 transition-colors dark:text-slate-200"
                        >
                            Music Player
                        </h3>
                    </div>
                    <p className="mt-1 truncate text-sm text-slate-500">
                        <marquee direction="left" scrollamount="10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque cupiditate iusto numquam possimus! Amet aspernatur dolor et ipsa iste iusto laudantium molestiae natus quam quod, rem reprehenderit saepe sapiente?</marquee>
                    </p>
                </button>
            </div>
        </div>
    )
}

export default MusicPlayer
