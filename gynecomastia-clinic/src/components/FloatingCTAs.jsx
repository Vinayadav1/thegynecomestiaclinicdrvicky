export default function FloatingCTAs() {
  return (
    <>
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex flex-col gap-3">
        <a
          className="bg-indigo-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-indigo-700 transition-all hover:scale-110 active:scale-95 group relative"
          href="tel:+919619489446"
          title="Call Us"
          aria-label="Call Us"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </svg>
          <span className="absolute left-full ml-3 px-2 py-1 bg-navy text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block" style={{ background: '#0a1628' }}>Call Now</span>
        </a>
      </div>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
        <a
          className="bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group relative"
          href="https://wa.me/919619489446"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Us"
          aria-label="WhatsApp Us"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.125 1.419 4.667 1.419 5.239 0 9.504-4.265 9.506-9.505.001-2.541-.99-4.93-2.791-6.731-1.801-1.801-4.189-2.793-6.729-2.793-5.241 0-9.507 4.265-9.509 9.505-.001 1.718.469 3.391 1.356 4.847l-1.012 3.704 3.793-.996zm11.366-6.412c-.033-.055-.123-.089-.259-.156-.135-.067-.801-.394-.925-.44-.123-.044-.213-.067-.303.068-.09.135-.35.439-.427.53-.078.089-.157.101-.293.033-.135-.067-.571-.211-1.087-.671-.401-.357-.671-.799-.75-1.336-.078-.135-.008-.208.059-.275.061-.06.135-.157.203-.236.067-.079.09-.135.135-.225.045-.09.023-.168-.011-.236-.034-.067-.303-.732-.416-.994-.11-.266-.223-.23-.303-.234-.078-.004-.168-.005-.259-.005s-.236.034-.36.168c-.123.135-.473.461-.473 1.124s.484 1.305.551 1.395c.067.09 1.123 1.717 2.721 2.408.38.164.677.262.909.336.382.121.73.104 1.005.063.307-.046.925-.379 1.058-.745.135-.365.135-.678.09-.745z"/>
          </svg>
          <span className="absolute right-full mr-3 px-2 py-1 bg-navy text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block" style={{ background: '#0a1628' }}>WhatsApp</span>
        </a>
      </div>
    </>
  )
}

