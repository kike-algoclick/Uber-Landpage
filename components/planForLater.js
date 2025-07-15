class PlanForLater extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <!-- inicio de mi parte -->
  <section class="px-4 pt-6">
    <h2 class="text-2xl font-bold text-black mb-4">Plan for Later</h2>
  </section>

  <section class="bg-white rounded-2xl p-4 mx-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
    <h2 class="text-lg font-semibold mb-3 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM2 9v7a2 2 0 002 2h12a2 2 0 002-2V9H2z"/>
      </svg>
      <span class="text-sm text-gray-700">Jul 10</span>
    </h2>
    <ul class="space-y-2 text-sm text-gray-700 mt-2">
      <li class="flex items-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z"/>
        </svg>
        Choose your exact pickup time up to 90 days in advance.
      </li>
      <li class="flex items-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm4 5a1 1 0 000 2h6a1 1 0 000-2H7z" clip-rule="evenodd"/>
        </svg>
        Cancel at no charge up to 60 minutes in advance.
      </li>
    </ul>
  </section>

  <!-- Opción de viaje -->
  <section class="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
    <h2 class="text-lg font-semibold mb-1">Drive when you want, make that you need</h2>
    <p class="text-sm text-gray-600 mb-3">Make money on yout schedule with deliveries or rides--or both. You can use your own car or choose a rental through uber. </p>
    <button class="w-full bg-black text-white py-2 rounded-xl text-sm hover:bg-gray-800 focus-visible:outline-none focus:ring-2 focus:ring-black transition">Request Ride</button>
  </section>

  <!-- Reservar el viaje -->
  <section class="flex bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
    <div class="rounded-xl overflow-hidden aspect-video mb-3">
      <img src="./images/Img1.png" alt="Schedule" class="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]" />
    </div>
    
    <div class=" grid w-175 text-center justify-center items-center">
    <h2 class="text-lg font-semibold mb-1">The Uber you know, remagined for business</h2>
    <p class="text-sm text-gray-600 mb-3">User for Business is a platform for managing global rides and meals, and local delivers, for companies of any size</p>
    <button class="w-full bg-black text-white py-2 rounded-xl text-sm hover:bg-gray-800 focus-visible:outline-none focus:ring-2 focus:ring-black transition">Get started</button>
    </div>
  </section>

  <!-- Conduce y gana -->
  <section class="flex justify-center bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
    <div class="rounded-xl overflow-hidden aspect-video mb-3">
      <img src="./images/Img2.png" alt="Drive" class="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]" />
    </div>

    <div class="grid w-175 text-center justify-center items-center">
    <h2 class="text-lg font-semibold mb-1">Drive with Uber</h2>
    <p class="text-sm text-gray-600 mb-3">Earn money driving on your own schedule</p>
    <button class="w-full bg-black text-white py-2 rounded-xl text-sm hover:bg-gray-800 focus-visible:outline-none focus:ring-2 focus:ring-black transition">Get Started</button>
    </div>
  </section>

</main>
    `;
  }
}

customElements.define('plan-for-later', PlanForLater);