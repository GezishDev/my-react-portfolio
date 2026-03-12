import { useState } from "react";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "../styles/Certifications.css";

const certifications = [
  {
    title: "Cisco CCNA Introduction to Networks",
    issuer: "Cisco",
    date: "2026",
    image: "/certificates/ccna1.png",
  },
  {
    title: "Cisco CCNA Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    date: "2026",
    image: "/certificates/ccna.png",
  },
  {
    title: "Cisco CCNA Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "2026",
    image: "/certificates/ccna2.png",
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.classList.add("modal-open");
  };
  const closeModal = () => {
    setSelectedCert(null);
    document.body.classList.remove("modal-open");
  };

  return (
    <section id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <div
              className="cert-card"
              key={index}
              onClick={() => openModal(cert)}
            >
              <div className="cert-image">
                <img src={cert.image} alt={cert.title} loading="lazy" />
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="cert-meta">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with pinch-to-zoom */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content zoom-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={3}
                centerOnInit
                wheel={{ step: 0.1 }}
                pinch={{ step: 0.1 }}
              >
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <>
                    <div className="zoom-controls">
                      <button onClick={() => zoomIn()}>+</button>
                      <button onClick={() => zoomOut()}>-</button>
                      <button onClick={() => resetTransform()}>⟲</button>
                    </div>
                    <TransformComponent>
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        className="modal-image"
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
              <button className="modal-close" onClick={closeModal}>
                <FiX />
              </button>
              <div className="modal-caption">
                <h3>{selectedCert.title}</h3>
                <p>
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
