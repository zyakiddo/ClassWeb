import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';
import TextType from './TextType';
import TextPressure from './TextPressure';
import AnimatedContent from './AnimatedContent';



// --- DAFTAR DATA SISWA ---
const studentsData = [
  { id: 1, name: "I'ZAZ", role: "XII RPL 3 STUDENT", image: "/izaz.jpg", ig: "https://www.instagram.com/izzwfdlh/" },
  { id: 2, name: "HILMAN", role: "XII RPL 3 STUDENT", image: "/hilman.jpg", ig: "https://www.instagram.com/hilmnsprdn/" },
  { id: 3, name: "FAJAR", role: "XII RPL 3 STUDENT", image: "/fajar.jpg", ig: "https://www.instagram.com/mhfjrrrr_/" },
  { id: 4, name: "RYICHA", role: "XII RPL 3 STUDENT", image: "/rika.jpg", ig: "https://www.instagram.com/_ryichaa/" },
  { id: 5, name: "AGUNG", role: "XII RPL 3 STUDENT", image: "/agung.jpg", ig: "https://www.instagram.com/agung__ss/" },
  { id: 6, name: "DELIA", role: "XII RPL 3 STUDENT", image: "/delia.jpg", ig: "https://www.instagram.com/ry.dla/" },
  { id: 7, name: "IRFAN", role: "XII RPL 3 STUDENT", image: "/irfan.jpg", ig: "https://www.instagram.com/irfnmln77/" },
  { id: 8, name: "AYU", role: "XII RPL 3 STUDENT", image: "/ayu.jpg", ig: "https://www.instagram.com/rhayupuji.l/" },
  { id: 9, name: "FAIZ", role: "XII RPL 3 STUDENT", image: "/faiz.jpg", ig: "https://www.instagram.com/alfariz1927/" },
  { id: 10, name: "PUTRI", role: "XII RPL 3 STUDENT", image: "/putri.jpg", ig: "https://www.instagram.com/aulyaaa_7/" },
  { id: 11, name: "YUNUS", role: "XII RPL 3 STUDENT", image: "/yunus.jpg", ig: "https://www.instagram.com/ynussee/" },
  { id: 12, name: "NISA", role: "XII RPL 3 STUDENT", image: "/nisa.jpg", ig: "https://instagram.com/nisa" },
  { id: 13, name: "SYAFI'I", role: "XII RPL 3 STUDENT", image: "/pii.jpg", ig: "https://www.instagram.com/syfhz._/" }
];


