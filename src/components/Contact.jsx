import { useState, useEffect } from 'react'
import { Phone, MapPin, Send, CheckCircle, Clock, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['+234 (0) 802 767 1663', '0906 422 9842', '0815 051 7772'],
    color: '#FF6600',
    href: 'tel:+2348027671663',
  },
  {
    icon: MapPin,
    label: 'Visit Workshop',
    lines: ['B/Stop Isheri Oshun', 'Lagos, Nigeria'],
    color: '#0066CC',
    href: 'https://maps.google.com/?q=Isheri+Oshun+Lagos',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: ['Mon to Sat: 7am to 7pm', 'Sunday: By appointment'],
    color: '#FF6600',
    href: null,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    lines: ['Chat with us instantly', '+234 802 767 1663'],
    color: '#25D366',
    href: 'https://wa.me/2348027671663',
  },
]

const services = [
  'Security Door Installation',
  'Interior Finishing',
  'Exterior Finishing',
  'Kitchen Cabinet',
  'Wardrobe',
  'Skills Training',
  'Other',
]

const ContactCard = ({ info, isMobile }) => {
  const [hovered, setHovered] = useState(false)
  const Icon = info.icon
  const Wrapper = info.href ? 'a' : 'div'

  return (
    <Wrapper
      href={info.href || undefined}
      target={info.href && !info.href.startsWith('tel') ? '_blank' : undefined}
      rel="noreferrer"
      style={{
        ...styles.contactCard,
        padding: isMobile ? '18px 16px' : '24px 20px',
        borderColor: hovered ? info.color : '#eee',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.1)' : '0 2px 12px rgba(0,0,0,0.04)',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        cursor: info.href ? 'pointer' : 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        ...styles.contactIconWrap,
        backgroundColor: hovered ? info.color : `${info.color}15`,
        transition: 'background-color 0.3s ease',
      }}>
        <Icon size={20} color={hovered ? '#fff' : info.color} style={{ transition: 'color 0.3s' }} />
      </div>
      <div style={styles.contactCardText}>
        <span style={{ ...styles.contactCardLabel, color: hovered ? info.color : '#999', transition: 'color 0.3s' }}>
          {info.label}
        </span>
        {info.lines.map((line, i) => (
          <span key={i} style={styles.contactCardLine}>{line}</span>
        ))}
      </div>
    </Wrapper>
  )
}

