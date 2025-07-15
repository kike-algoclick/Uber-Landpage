class QRSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="bg-gray-50 py-12 px-6 w-full font-sans">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-800 mb-10">It’s easier in the apps</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- App del pasajero -->
            <div class="bg-white rounded-2xl shadow-md p-6 flex items-center transition-transform hover:scale-105 duration-300 border border-gray-200">
              <img src="./images/QR1.png" alt="QR Uber App" class="w-48 h-28 object-contain mr-6">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Download the Uber app</h3>
                <p class="text-sm text-gray-500">Scan to download</p>
              </div>
              <div class="ml-auto text-green-500">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <!-- App del conductor -->
            <div class="bg-white rounded-2xl shadow-md p-6 flex items-center transition-transform hover:scale-105 duration-300 border border-gray-200">
              <img src="./images/QR1.png" alt="QR Driver App" class="w-48 h-28 object-contain mr-6">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Download the Driver app</h3>
                <p class="text-sm text-gray-500">Scan to download</p>
              </div>
              <div class="ml-auto text-green-500">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('qr-section', QRSection);