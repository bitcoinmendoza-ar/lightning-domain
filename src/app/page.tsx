import Link from 'next/link';
import Image from 'next/image';
import { TwitterLogoIcon, DiscordLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { Bitcoin, Zap, Globe, Users, BookOpen, MapPin, Calendar, WineIcon as GlassWine } from "lucide-react"


import { Button } from '~/components/ui/button';

export default function Home() {
  return (
    // <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center p-4">
    //   <div className="max-w-4xl w-full space-y-12">
    //     <Image className="mx-auto" src="/logotipo.svg" alt="LaWallet.io logo" width={165} height={30} />

    //     <main className="space-y-12">
    //       <section className="text-center max-w-2xl mx-auto">
    //         <h1 className="text-3xl font-semibold mb-6">Todas tus herramientas en un solo lugar</h1>
    //         <p className="mb-8 text-muted-foreground">
    //           Gestioná pagos, identidades y comunidad fácilmente con LaWallet.app. Con la ayuda de Bitcoin, Lightning
    //           Network y Nostr en una plataforma diseñada para simplificarlo todo.
    //         </p>
    //         <div className="flex flex-col sm:flex-row justify-center gap-4">
    //           <Button
    //             asChild
    //             size="lg"
    //             variant="outline"
    //             className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
    //           >
    //             <Link href="https://app.lawallet.ar/login">Ingresá a tu billetera</Link>
    //           </Button>
    //           <Button
    //             asChild
    //             size="lg"
    //             className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
    //           >
    //             <Link href="https://app.lawallet.ar/signup">Creá una ahora</Link>
    //           </Button>
    //         </div>
    //       </section>
    //     </main>

    //     <footer className="text-center text-muted-foreground">
    //       <div className="flex justify-center gap-1 mb-4">
    //         <Button size="icon" variant="link" asChild>
    //           <Link title="X/Twitter" href="https://twitter.com/lawalletok" target="_blank" rel="noopener noreferrer">
    //             <TwitterLogoIcon />
    //           </Link>
    //         </Button>
    //         <Button size="icon" variant="link" asChild>
    //           <Link title="Github" href="https://github.com/lawalletio" target="_blank" rel="noopener noreferrer">
    //             <GitHubLogoIcon />
    //           </Link>
    //         </Button>
    //         <Button size="icon" variant="link" asChild>
    //           <Link title="Discord" href="https://discord.gg/lawallet" target="_blank" rel="noopener noreferrer">
    //             <DiscordLogoIcon />
    //           </Link>
    //         </Button>
    //       </div>
    //       <div className="flex justify-center items-center">
    //         <p>&copy; 2024</p>
    //         <Button asChild variant="link">
    //           <Link href="https://lawallet.io/" title="LaWallet Labs">
    //             lawallet.io
    //           </Link>
    //         </Button>
    //       </div>
    //     </footer>
    //   </div>
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#F7931A_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Bitcoin Mendoza</h1>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mb-8">
              Una comunidad mendocina apasionada por la libertad financiera, la descentralización y el futuro de nuestra
              región
            </p>
            {/* <Link href="#quienes-somos" scroll={true}>
                <button className="bg-[#F7931A] hover:bg-[#E68A19] text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300">
                  Explora Nuestra Misión
                </button>
              </Link> */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-black hover:bg-[#F7931A] hover:text-white text-white font-bold py-3 px-12 rounded-md shadow-lg hover:shadow-xl transition duration-300"
              >
                <Link href="https://app.bitcoinmendoza.ar/login">Ingresá a tu billetera</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-[#F7931A] hover:bg-black hover:text-white text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300"
              >
                <Link href="https://app.bitcoinmendoza.ar/signup">Creá una ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mendoza Section */}
      <section className="w-full py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <MapPin className="text-[#F7931A] mr-2" />
                <h2 className="text-3xl font-bold text-white">Mendoza, Argentina</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                En la capital del vino argentino, estamos construyendo una comunidad Bitcoin sólida y vibrante. Así como
                nuestros viñedos producen algunos de los mejores Malbecs del mundo, cultivamos la adopción de Bitcoin
                como una alternativa financiera para nuestra región.
              </p>
              <p className="text-gray-300 text-lg">
                Bitcoin Mendoza nace como respuesta a los desafíos económicos que enfrenta nuestra provincia y el país,
                ofreciendo una alternativa descentralizada y resistente a la inflación.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F7931A]/30 to-black/80 z-10"></div>
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F7931A]/30 to-black/80 z-20">
                  <div className="text-center">
                    {/* <Image src={'/images/btc-mendoza.png'} alt="btc mendoza" width={600} height={300} /> */}
                    <GlassWine className="text-white h-16 w-16 mx-auto mb-4" />
                    <p className="text-white text-xl font-bold">Donde el Bitcoin y el vino se encuentran</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="quienes-somos" className="w-full py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Quiénes Somos</h2>
              <p className="text-gray-300 text-lg mb-6">
                Somos mendocinos comprometidos con un futuro descentralizado, creyendo en la soberanía individual y
                Bitcoin como una herramienta para el cambio local y global.
              </p>
              <p className="text-gray-300 text-lg">
                Nuestra comunidad reúne a entusiastas, desarrolladores, empresarios locales y defensores que comparten
                una visión de libertad financiera a través de la tecnología Bitcoin.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <div className="bg-black p-6 rounded-full mb-4">
                    <Bitcoin size={48} className="text-[#F7931A]" />
                  </div>
                  <span className="text-white text-center">Descentralizado</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-black p-6 rounded-full mb-4">
                    <Zap size={48} className="text-[#F7931A]" />
                  </div>
                  <span className="text-white text-center">Lightning Network</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-black p-6 rounded-full mb-4">
                    <Globe size={48} className="text-[#F7931A]" />
                  </div>
                  <span className="text-white text-center">Local y Global</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-black p-6 rounded-full mb-4">
                    <Users size={48} className="text-[#F7931A]" />
                  </div>
                  <span className="text-white text-center">Comunidad Mendocina</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Qué Hacemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300">
              <BookOpen className="text-[#F7931A] mb-4 h-12 w-12" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educar</h3>
              <p className="text-gray-700">
                Educamos sobre Bitcoin y su tecnología, con talleres y eventos adaptados a la realidad económica de
                Mendoza y Argentina.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300">
              <Users className="text-[#F7931A] mb-4 h-12 w-12" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conectar</h3>
              <p className="text-gray-700">
                Conectamos a mendocinos interesados en Bitcoin para compartir ideas, colaborar en proyectos y fortalecer
                la economía local.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300">
              <Globe className="text-[#F7931A] mb-4 h-12 w-12" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Promover</h3>
              <p className="text-gray-700">
                Promovemos la adopción de Bitcoin en comercios locales, bodegas y empresas mendocinas para crear un
                ecosistema económico resiliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eventos en Mendoza */}
      <section className="w-full py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <Calendar className="text-[#F7931A] mb-4 h-12 w-12" />
            <h2 className="text-3xl font-bold text-white mb-4">Eventos en Mendoza</h2>
            <p className="text-gray-300 text-lg max-w-2xl">
              Nos reunimos regularmente en diferentes puntos de la ciudad para compartir conocimientos, experiencias y
              construir la comunidad Bitcoin mendocina.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-black border border-gray-800 rounded-lg p-6 max-w-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-[#F7931A] text-white text-xl font-bold rounded-lg w-14 h-14 flex items-center justify-center mr-4">
                  23
                </div>
                <div>
                  <h3 className="text-white font-bold">Bitcoin Pizza Day Mendoza</h3>
                  <p className="text-gray-400">23 de Mayo 2025, 19:00 - Secret Location</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Celebra el histórico día en que se realizó la primera compra con Bitcoin. Únete a la comunidad Bitcoin Mendoza para una noche especial con pizza, vino mendocino y charlas sobre la evolución de los pagos con Bitcoin. La ubicación exacta será revelada a los asistentes confirmados. ¡No te pierdas este evento exclusivo!
              </p>
              <button disabled className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md transition duration-300">
                Próximamente...
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="w-full py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Por Qué Existimos</h2>
              <p className="text-gray-300 text-lg mb-8">
                En un país con inflación crónica y restricciones cambiarias, Bitcoin ofrece a los mendocinos una
                alternativa para proteger el valor de su trabajo. Resistimos la centralización, empoderamos a los
                individuos y construimos una Mendoza donde el dinero es libre y justo.
              </p>
              <div className="bg-[#F7931A] p-6 rounded-lg">
                <p className="text-white text-xl font-bold italic">
                  "Bitcoin no es solo dinero, es libertad para Mendoza y Argentina."
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F7931A] to-black opacity-20 rounded-lg"></div>
                <div className="relative bg-black border border-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Nuestros Principios</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#F7931A] mr-2">•</span>
                      <span>Descentralización sobre control centralizado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F7931A] mr-2">•</span>
                      <span>Soberanía individual y privacidad</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F7931A] mr-2">•</span>
                      <span>Desarrollo económico local</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F7931A] mr-2">•</span>
                      <span>Inclusión financiera para todos los mendocinos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F7931A] mr-2">•</span>
                      <span>Principios de dinero sólido</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#F7931A] to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Nuestra Visión para Mendoza</h2>
          <p className="text-white text-lg max-w-3xl mx-auto mb-10">
            Buscamos convertir a Mendoza en un referente de adopción Bitcoin en Argentina y Latinoamérica, fomentando
            una economía local descentralizada y resistente a la censura donde los mendocinos tienen control sobre su
            futuro financiero.
          </p>
          <Link target="_blank" href="https://t.me/bitcoinmendoza/">
            <Button className="w-full sm:w-auto bg-black hover:bg-gray-900 hover:text-[#F7931A] text-white font-bold py-3 px-12 rounded-md shadow-lg hover:shadow-xl transition duration-300">
              Únete a Bitcoin Mendoza
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <Bitcoin className="text-[#F7931A] mr-2 h-6 w-6" />
              <span className="text-white font-bold text-xl">Bitcoin Mendoza</span>
            </div>
            <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link href="https://t.me/bitcoinmendoza/" className="text-gray-400 hover:text-[#F7931A] transition duration-300">
                Contacto
              </Link>
              {/* <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-[#F7931A] transition duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#F7931A] transition duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
              <Link href="#" className="text-gray-400 hover:text-[#F7931A] transition duration-300">
                Recursos Bitcoin
              </Link> */}
            </nav>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-center">Construido por Bitcoiners mendocinos, para Mendoza y el mundo.</p>
          </div>
        </div>
      </footer>
    </div >
    // </div >
  );
}