const SubmitButton = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      type="submit"
      style={{
        ...styles.submitBtn,
        backgroundColor: hovered ? '#e55a00' : '#FF6600',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 10px 28px rgba(255,102,0,0.35)' : 'none',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Send size={16} />
      Send Message
    </button>
  )
}

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="https://wa.me/2348027671663?text=Hello%20T-Standard%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noreferrer"
      style={{
        ...styles.whatsappBtn,
        backgroundColor: hovered ? '#1da851' : '#25D366',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 10px 28px rgba(37,211,102,0.35)' : 'none',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Chat on WhatsApp
    </a>
  )
}

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)
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

  const isSmall = isMobile || isTablet

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = (name) => ({
    ...styles.input,
    borderColor: focused === name ? '#FF6600' : '#e0e0e0',
    boxShadow: focused === name ? '0 0 0 3px rgba(255,102,0,0.1)' : 'none',
    transition: 'all 0.25s ease',
    outline: 'none',
  })

  return (
    <section id="contact" style={{
      ...styles.section,
      padding: isMobile ? '60px 0' : '100px 0',
    }}>
      <div style={styles.bgLeft} />

      <div style={{
        ...styles.container,
        padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 48px',
      }}>

        {/* Header */}
        <div style={{
          ...styles.header,
          marginBottom: isMobile ? '36px' : '56px',
          gap: isMobile ? '12px' : '16px',
        }}>
          <div style={styles.headerTag}>
            <span style={styles.tagLine} />
            Get In Touch
            <span style={styles.tagLine} />
          </div>
          <h2 style={styles.heading}>
            CONTACT <span style={styles.headingAccent}>US</span>
          </h2>
          <p style={{ ...styles.subheading, fontSize: isMobile ? '14px' : '16px' }}>
            Ready to transform your space or secure your property? Reach out today
            for a free consultation and quote. We respond within 24 hours.
          </p>
        </div>

        {/* Contact info cards */}
        <div style={{
          ...styles.cardsGrid,
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? '10px' : '16px',
          marginBottom: isMobile ? '36px' : '56px',
        }}>
          {contactInfo.map((info) => (
            <ContactCard key={info.label} info={info} isMobile={isMobile} />
          ))}
        </div>

        {/* Form and right panel */}
        <div style={{
          ...styles.formRow,
          gridTemplateColumns: isSmall ? '1fr' : '1fr 420px',
          gap: isMobile ? '24px' : '40px',
        }}>

          {/* Form */}
          <div style={{
            ...styles.formWrap,
            padding: isMobile ? '24px 20px' : '40px',
          }}>
            <div style={styles.formHeader}>
              <h3 style={{ ...styles.formTitle, fontSize: isMobile ? '22px' : '28px' }}>
                Send Us a Message
              </h3>
              <p style={styles.formSubtitle}>Fill in the form and we will get back to you promptly.</p>
            </div>

            {submitted ? (
              <div style={styles.successBox}>
                <CheckCircle size={40} color="#22c55e" />
                <h4 style={styles.successTitle}>Message Sent!</h4>
                <p style={styles.successText}>
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button
                  style={styles.resetBtn}
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }) }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>

                <div style={{
                  ...styles.formRow2,
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                }}>
                  <div style={styles.fieldWrap}>
                    <label style={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      placeholder="Your full name"
                      required
                      style={inputStyle('name')}
                    />
                  </div>
                  <div style={styles.fieldWrap}>
                    <label style={styles.label}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused(null)}
                      placeholder="Your phone number"
                      required
                      style={inputStyle('phone')}
                    />
                  </div>
                </div>

                <div style={styles.fieldWrap}>
                  <label style={styles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    placeholder="your@email.com"
                    style={inputStyle('email')}
                  />
                </div>

                <div style={styles.fieldWrap}>
                  <label style={styles.label}>Service Interested In *</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    onFocus={() => setFocused('service')}
                    onBlur={() => setFocused(null)}
                    required
                    style={{ ...inputStyle('service'), color: form.service ? '#1a1a1a' : '#aaa' }}
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div style={styles.fieldWrap}>
                  <label style={styles.label}>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Describe your project or enquiry..."
                    required
                    rows={5}
                    style={{ ...inputStyle('message'), resize: 'vertical', fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                <SubmitButton />
              </form>
            )}
          </div>

          {/* Right panel */}
          <div style={styles.rightPanel}>

            <div style={styles.mapWrap}>
              <iframe
                title="T-Standard Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.37!3d6.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIsheri+Oshun+Lagos!5e0!3m2!1sen!2sng!4v1"
                style={styles.mapIframe}
                allowFullScreen
                loading="lazy"
              />
              <div style={styles.mapOverlay}>
                <div style={styles.mapPin}>
                  <MapPin size={20} color="#fff" />
                </div>
                <span style={styles.mapLabel}>Isheri Oshun, Lagos</span>
              </div>
            </div>

            <WhatsAppButton />

            <div style={styles.quickInfo}>
              {[
                'Free site visits within Lagos',
                'Free quotation and consultation',
                'Nationwide delivery available',
                'Flexible payment options',
              ].map(text => (
                <div key={text} style={styles.quickInfoRow}>
                  <span style={styles.quickInfoDot} />
                  <span style={styles.quickInfoText}>{text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: '#f7f8fc',
    position: 'relative',
    overflow: 'hidden',
  },
  bgLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '40%',
    height: '100%',
    background: 'radial-gradient(ellipse at left, rgba(255,102,0,0.04) 0%, transparent 70%)',
    pointerEvents: 'none',
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
    fontSize: 'clamp(40px, 6vw, 72px)',
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
  cardsGrid: {
    display: 'grid',
  },
  contactCard: {
    backgroundColor: '#fff',
    border: '1px solid',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  contactIconWrap: {
    width: '44px',
    height: '44px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactCardText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  contactCardLabel: {
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
    marginBottom: '2px',
  },
  contactCardLine: {
    fontSize: '13px',
    color: '#333',
    fontFamily: 'DM Sans, sans-serif',
    lineHeight: 1.5,
  },
  formRow: {
    display: 'grid',
    alignItems: 'start',
  },
  formWrap: {
    backgroundColor: '#fff',
    border: '1px solid #eee',
    borderRadius: '4px',
  },
  formHeader: {
    marginBottom: '28px',
  },
  formTitle: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontWeight: '800',
    color: '#1a1a1a',
    letterSpacing: '1px',
    marginBottom: '6px',
  },
  formSubtitle: {
    fontSize: '14px',
    color: '#888',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: '300',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formRow2: {
    display: 'grid',
    gap: '16px',
  },
  fieldWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#444',
    letterSpacing: '0.5px',
    fontFamily: 'DM Sans, sans-serif',
  },
  input: {
    padding: '12px 16px',
    border: '1px solid',
    borderRadius: '2px',
    fontSize: '14px',
    fontFamily: 'DM Sans, sans-serif',
    color: '#1a1a1a',
    backgroundColor: '#fafafa',
    width: '100%',
  },
  submitBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: '#FF6600',
    color: '#fff',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '2px',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontFamily: 'Barlow Condensed, sans-serif',
    cursor: 'pointer',
    width: '100%',
  },
  successBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    padding: '60px 40px',
    textAlign: 'center',
  },
  successTitle: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: '28px',
    fontWeight: '800',
    color: '#1a1a1a',
    letterSpacing: '1px',
  },
  successText: {
    fontSize: '15px',
    color: '#666',
    fontFamily: 'DM Sans, sans-serif',
    lineHeight: 1.6,
    maxWidth: '320px',
  },
  resetBtn: {
    backgroundColor: 'transparent',
    border: '1px solid #FF6600',
    color: '#FF6600',
    padding: '12px 24px',
    borderRadius: '2px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontFamily: 'Barlow Condensed, sans-serif',
    cursor: 'pointer',
    marginTop: '8px',
  },
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  mapWrap: {
    position: 'relative',
    borderRadius: '4px',
    overflow: 'hidden',
    height: '260px',
    border: '1px solid #eee',
  },
  mapIframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
  mapOverlay: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#FF6600',
    padding: '8px 14px',
    borderRadius: '2px',
  },
  mapPin: {
    display: 'flex',
    alignItems: 'center',
  },
  mapLabel: {
    color: '#fff',
    fontSize: '12px',
    fontWeight: '600',
    fontFamily: 'DM Sans, sans-serif',
    letterSpacing: '0.5px',
  },
  whatsappBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: '#25D366',
    color: '#fff',
    padding: '16px',
    borderRadius: '2px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'Barlow Condensed, sans-serif',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  quickInfo: {
    backgroundColor: '#fff',
    border: '1px solid #eee',
    borderLeft: '3px solid #FF6600',
    borderRadius: '4px',
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  quickInfoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  quickInfoDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#FF6600',
    flexShrink: 0,
  },
  quickInfoText: {
    fontSize: '13px',
    color: '#444',
    fontFamily: 'DM Sans, sans-serif',
  },
}

export default Contact