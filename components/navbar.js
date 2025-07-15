class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav class="my-navbar flex justify-start p-3 items-center gap-8 ">
                <div ><img  class="w-15 ml-12"  src="images/Uber-logo.png" alt="img" ></div>
                
                <div class="flex justify-start items-center gap-6 w-210 ">
                <ul class="">Ride</ul>
                <ul>Drive</ul>
                <ul>Business</ul>
                <ul>Uber Eats</ul>
                <ul"> About</ul>
                </div>

                <div class="flex justify-start items-center gap-6">
                <ul class="flex justify-center items-center gap-2">  <span style="font-size:18px ;" class=" material-symbols-outlined">Language</span> EN </ul>
                <ul>Help</ul>
                <ul>Login</ul>
                <ul class="bg-white text-black p-2 rounded-full text-sm font-bold w-18 text-center">Sign Up</ul>
                </div>
            </nav>`;
  }
}

customElements.define("my-navbar", Navbar);
