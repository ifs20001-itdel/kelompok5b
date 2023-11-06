import React from 'react';

const Leader = () => {
    return (
        <div class="text-white body-font" style={{
            background: "#132043"
        }}>
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">Selamat Datang di
                        <br class="hidden lg:inline-block" />Sipaling Kelompok 5B
                    </h1>
                    <p class="mb-8 leading-relaxed">Tempat di mana kami memecahkan masalah matematika dengan tingkat kesulitan yang sama dengan mencoba mengatur jadwal rapat kelompok! Kami mungkin tidak selalu tahu jawabannya, tapi setidaknya kami selalu punya cemilan untuk menyemangati kita. Bergabunglah dalam petualangan kami yang kocak di dunia 5B, di mana kesalahan matematika menjadi hiburan terbesar!"
                        Semoga itu membuat orang tersenyum dan merasa terhibur!</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Before</button>
                        <button class="ml-4 inline-flex text-white-700 bg-white-100 border-0 py-2 px-6 focus:outline-none hover:bg-white-200 rounded text-lg">Next</button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/premium-photo/men-character-sitting-gamer-room-with-gamer-headset_798690-237.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Leader;
