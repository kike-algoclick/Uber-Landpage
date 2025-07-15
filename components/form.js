class UberInterface extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="w-full h-screen px-6 py-12 font-sans flex items-center">
        <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 w-full">
 
          <div class="flex-1 w-full">
            <h2 class="text-4xl font-bold text-black mb-6 leading-snug">Go anywhere with Uber</h2>
 
            <div class="mb-4">
              <label class="block font-medium text-gray-700 mb-1">Pickup location</label>
              <input type="text" class="w-full border border-gray-300 rounded-lg p-3" placeholder="Enter pickup location" />
            </div>
 
            <div class="mb-4">
              <label class="block font-medium text-gray-700 mb-1">Dropoff location</label>
              <input type="text" class="w-full border border-gray-300 rounded-lg p-3" placeholder="Enter dropoff location" />
            </div>
 
            <div class="flex gap-4 items-center mt-6">
              <button class=" bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">See prices</button>
              <a href="#" class="text-black underline font-semibold hover:text-gray-700 transition">Log in to see your recent activity</a>
            </div>
          </div>
 
          <div class="flex-1 w-full">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_448,w_672/v1712926828/assets/a3/cf8564-e2a6-418c-b9b0-65dd285c100b/original/3-2-ridesharing-new.jpg"
              alt="Uber ride preview"
              class="rounded-xl w-full object-cover"
            />
          </div>
 
        </div>
      </section>
    `;
  }
}
 
customElements.define('uber-interface', UberInterface);