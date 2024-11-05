import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import Filters from '../components/Filters';
import HotelCard from '../components/HotelCard';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <>
    <Navbar />
    <main className="mt-20">
      <SearchBox />
      <div className="container mx-auto flex flex-col md:flex-row gap-8 mt-8">
        <aside className="w-full md:w-1/4">
          <Filters />
        </aside>
        <section className="w-full md:w-3/4 space-y-4">
          <HotelCard title="Luxury Hotel & Spa" location="Downtown Area, City Center" price={2999} rating={4.5} image="hotel1.jpg" />
          <HotelCard title="Business Hotel" location="Business District, City Center" price={1999} rating={4.2} image="hotel2.jpg" />
          <HotelCard title="Hotel A" location="Hitech City, City Center" price={4999} rating={4.9} image="hotel3.jpg" />
          <HotelCard title="Hotel B" location="District, Shopping Mall" price={3599} rating={4.5} image="hotel4.jpg" />
          <HotelCard title="Hotel C" location="Business Complex, City Center" price={2999} rating={4.2} image="hotel5.jpg" />
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default Home;