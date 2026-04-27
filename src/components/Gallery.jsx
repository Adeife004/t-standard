import { useState, useEffect, useRef } from 'react'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    category: 'Security Doors',
    title: 'Heavy Duty Steel Door',
    description: 'Custom fabricated steel security door with multi point locking system.',
    accent: '#FF6600',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 2,
    category: 'Security Doors',
    title: 'Iron Frame Gate',
    description: 'Powder coated iron frame gate installed at a residential property in Lagos.',
    accent: '#FF6600',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
  },
  {
    id: 3,
    category: 'Interior Finishing',
    title: 'POP Ceiling Design',
    description: 'Elegant POP ceiling with recessed lighting for a luxury living room.',
    accent: '#0066CC',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
  },
  {
    id: 4,
    category: 'Interior Finishing',
    title: 'Wall Texture Finish',
    description: 'Premium textured wall finish applied throughout a 4 bedroom duplex.',
    accent: '#0066CC',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
  },
  {
    id: 5,
    category: 'Kitchen',
    title: 'Modern Kitchen Cabinet',
    description: 'Full MDF kitchen cabinet set with soft close hinges and granite countertop.',
    accent: '#FF6600',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 6,
    category: 'Wardrobe',
    title: 'Built In Wardrobe',
    description: 'Floor to ceiling built in wardrobe with custom compartments and sliding doors.',
    accent: '#FF6600',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
  },
  {
    id: 7,
    category: 'Security Doors',
    title: 'Commercial Security Door',
    description: 'Reinforced commercial grade security door for an office complex in Ikeja.',
    accent: '#FF6600',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
  },
  {
    id: 8,
    category: 'Interior Finishing',
    title: 'Exterior Cladding',
    description: 'Stone effect exterior cladding that transformed a dated building facade.',
    accent: '#0066CC',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
]

const categories = ['All', 'Security Doors', 'Interior Finishing', 'Kitchen', 'Wardrobe']

