const GoogleMapEmbed = () => {
  return (
    <div style={{ width: "100%", maxWidth: "100%", margin: "0 auto" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3078383603893!2d105.78896817613065!3d21.02036518062684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab09b32fb0c3%3A0x9f9ac98175ae6bbd!2zMjE5IFAuIFRydW5nIEtpzIFuaCwgVHJ1bmcgSG_DoCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWkgMTAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1748251441207!5m2!1svi!2s"
        width="100%"
        height="650px"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
