// function Spinner() {
//     return (
//       <div className="flex justify-center items-center min-h-[200px]">
//         <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin" />
//       </div>
//     );
//   }
  
//   export default Spinner;

import { motion } from "framer-motion"

function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <motion.div
        className="w-10 h-10"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Circular Border */}
          <circle
            cx="16"
            cy="16"
            r="14"
            stroke="url(#gradientMain)"
            strokeWidth="2.5"
          />
          {/* Stylized "E" for EntryIQ */}
          <path
            d="M20 10H12V14H18V16H12V22H20"
            stroke="url(#gradientMain)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="gradientMain" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  )
}

export default Spinner
