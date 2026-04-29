import { useState, useEffect } from "react";
import { MapPin, Phone, Users, Target, Eye, Heart } from "lucide-react";

const milestones = [
  {
    year: "2014",
    title: "Founded",
    desc: "T-Standard was established in Isheri Oshun, Lagos with a vision to raise the standard of security and interior craftsmanship in Nigeria.",
  },
  {
    year: "2016",
    title: "First 100 Doors",
    desc: "Completed installation of over 100 custom security doors across residential properties in Lagos State.",
  },
  {
    year: "2019",
    title: "Training Academy",
    desc: "Launched our vocational training program empowering young Nigerians with marketable skills in fabrication and finishing.",
  },
  {
    year: "2022",
    title: "Expanded Services",
    desc: "Grew into a full interior solutions provider covering kitchens, wardrobes, POP ceilings and exterior finishing.",
  },
  {
    year: "2024",
    title: "500+ Projects",
    desc: "Surpassed 500 completed projects with a growing team of skilled artisans serving clients across Nigeria.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "Every measurement, every cut, every finish is executed with obsessive attention to detail.",
    color: "#FF6600",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "We see the potential in every space and bring it to life through craftsmanship and creativity.",
    color: "#0066CC",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "Honest pricing, transparent timelines and work we are proud to put our name on.",
    color: "#FF6600",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Training the next generation and creating jobs that strengthen Nigerian communities.",
    color: "#0066CC",
  },
];

const ValueCard = ({ value, isMobile }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = value.icon;

  return (
    <div
      style={{
        ...styles.valueCard,
        padding: isMobile ? "22px 18px" : "28px 24px",
        borderColor: hovered ? value.color : "#eee",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.1)"
          : "0 2px 12px rgba(0,0,0,0.04)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          ...styles.valueIconWrap,
          backgroundColor: hovered ? value.color : `${value.color}15`,
          transition: "background-color 0.3s ease",
        }}
      >
        <Icon
          size={22}
          color={hovered ? "#fff" : value.color}
          style={{ transition: "color 0.3s" }}
        />
      </div>
      <h4
        style={{
          ...styles.valueTitle,
          color: hovered ? value.color : "#1a1a1a",
          transition: "color 0.3s",
        }}
      >
        {value.title}
      </h4>
      <p style={styles.valueDesc}>{value.desc}</p>
    </div>
  );
};

const TimelineItem = ({ milestone, isLast }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={styles.timelineItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!isLast && <div style={styles.timelineLine} />}

      <div
        style={{
          ...styles.timelineDot,
          backgroundColor: hovered ? "#FF6600" : "#fff",
          borderColor: hovered ? "#FF6600" : "#ddd",
          boxShadow: hovered ? "0 0 0 4px rgba(255,102,0,0.15)" : "none",
          transition: "all 0.3s ease",
        }}
      />

      <div
        style={{
          ...styles.timelineContent,
          backgroundColor: hovered ? "#fff" : "#fafafa",
          borderColor: hovered ? "#FF6600" : "#eee",
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.08)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <span
          style={{
            ...styles.timelineYear,
            color: hovered ? "#FF6600" : "#999",
          }}
        >
          {milestone.year}
        </span>
        <h4 style={styles.timelineTitle}>{milestone.title}</h4>
        <p style={styles.timelineDesc}>{milestone.desc}</p>
      </div>
    </div>
  );
};

