import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 z-50 flex items-center ${isExpanded ? 'px-4 py-3 rounded-lg' : 'p-3'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <MessageCircle size={24} className={isExpanded ? 'mr-2' : ''} />
      {isExpanded && (
        <span className="font-medium whitespace-nowrap">
          Suporte via WhatsApp
        </span>
      )}
    </a>
  );
}