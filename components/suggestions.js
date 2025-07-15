class SuggestionsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="bg-white py-16 px-6 w-full font-sans">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Suggestions</h2>
 
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
 
            ${this.card("Ride", "Go anywhere with Uber. Request a ride, hop in, and go.", "images/ride.png")}
            ${this.card("Reserve", "Reserve your ride in advance so you can relax on the day of your trip.", "images/reserve.png")}
            ${this.card("Flash", "Uber makes same-day item delivery easier than ever.", "images/flash.png")}
            ${this.card("Moto", "Get affordable motorbike rides in minutes at your doorstep.", "images/moto.png")}
            ${this.card("Food", "Order delivery from local restaurants with Uber Eats.", "images/food.png")}
 
          </div>
        </div>
      </section>
    `;
  }
 
  card(title, description, imagePath) {
    return `
       <div class="bg-gray-100 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300 border border-gray-300 h-full">
      <img src="${imagePath}" alt="${title}" class="w-64 h-64 object-contain mb-6">
      <h3 class="text-2xl font-semibold text-gray-900 mb-3">${title}</h3>
      <p class="text-base text-gray-600 mb-5 flex-grow">${description}</p>
      <a href="#" class="text-black font-semibold transition mt-auto">Details</a>
    </div>
    `;
  }
}
 
customElements.define('suggestions-section', SuggestionsSection);