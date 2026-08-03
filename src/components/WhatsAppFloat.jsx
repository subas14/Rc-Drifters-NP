import { STORE, whatsappLink } from '../utils/store.js'
import { WhatsAppIcon } from './Footer.jsx'

// Floating WhatsApp button, fixed to the bottom-right of every page.
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(`Hello ${STORE.name}, I have a question.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-night shadow-lg shadow-black/40 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  )
}
