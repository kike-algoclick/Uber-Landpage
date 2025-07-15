class FooterUber extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-[#2c2c2c] text-white text-sm">
        <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="https://th.bing.com/th/id/R.ee430489d1505483166c19ab9ed00d4e?rik=9h%2bv%2fqv8kXnGKQ&pid=ImgRaw&r=0" alt="Uber" class="h-8 mb-6" />
          </div>
          <div>
            <h4 class="font-bold mb-2">Nuestros servicios</h4>
            <ul class="space-y-1 text-gray-300">
              <li><a href="#" class="hover:underline">Viajes en la ciudad</a></li>
              <li><a href="#" class="hover:underline">Viajes Ciudad a Ciudad</a></li>
              <li><a href="#" class="hover:underline">Envíos</a></li>
              <li><a href="#" class="hover:underline">Fletes</a></li>
              <li><a href="#" class="hover:underline">¿Por qué Uber?</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-2">Gana con Uber</h4>
            <ul class="space-y-1 text-gray-300">
              <li><a href="#" class="hover:underline">Viajes en la ciudad</a></li>
              <li><a href="#" class="hover:underline">Viajes Ciudad a Ciudad</a></li>
              <li><a href="#" class="hover:underline">Envíos</a></li>
              <li><a href="#" class="hover:underline">Fletes</a></li>
              <li><a href="#" class="hover:underline">Uber.Money</a></li>
              <li><a href="#" class="hover:underline">¿Por qué Uber?</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-2">Para negocios</h4>
            <ul class="space-y-1 text-gray-300 mb-4">
              <li><a href="#" class="hover:underline">Envíos</a></li>
              <li><a href="#" class="hover:underline">Fletes</a></li>
              <li><a href="#" class="hover:underline">¿Por qué Uber?</a></li>
            </ul>
            <h4 class="font-bold mb-2">Seguridad</h4>
          </div>
        </div>

        <!-- Sección inferior -->
        <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Izquierda -->
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/InDrive_logo_2022.svg/2560px-InDrive_logo_2022.svg.png" alt="inDrive" class="h-8 mb-4" />
            <div class="flex space-x-4 mb-4">
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733603.png" class="h-6 w-6 rounded-full bg-lime-400 p-1" alt="Web" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" class="h-6 w-6 rounded-full bg-lime-400 p-1" alt="Facebook" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" class="h-6 w-6 rounded-full bg-lime-400 p-1" alt="Instagram" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" class="h-6 w-6 rounded-full bg-lime-400 p-1" alt="TikTok" /></a>
            </div>
            <p class="text-gray-400 text-xs leading-relaxed">
              Uber facilita la conexión entre prestadores de servicios y clientes; no es un servicio de transporte público.
              Uber no es responsable de los acuerdos generados entre usuarios.
            </p>
            <ul class="text-gray-400 text-xs mt-4 space-y-1">
              <li><a href="#" class="hover:underline">Política de privacidad</a></li>
              <li><a href="#" class="hover:underline">Condiciones generales de uso</a></li>
              <li><a href="#" class="hover:underline">Condiciones de uso Uber.City to City</a></li>
              <li><a href="#" class="hover:underline">Condiciones de uso Uber.Freight</a></li>
              <li><a href="#" class="hover:underline">Condiciones de uso Uber.Services</a></li>
            </ul>
          </div>

          <!-- Centro -->
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div class="space-y-1">
              <p><a href="#" class="hover:underline">Sostenibilidad</a></p>
              <p><a href="#" class="hover:underline">Documental</a></p>
              <p><a href="#" class="hover:underline">Libro</a></p>
            </div>
            <div class="space-y-1">
              <p><a href="#" class="hover:underline">Noticias</a></p>
              <p><a href="#" class="hover:underline">Blog</a></p>
              <p><a href="#" class="hover:underline">Carrera</a></p>
              <p><a href="#" class="hover:underline">Nuevas inversiones</a></p>
              <p><a href="#" class="hover:underline">Contactos</a></p>
            </div>
          </div>

          <div class="flex flex-col items-start space-y-4">
            <div class="flex items-center space-x-2">
              <img src="https://flagcdn.com/w40/es.png" class="h-4 w-6 rounded" alt="Es" />
              <span>Es</span>
            </div>
            <div class="flex space-x-2">
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_(black)_SVG.svg" class="h-10" alt="App Store" /></a>
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" class="h-10" alt="Google Play" /></a>
            </div>
            <div class="text-xs text-gray-400">
              <p>© SUOL INNOVATIONS LTD, 2013–2025</p>
              <div class="flex space-x-4 mt-2">
                <a href="#" class="hover:underline">Documentos legales</a>
                <a href="#" class="hover:underline">Cumplimiento</a>
                <a href="#" class="hover:underline">Eliminar cuenta</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-uber', FooterUber);