const PhoneChip = ({ number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`tel:${number.replace(/\s/g, "")}`}
      style={{
        ...styles.phoneChip,
        backgroundColor: hovered ? "#FF6600" : "#fff",
        color: hovered ? "#fff" : "#333",
        borderColor: hovered ? "#FF6600" : "#ddd",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 20px rgba(255,102,0,0.25)" : "none",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Phone size={12} />
      {number}
    </a>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 960);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const isSmall = isMobile || isTablet;

  const gridCols = isMobile
    ? "repeat(1, 1fr)"
    : isTablet
      ? "repeat(3, 1fr)"
      : "repeat(4, 1fr)";

  return (
    <section
      id="about"
      style={{
        ...styles.section,
        padding: isMobile ? "60px 0" : "100px 0",
      }}
    >
      <div style={styles.topAccent} />

      <div
        style={{
          ...styles.container,
          padding: isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px",
        }}
      >
        {/* Header */}
        <div
          style={{
            ...styles.header,
            marginBottom: isMobile ? "40px" : "72px",
            gap: isMobile ? "12px" : "16px",
          }}
        >
          <div style={styles.headerTag}>
            <span style={styles.tagLine} />
            Who We Are
            <span style={styles.tagLine} />
          </div>
          <h2 style={styles.heading}>
            ABOUT <span style={styles.headingAccent}>T-STANDARD</span>
          </h2>
          <p
            style={{
              ...styles.subheading,
              fontSize: isMobile ? "14px" : "16px",
            }}
          >
            Born in Lagos, built on craftsmanship. A decade of raising the bar
            on security, design and interior excellence across Nigeria.
          </p>
        </div>

        {/* Two column layout */}
        <div
          style={{
            ...styles.twoCol,
            gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
            gap: isMobile ? "48px" : isTablet ? "48px" : "80px",
            marginBottom: isMobile ? "48px" : "80px",
          }}
        >
          {/* Story column */}
          <div style={styles.storyCol}>
            <div
              style={{
                ...styles.storyBadge,
                width: isMobile ? "100%" : "fit-content",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <div style={styles.storyBadgeInner}>
                <span style={styles.storyBadgeNum}>10+</span>
                <span style={styles.storyBadgeLabel}>Years of Excellence</span>
              </div>
              <div style={styles.storyBadgeDivider} />
              <div style={styles.storyBadgeInner}>
                <span style={styles.storyBadgeNum}>500+</span>
                <span style={styles.storyBadgeLabel}>Projects Completed</span>
              </div>
            </div>

            <h3
              style={{
                ...styles.storyTitle,
                fontSize: isMobile ? "22px" : "28px",
              }}
            >
              Setting the standard for security and interior excellence in
              Nigeria
            </h3>

            <p
              style={{
                ...styles.storyText,
                fontSize: isMobile ? "14px" : "15px",
              }}
            >
              T-Standard was founded with one belief: Nigerians deserve world
              class quality at honest prices. From our workshop in Isheri Oshun,
              Lagos, we fabricate and install premium security doors, deliver
              flawless interior and exterior finishing, and craft bespoke
              kitchens and wardrobes that transform living spaces.
            </p>

            <p
              style={{
                ...styles.storyText,
                fontSize: isMobile ? "14px" : "15px",
              }}
            >
              What started as a small fabrication outfit has grown into a full
              service interior solutions company trusted by hundreds of
              homeowners, landlords and developers across Lagos and beyond.
              Every project carries our name and our reputation, so we never cut
              corners.
            </p>

            <div style={styles.locationCard}>
              <MapPin size={18} color="#FF6600" style={{ flexShrink: 0 }} />
              <div>
                <div style={styles.locationTitle}>Visit Our Workshop</div>
                <div style={styles.locationAddr}>
                  B/Stop Isheri Oshun, Lagos, Nigeria
                </div>
              </div>
            </div>

            <div
              style={{
                ...styles.phoneRow,
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              {["+234 (0) 802 767 1663", "0906 422 9842", "0815 051 7772"].map(
                (num) => (
                  <PhoneChip key={num} number={num} />
                ),
              )}
            </div>
          </div>

          {/* Timeline column */}
          <div style={styles.timelineCol}>
            <div style={styles.timelineHeader}>
              <span style={styles.timelineHeaderTag}>Our Journey</span>
              <h3
                style={{
                  ...styles.timelineHeaderTitle,
                  fontSize: isMobile ? "20px" : "24px",
                }}
              >
                A decade of milestones
              </h3>
            </div>
            <div style={styles.timeline}>
              {milestones.map((m, i) => (
                <TimelineItem
                  key={m.year}
                  milestone={m}
                  index={i}
                  isLast={i === milestones.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div
          style={{
            ...styles.valuesSection,
            paddingTop: isMobile ? "40px" : "64px",
          }}
        >
          <div
            style={{
              ...styles.valuesSectionHeader,
              marginBottom: isMobile ? "28px" : "40px",
            }}
          >
            <span style={styles.valuesSectionTag}>What Drives Us</span>
            <h3
              style={{
                ...styles.valuesSectionTitle,
                fontSize: isMobile ? "28px" : "36px",
              }}
            >
              Our Core Values
            </h3>
          </div>
          <div
            style={{
              ...styles.valuesGrid,
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                  ? "repeat(2, 1fr)"
                  : "repeat(4, 1fr)",
              gap: isMobile ? "12px" : "20px",
            }}
          >
            {values.map((v) => (
              <ValueCard key={v.title} value={v} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#f7f8fc",
    position: "relative",
    overflow: "hidden",
  },
  topAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, #FF6600, #003580, #FF6600)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerTag: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#FF6600",
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "3px",
    textTransform: "uppercase",
    fontFamily: "DM Sans, sans-serif",
  },
  tagLine: {
    display: "block",
    width: "32px",
    height: "1px",
    backgroundColor: "#FF6600",
  },
  heading: {
    fontFamily: "Barlow Condensed, sans-serif",
    fontSize: "clamp(36px, 6vw, 72px)",
    fontWeight: "800",
    color: "#1a1a1a",
    lineHeight: 1,
    letterSpacing: "-1px",
  },
  headingAccent: {
    color: "#FF6600",
  },
  subheading: {
    color: "#666",
    lineHeight: 1.7,
    maxWidth: "520px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "300",
  },
  twoCol: {
    display: "grid",
    alignItems: "start",
  },
  storyCol: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  storyBadge: {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "#001845",
    borderRadius: "4px",
    overflow: "hidden",
  },
  storyBadgeInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px 24px",
    gap: "4px",
    flex: 1,
  },
  storyBadgeNum: {
    fontFamily: "Barlow Condensed, sans-serif",
    fontSize: "32px",
    fontWeight: "800",
    color: "#FF6600",
    lineHeight: 1,
  },
  storyBadgeLabel: {
    fontSize: "10px",
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    fontFamily: "DM Sans, sans-serif",
    textAlign: "center",
  },
  storyBadgeDivider: {
    width: "1px",
    height: "40px",
    backgroundColor: "rgba(255,255,255,0.1)",
    flexShrink: 0,
  },
  storyTitle: {
    fontFamily: "Barlow Condensed, sans-serif",
    fontWeight: "700",
    color: "#1a1a1a",
    lineHeight: 1.2,
    letterSpacing: "0.5px",
  },
  storyText: {
    color: "#555",
    lineHeight: 1.8,
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "300",
  },
  locationCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    backgroundColor: "#fff",
    border: "1px solid #eee",
    borderLeft: "3px solid #FF6600",
    padding: "16px 20px",
    borderRadius: "4px",
  },
  locationTitle: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#FF6600",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontFamily: "DM Sans, sans-serif",
    marginBottom: "4px",
  },
  locationAddr: {
    fontSize: "14px",
    color: "#333",
    fontFamily: "DM Sans, sans-serif",
  },
  phoneRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  phoneChip: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    border: "1px solid",
    borderRadius: "2px",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "500",
    fontFamily: "DM Sans, sans-serif",
    letterSpacing: "0.5px",
  },
  timelineCol: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  timelineHeader: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  timelineHeaderTag: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#FF6600",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontFamily: "DM Sans, sans-serif",
  },
  timelineHeaderTitle: {
    fontFamily: "Barlow Condensed, sans-serif",
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: "1px",
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  timelineItem: {
    display: "flex",
    gap: "20px",
    position: "relative",
    paddingBottom: "8px",
    cursor: "default",
  },
  timelineLine: {
    position: "absolute",
    left: "7px",
    top: "20px",
    bottom: "-8px",
    width: "2px",
    backgroundColor: "#e8e8e8",
    zIndex: 0,
  },
  timelineDot: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    border: "2px solid",
    flexShrink: 0,
    marginTop: "4px",
    position: "relative",
    zIndex: 1,
  },
  timelineContent: {
    flex: 1,
    padding: "16px 20px",
    border: "1px solid",
    borderRadius: "4px",
    marginBottom: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  timelineYear: {
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "2px",
    fontFamily: "Barlow Condensed, sans-serif",
    transition: "color 0.3s",
  },
  timelineTitle: {
    fontFamily: "Barlow Condensed, sans-serif",
    fontSize: "18px",
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: "0.5px",
  },
  timelineDesc: {
    fontSize: "13px",
    color: "#666",
    lineHeight: 1.6,
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "300",
  },
  valuesSection: {
    borderTop: "1px solid #eee",
  },
  valuesSectionHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    textAlign: "center",
  },
  valuesSectionTag: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#FF6600",
    letterSpacing: "3px",
    textTransform: "uppercase",
    fontFamily: "DM Sans, sans-serif",
  },
  valuesSectionTitle: {
    fontFamily: "Barlow Condensed, sans-serif",
    fontWeight: "800",
    color: "#1a1a1a",
    letterSpacing: "1px",
  },
  valuesGrid: {
    display: "grid",
  },
  valueCard: {
    backgroundColor: "#fff",
    border: "1px solid",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    cursor: "default",
  },
  valueIconWrap: {
    width: "48px",
    height: "48px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  valueTitle: {
    fontFamily: "Barlow Condensed, sans-serif",
    fontSize: "22px",
    fontWeight: "800",
    letterSpacing: "1px",
  },
  valueDesc: {
    fontSize: "13px",
    color: "#666",
    lineHeight: 1.6,
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "300",
  },
};

export default About;
