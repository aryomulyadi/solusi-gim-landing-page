/**
 * WhatsApp integration helper for SOLUSI GIM.
 * Centralizes the WhatsApp number and message generation.
 */

const WA_NUMBER = '6287722679685';
const WA_BASE_URL = `https://wa.me/${WA_NUMBER}`;

/**
 * Creates a WhatsApp link with a pre-filled, URL-encoded message.
 * @param {string} message - The message text (plain, not encoded).
 * @returns {string} Full WhatsApp URL with encoded message.
 */
export function createWhatsAppLink(message) {
  if (!message) return WA_BASE_URL;
  return `${WA_BASE_URL}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a WhatsApp link for a specific product inquiry.
 * @param {string} productName - The product name.
 * @returns {string} Full WhatsApp URL.
 */
export function createProductWhatsAppLink(productName) {
  return createWhatsAppLink(
    `Halo SOLUSI GIM, saya tertarik dengan aset ${productName}. Boleh minta detailnya?`
  );
}

/**
 * Creates a WhatsApp link for a bundle inquiry.
 * @param {string} bundleName - The bundle name.
 * @returns {string} Full WhatsApp URL.
 */
export function createBundleWhatsAppLink(bundleName) {
  return createWhatsAppLink(
    `Halo SOLUSI GIM, saya tertarik dengan ${bundleName}. Boleh minta detail paket dan cara belinya?`
  );
}

/**
 * Creates a WhatsApp link for a custom asset request.
 * @returns {string} Full WhatsApp URL.
 */
export function createCustomRequestWhatsAppLink() {
  return createWhatsAppLink(
    `Halo SOLUSI GIM! Saya ingin request aset custom untuk proyek game saya.\n\nJenis aset: \nGame engine: \nFormat file: \nDeadline: \nDetail tambahan: `
  );
}

/**
 * Creates a general consultation WhatsApp link.
 * @returns {string} Full WhatsApp URL.
 */
export function createConsultationWhatsAppLink() {
  return createWhatsAppLink(
    'Halo SOLUSI GIM, saya ingin konsultasi tentang kebutuhan aset game untuk proyek saya.'
  );
}

export { WA_NUMBER, WA_BASE_URL };
export default createWhatsAppLink;
