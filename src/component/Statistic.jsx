import React from 'react';

const Statistic = () => {
    return (
        <div class="text-white body-font" style={{
            background: "#132043"
        }}>
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div class="w-full sm:p-4 px-4 mb-6">
                        <h1 class="title-font font-medium text-xl mb-2 text-white-900">Si Paling Populer!</h1>
                        <div class="leading-relaxed">Ada alasan mengapa orang-orang memilih ini - mari temukan popularitasnya.</div>
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 class="title-font font-medium text-3xl text-white-900">2.7K</h2>
                        <p class="leading-relaxed">Users</p>
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 class="title-font font-medium text-3xl text-white-900">1.8K</h2>
                        <p class="leading-relaxed">Subscribes</p>
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 class="title-font font-medium text-3xl text-white-900">35</h2>
                        <p class="leading-relaxed">Downloads</p>
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 class="title-font font-medium text-3xl text-white-900">4</h2>
                        <p class="leading-relaxed">Products</p>
                    </div>
                </div>
                <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <img class="object-cover object-center w-full h-full" src="https://img.freepik.com/premium-photo/future-digital-technology-game-entertainment-teenager-having-fun-play-vr-virtual-reality-goggle-sport-game-3d-cyber-space-futuristic-neon-colorful-smart-city-background-8k-generate-ai_865659-1581.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698624000&semt=ais" alt="stats" />
                </div>
            </div>
        </div>
    );
}

export default Statistic;
