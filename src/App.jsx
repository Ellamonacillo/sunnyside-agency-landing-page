import { MobileProvider } from './context/MobileProvider.jsx'
import Header from './components/Header'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Images from './components/Images'
import Footer from './components/Footer'

const App = () => {
  return (
    <MobileProvider>
      <Header />

      <main>
        <section>
          <Services/>
        </section>

        <section>
          <Testimonials/>
        </section>

        <section>
          <Images />
        </section>
      </main>

      <Footer />
    </MobileProvider>
  )
}

export default App