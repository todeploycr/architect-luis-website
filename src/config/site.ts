// Datos de contacto centralizados: cambiarlos aquí los actualiza en todo el sitio.
export const SITE_URL = "https://larqcr.com";

export const PHONE_DISPLAY = "+506 8897 2353";
export const PHONE_SCHEMA = "+506-8897-2353";
export const PHONE_SECONDARY_DISPLAY = "+506 6061 2494";
export const EMAIL = "larq.cr@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/larq_cr/";

const WHATSAPP_NUMBER = "50688972353";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Link de WhatsApp con mensaje pre-escrito. */
export const whatsappLink = (message: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