const galleryData = [
  { id: 1, image: 'moment1.jpeg' },
  { id: 2, image: 'moment2.jpeg' },
  { id: 3, image: 'moment3.jpeg' },
  { id: 4, image: 'moment4.jpeg' },
  { id: 5, image: 'moment5.jpeg' },
  { id: 6, image: 'moment6.jpeg' },
  { id: 7, image: 'moment7.jpeg' },
  { id: 8, image: 'moment8.jpeg' },
  { id: 9, image: 'moment9.jpeg' },
  { id: 10, image: 'moment10.jpeg' },
  { id: 11, image: 'moment11.jpeg' },
  { id: 12, image: 'moment12.jpeg' },
  { id: 13, image: 'moment13.jpeg' },
  { id: 14, image: 'moment14.jpeg' },
  { id: 15, image: 'moment15.jpeg' },
  { id: 16, image: 'moment16.jpeg' },
  { id: 17, image: 'moment17.jpeg' },
  { id: 18, image: 'moment18.jpeg' },
  { id: 19, image: 'moment19.jpeg' },
  { id: 20, image: 'moment20.jpeg' },
  { id: 21, image: 'moment21.jpeg' },
  { id: 22, image: 'moment22.jpeg' },
  { id: 23, image: 'moment23.jpeg' },
  { id: 24, image: 'moment24.jpeg' },
  { id: 25, image: 'moment25.jpeg' },
  { id: 26, image: 'moment26.jpeg' },
  { id: 27, image: 'moment27.jpeg' },
  { id: 28, image: 'moment28.jpeg' },
  { id: 29, image: 'moment29.jpeg' },
  { id: 30, image: 'moment30.jpeg' },
  { id: 31, image: 'moment31.jpeg' },
  { id: 32, image: 'moment32.jpeg' },
  { id: 33, image: 'moment33.jpeg' },
  { id: 34, image: 'moment34.jpeg' },
  { id: 35, image: 'moment35.jpeg' },
  { id: 36, image: 'moment36.jpeg' },
  { id: 37, image: 'moment37.jpeg' },
  { id: 38, image: 'moment38.jpeg' },
  { id: 39, image: 'moment39.jpeg' },

];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = galleryData.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryData.length;
    setSelectedImage(galleryData[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = galleryData.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    setSelectedImage(galleryData[prevIndex]);
  };

  return (
    <div className="font-sans text-slate-800 antialiased bg-slate-50">

      
      
      
      {/* --- MENU NAVIGASI --- */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}>
        <div className={`max-w-6xl mx-auto px-4 flex justify-center space-x-6 md:space-x-12 font-bold tracking-[0.2em] text-[10px] md:text-xs transition-colors duration-300 ${
          isScrolled ? 'text-slate-900' : 'text-white'
        }`}>
          <a href="#home" className="hover:text-blue-600 transition-colors">HOME</a>
          <a href="#teacher" className="hover:text-blue-600 transition-colors">TEACHER</a>
          <a href="#students" className="hover:text-blue-600 transition-colors">STUDENTS</a>
          <a href="#gallery" className="hover:text-blue-600 transition-colors">GALLERY</a>
        </div>
      </nav>

      {/* --- HALAMAN HOME --- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-bottom" style={{ backgroundImage: "url('/bg-kelas.jpg')" }}>
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <div className="relative z-10 text-center flex flex-col items-center mt-10">
          <div style={{position: 'relative', height: '300px'}}>
            <TextPressure
              text="XII RPL 3"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#5227FF"
              minFontSize={250}
            />
          </div>
          {/*<BlurText text="XII RPL" className="text-5xl md:text-8xl font-extrabold text-white tracking-widest mb-4 justify-center drop-shadow-lg" />*/}
{/* Efek Mengetik Otomatis */}
       <div className="text-white/80 text-lg md:text-2xl tracking-[0.2em] font-light mt-4 h-8 flex items-center justify-center">
         <TextType 
           text={[
             "Selamat Datang", 
             "Software Engineering Squad", 
             "We Write Code", 
             "Future Developers"
           ]}
           typingSpeed={75}
           pauseDuration={1500}
           showCursor={true}
           cursorCharacter="|"
         />
       </div>     
    </div>
      </section>

      {/* --- HALAMAN TEACHER --- */}
      <section id="teacher" className="min-h-screen bg-white flex items-center justify-center py-24 px-6 md:px-12">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[3rem] transform -rotate-3 scale-105 -z-10"></div>
            <div className="relative">
              <img src="/teacher.jpg" alt="Wali Kelas" className="w-[200px] md:w-[300px] h-[300px] md:h-[400px] object-cover rounded-[2rem] shadow-xl" />
              <div className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-8 bg-slate-950 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest shadow-lg">LEAD MENTOR</div>
            </div>
          </div>
          <div className="flex flex-col text-center md:text-left mt-10 md:mt-0">
            <h3 className="text-blue-600 font-bold tracking-[0.2em] text-sm mb-2 uppercase">Our Teacher</h3>
            {/* Animasi BlurText untuk Judul Teacher */}
            <BlurText 
              text="BEST TEACHER!" 
              delay={1500} 
              animateBy="words" 
              direction="bottom"
              className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight"
            />
            <BlurText 
              text="Teruslah bermimpi dan jangan pernah berhenti belajar. Dunia teknologi menunggu karya kalian selanjutnya." 
              delay={1500} 
              animateBy="words" 
              direction="bottom"
              className="text-lg md:text-2xl text-slate-600 italic mb-10 leading-relaxed"
            />
            <div>
            <BlurText 
              text="Egi Samsul Mu'arif." 
              delay={1500} 
              animateBy="words" 
              direction="bottom"
              className="text-2xl md:text-3xl font-black text-slate-900 mb-1"
            />
            <BlurText 
              text="Wali Kelas XII RPL 3" 
              delay={1500} 
              animateBy="words" 
              direction="bottom"
              className="text-blue-600 font-bold tracking-[0.2em] text-xs md:text-sm uppercase"
            />
            </div>
          </div>
        </div>
      </section>

      {/* --- HALAMAN STUDENTS --- */}
      <section id="students" className="min-h-screen bg-slate-50 flex flex-col py-24 px-6 md:px-12">
        <div className="max-w-6xl w-full mx-auto">
          <div className="mb-12">
            <h3 className="text-blue-600 font-bold tracking-[0.2em] text-sm mb-1 uppercase">The Members</h3>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 italic tracking-tight">THE SQUAD</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
{/* Jangan lupa tambahkan 'index' di sini 👇 */}
            {studentsData.map((student, index) => (
              <AnimatedContent
                key={student.id} // key dipindah ke sini
                distance={100} 
                direction="vertical" 
                duration={0.8} 
                ease="power3.out" 
                scale={0.9} 
                delay={index * 0.1} // Ini yang bikin munculnya bergantian!
              >
                {/* div aslimu masuk ke dalam sini (tanpa key lagi) */}
                <div className="group relative bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-500 flex flex-col items-center h-[400px]">
                  
                  <div className="w-full h-[260px] overflow-hidden rounded-[1.5rem] mb-4 bg-slate-100 shrink-0">
                    <img src={student.image} alt={student.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  
                  <div className="flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-2 w-full">
                    <h4 className="text-xl font-black text-slate-900 mt-2">{student.name}</h4>
                    <p className="text-blue-600 font-bold tracking-[0.1em] text-[10px] uppercase mb-1">{student.role}</p>
                  </div>
                  
{/* Tombol CONNECT (Mobile: Diperkecil & Selalu Muncul, Desktop: Ukuran Normal & Efek Hover) */}
                  <div className="absolute bottom-3 md:bottom-4 left-3 right-3 md:left-4 md:right-4 opacity-100 translate-y-0 pointer-events-auto md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 md:pointer-events-none md:group-hover:pointer-events-auto">
                    <a href={student.ig} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 md:gap-2 w-full bg-slate-950 text-white hover:bg-blue-600 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-[10px] md:text-sm transition-colors duration-300 shadow-md">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      CONNECT
                    </a>
                  </div>                  
                  </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* --- HALAMAN GALLERY (SESUAI DESAIN TERBARU) --- */}
      <section id="gallery" className="min-h-screen bg-white flex flex-col py-24 px-6 md:px-12">
        <div className="max-w-7xl w-full mx-auto">
          
          <div className="mb-16 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tighter uppercase">MOMENTS</h2>
            <div className="w-12 h-1 bg-blue-600 mt-4"></div>
          </div>

          {/* Grid Foto: 5 Kolom, Aspect Ratio 1:1 (KOTAK PERSEGI) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {galleryData.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-square bg-slate-100 shrink-0"
                onClick={() => setSelectedImage(item)} 
              >
                <img 
                  src={item.image} 
                  alt="Gallery Moment" 
                  className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />

                {/* Tombol VIEW STORY (Pojok Kiri Bawah, Mengecil & Mengambang) */}
{/* Tombol VIEW STORY (Mobile: Selalu Muncul, Desktop: Efek Hover) */}
            <div className="absolute left-3 bottom-3 md:left-4 md:bottom-4 opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              <div className="bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-xl font-bold text-[9px] md:text-[10px] tracking-widest border border-white/30 shadow-sm hover:bg-black/40 transition-colors">
                VIEW STORY
              </div>
            </div>          
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER / BOTTOM PAGE --- */}
      <footer className="py-24 bg-white text-center flex flex-col items-center">
        <a 
          href="https://www.instagram.com/twelve.pplg3/" 
          target="_blank" 
          rel="noreferrer" 
          className="text-sm font-bold tracking-[0.2em] text-slate-500 hover:text-blue-600 transition-colors mb-6"
        >
          INSTAGRAM
        </a>
        <p className="text-xs text-slate-400 tracking-widest uppercase">
          &copy; 2026 I"zaz Wildan Fadhlillah . All Rights Reserved.
        </p>
      </footer>

      {/* --- KOTAK LIGHTBOX FULLSCREEN (DENGAN THUMBNAIL STRIP) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-between select-none pb-4 pt-12"
            onClick={() => setSelectedImage(null)} 
          >
            {/* Tombol Close (X) */}
            <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 md:top-8 md:right-10 text-white/50 hover:text-white z-50 transition-colors p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Tombol Geser Kiri & Kanan */}
            <button onClick={handlePrev} className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-50 p-2 transition-colors">
              <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={handleNext} className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-50 p-2 transition-colors">
              <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* FOTO UTAMA (Bebas ukuran aslinya) & INFO */}
            <div className="flex flex-col items-center justify-center flex-1 w-full" onClick={(e) => e.stopPropagation()}>
              <motion.img 
                key={selectedImage.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={selectedImage.image} 
                alt="Moment Detail" 
                // max-h-[65vh] memberi ruang agar tidak tertutup deretan foto kecil di bawah
                className="max-h-[60vh] md:max-h-[65vh] max-w-[85vw] object-contain shadow-2xl"
              />
              <div className="text-center mt-4 text-white">
                <p className="text-lg md:text-xl font-bold">{selectedImage.id}</p>
                <p className="text-[10px] md:text-xs text-gray-400 mt-1 tracking-[0.2em] uppercase">XII RPL</p>
              </div>
            </div>

            {/* RENTETAN FOTO KECIL (THUMBNAIL STRIP) DI BAWAH */}
            <div className="w-full flex justify-center px-4 overflow-x-auto gap-2 py-2" onClick={(e) => e.stopPropagation()}>
              {galleryData.map((thumb) => (
                <img
                  key={thumb.id}
                  src={thumb.image}
                  alt={`Thumbnail ${thumb.id}`}
                  onClick={() => setSelectedImage(thumb)}
                  className={`h-14 w-20 md:h-16 md:w-24 object-cover rounded-md cursor-pointer transition-all duration-300 ${
                    selectedImage.id === thumb.id 
                      ? 'border-2 border-red-500 opacity-100 scale-105' 
                      : 'opacity-40 hover:opacity-100'
                  }`}
                />
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;