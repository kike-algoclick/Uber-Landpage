class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav class="my-navbar flex justify-start p-3 items-center gap-8 ">
                <div ><img  class="w-15 ml-12"  src="images/Uber-logo.png" alt="img" ></div>
                
                <div class="flex justify-start items-center gap-6 w-210 ">
                <ul class="hover:bg-gray-700 text-withe px-3 py-1 rounded-full cursor-pointer transition-all duration-200">Ride</ul>
                <ul class="hover:bg-gray-700 text-withe px-3 py-1 rounded-full cursor-pointer transition-all duration-200">Drive</ul>
                <ul class="hover:bg-gray-700 text-withe px-3 py-1 rounded-full cursor-pointer transition-all duration-200">Business</ul>
                <ul class="hover:bg-gray-700 text-withe px-3 py-1 rounded-full cursor-pointer transition-all duration-200">Uber Eats</ul>
                <ul class="hover:bg-gray-700 text-white px-3 py-1 rounded-full cursor-pointer transition-all duration-200 flex items-center gap-2"> About
                <span><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span></ul>
                </div>

                <div class="flex justify-start items-center gap-6">
                <ul class="flex justify-center items-center gap-2">  <span style="font-size:18px ;" class=" material-symbols-outlined  hover:bg-gray-700 text-withe px-3 py-1 rounded-full cursor-pointer transition-all duration-200">Language</span> EN </ul>
                <ul class="hover:bg-gray-700 text-withe px-3 py-1 rounded-full cursor-pointer transition-all duration-200">Help </ul>
                <ul class="hover:bg-gray-700 text-withe px-3 py-1 rounded-full cursor-pointer transition-all duration-200">Login</ul>
                <ul class="bg-white text-black p-2 rounded-full text-sm font-bold w-18 text-center">Sign Up</ul>
                </div>
            </nav>`;
  }
}

customElements.define("my-navbar", Navbar);