const GalleryCard = ({ item, index, onClick, isMobile }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        ...styles.card,
        transform: hovered && !isMobile ? 'scale(1.03)' : 'scale(1)',
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.4), 0 0 0 2px ${item.accent}`
          : '0 4px 20px rgba(0,0,0,0.15)',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(index)}
    >
      <div style={{ ...styles.cardVisual, height: isMobile ? '160px' : '200px' }}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          style={{
            ...styles.cardImage,
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.4s ease',
          }}
        />
        <div style={{
          ...styles.overlay,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}>
          <ZoomIn size={24} color="#fff" />
          <span style={styles.overlayText}>View Project</span>
        </div>
      </div>

      <div style={{ ...styles.cardInfo, padding: isMobile ? '12px' : '20px' }}>
        <span style={{ ...styles.cardCategory, color: item.accent }}>
          {item.category}
        </span>
        <h3 style={{ ...styles.cardTitle, fontSize: isMobile ? '14px' : '18px' }}>
          {item.title}
        </h3>
        {!isMobile && <p style={styles.cardDesc}>{item.description}</p>}
      </div>

      <div style={{
        ...styles.cardBar,
        width: hovered ? '100%' : '0%',
        backgroundColor: item.accent,
        transition: 'width 0.4s ease',
      }} />
    </div>
  )
}

const Lightbox = ({ items, currentIndex, onClose, onPrev, onNext, isMobile }) => {
  const item = items[currentIndex]
  const touchStartX = useRef(null)

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? onNext() : onPrev()
    touchStartX.current = null
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onPrev, onNext, onClose])

  return (
    <div style={styles.lightboxOverlay} onClick={onClose}>
      <div
        style={{
          ...styles.lightboxContent,
          borderRadius: isMobile ? '0' : '4px',
          maxWidth: isMobile ? '100%' : '800px',
          margin: isMobile ? '0' : '20px',
          maxHeight: isMobile ? '100dvh' : 'auto',
          overflowY: isMobile ? 'auto' : 'visible',
        }}
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button style={styles.closeBtn} onClick={onClose}>
          <X size={18} color="#fff" />
        </button>

        {!isMobile && (
          <>
            <button style={{ ...styles.navBtn, left: '16px' }} onClick={onPrev}>
              <ChevronLeft size={24} color="#fff" />
            </button>
            <button style={{ ...styles.navBtn, right: '16px' }} onClick={onNext}>
              <ChevronRight size={24} color="#fff" />
            </button>
          </>
        )}

        <img
          src={item.image}
          alt={item.title}
          style={{ ...styles.lightboxImage, height: isMobile ? '240px' : '340px' }}
        />

        <div style={{ ...styles.lightboxInfo, padding: isMobile ? '20px 20px 28px' : '28px 32px' }}>
          <span style={{ ...styles.lightboxCategory, color: item.accent }}>
            {item.category}
          </span>
          <h2 style={{ ...styles.lightboxTitle, fontSize: isMobile ? '22px' : '28px' }}>
            {item.title}
          </h2>
          <p style={styles.lightboxDesc}>{item.description}</p>

          {isMobile ? (
            <div style={styles.mobileNavRow}>
              <button style={styles.mobileNavBtn} onClick={onPrev}>
                <ChevronLeft size={18} color="#fff" />
                <span style={styles.mobileNavText}>Prev</span>
              </button>
              <span style={styles.lightboxCounter}>
                {currentIndex + 1} / {items.length}
              </span>
              <button style={styles.mobileNavBtn} onClick={onNext}>
                <span style={styles.mobileNavText}>Next</span>
                <ChevronRight size={18} color="#fff" />
              </button>
            </div>
          ) : (
            <div style={styles.lightboxCounter}>{currentIndex + 1} / {items.length}</div>
          )}
        </div>
      </div>
    </div>
  )
}

const FilterTab = ({ label, active, onClick, isMobile }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: isMobile ? '8px 14px' : '10px 22px',
        borderRadius: '2px',
        border: '1px solid',
        fontSize: isMobile ? '11px' : '12px',
        fontWeight: '600',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        fontFamily: 'Barlow Condensed, sans-serif',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        backgroundColor: active ? '#FF6600' : hovered ? 'rgba(255,102,0,0.08)' : '#fff',
        color: active ? '#fff' : hovered ? '#FF6600' : '#555',
        borderColor: active ? '#FF6600' : hovered ? '#FF6600' : '#e0e0e0',
        transform: hovered && !active ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
      }}
    >
      {label}
    </button>
  )
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 640)
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 960)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeCategory)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevItem = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length)
  const nextItem = () => setLightboxIndex(i => (i + 1) % filtered.length)

  const gridCols = isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'

  return (
    <section id="gallery" style={{
      ...styles.section,
      padding: isMobile ? '56px 0' : '100px 0',
    }}>
      <div style={styles.bgAccent} />

      <div style={{
        ...styles.container,
        padding: isMobile ? '0 16px' : isTablet ? '0 32px' : '0 48px',
      }}>

        <div style={{ ...styles.header, marginBottom: isMobile ? '28px' : '48px' }}>
          <div style={styles.headerTag}>
            <span style={styles.tagLine} />
            Our Work
            <span style={styles.tagLine} />
          </div>
          <h2 style={styles.heading}>
            PROJECT <span style={styles.headingAccent}>GALLERY</span>
          </h2>
          <p style={{ ...styles.subheading, fontSize: isMobile ? '14px' : '16px' }}>
            Every project tells a story of precision, quality and client satisfaction.
            Browse our completed work across Lagos and beyond.
          </p>
        </div>

        <div style={{
          overflowX: isMobile ? 'auto' : 'visible',
          WebkitOverflowScrolling: 'touch',
          marginBottom: '28px',
          paddingBottom: isMobile ? '4px' : '0',
        }}>
          <div style={{
            display: 'flex',
            gap: '8px',
            justifyContent: isMobile ? 'flex-start' : 'center',
            flexWrap: isMobile ? 'nowrap' : 'wrap',
            minWidth: isMobile ? 'max-content' : 'unset',
          }}>
            {categories.map(cat => (
              <FilterTab
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>

        <div style={styles.countRow}>
          <span style={styles.countText}>
            Showing {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
          <div style={styles.countLine} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: gridCols,
          gap: isMobile ? '10px' : '20px',
        }}>
          {filtered.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onClick={openLightbox}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
          isMobile={isMobile}
        />
      )}
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  bgAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #003580, #FF6600, #003580)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
  },
  headerTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#FF6600',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
  },
  tagLine: {
    display: 'block',
    width: '32px',
    height: '1px',
    backgroundColor: '#FF6600',
  },
  heading: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: 'clamp(36px, 6vw, 72px)',
    fontWeight: '800',
    color: '#1a1a1a',
    lineHeight: 1,
    letterSpacing: '-1px',
  },
  headingAccent: {
    color: '#FF6600',
  },
  subheading: {
    color: '#666',
    lineHeight: 1.7,
    maxWidth: '520px',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: '300',
  },
  countRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
  },
  countText: {
    fontSize: '12px',
    color: '#999',
    fontFamily: 'DM Sans, sans-serif',
    letterSpacing: '1px',
    whiteSpace: 'nowrap',
  },
  countLine: {
    flex: 1,
    height: '1px',
    backgroundColor: '#f0f0f0',
  },
  card: {
    borderRadius: '4px',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#111',
  },
  cardVisual: {
    position: 'relative',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.65)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  overlayText: {
    color: '#fff',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: 'Barlow Condensed, sans-serif',
  },
  cardInfo: {
    backgroundColor: '#fff',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  cardCategory: {
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
  },
  cardTitle: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontWeight: '700',
    color: '#1a1a1a',
    letterSpacing: '0.5px',
  },
  cardDesc: {
    fontSize: '12px',
    color: '#777',
    lineHeight: 1.6,
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: '300',
  },
  cardBar: {
    height: '3px',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  lightboxOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.92)',
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightboxContent: {
    backgroundColor: '#111',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  lightboxImage: {
    width: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  closeBtn: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    zIndex: 10,
    background: 'rgba(0,0,0,0.5)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  navBtn: {
    position: 'absolute',
    top: '170px',
    transform: 'translateY(-50%)',
    zIndex: 10,
    background: 'rgba(255,255,255,0.12)',
    border: 'none',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  lightboxInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  lightboxCategory: {
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
  },
  lightboxTitle: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontWeight: '800',
    color: '#fff',
    letterSpacing: '1px',
  },
  lightboxDesc: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'DM Sans, sans-serif',
    lineHeight: 1.6,
  },
  lightboxCounter: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.3)',
    fontFamily: 'DM Sans, sans-serif',
    letterSpacing: '2px',
    marginTop: '4px',
  },
  mobileNavRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '12px',
    paddingTop: '12px',
    borderTop: '1px solid rgba(255,255,255,0.08)',
  },
  mobileNavBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '4px',
    padding: '10px 14px',
    cursor: 'pointer',
  },
  mobileNavText: {
    fontSize: '12px',
    color: '#fff',
    fontFamily: 'Barlow Condensed, sans-serif',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
}

export default Gallery