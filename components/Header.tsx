import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Sparkles, X } from "lucide-react";
import { AnimatedLogo } from "./logo";

function Header() {
  return (
    <div className="sticky top-0 left-0 w-full z-50 border-b bg-white/80 backdrop-blur-lg shadow-md">
      {/* Announcement Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white overflow-hidden">
        <div className="container flex items-center gap-x-3 px-4 py-2 text-sm font-medium md:px-6">
          <Sparkles className="h-4 w-4 flex-shrink-0" />
          <div className="relative w-full overflow-hidden">
            <div className="animate-scroll whitespace-nowrap">
            🎉 Welcome to EntryIQ! Book your tickets in seconds — fast, simple, and smart. We&apos;re still under development — some features might be a work in progress. Thanks for your patience 🚀
            </div>
          </div>
          <X className="absolute right-4 h-4 w-4 cursor-pointer opacity-70 hover:opacity-100" />
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <AnimatedLogo />

          {/* Mobile User Button */}
          <div className="lg:hidden">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* Search Bar - Full width on mobile */}
        <div className="w-full lg:max-w-2xl">
          <SearchBar />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:block ml-auto">
          <SignedIn>
            <div className="flex items-center gap-3">
              <Link href="/seller">
                <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                  Sell Tickets
                </button>
              </Link>

              <Link href="/tickets">
                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                  My Tickets
                </button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Mobile Action Buttons */}
        <div className="lg:hidden w-full flex justify-center gap-3">
          <SignedIn>
            <Link href="/seller" className="flex-1">
              <button className="w-full bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                Sell Tickets
              </button>
            </Link>

            <Link href="/tickets" className="flex-1">
              <button className="w-full bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                My Tickets
              </button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default Header;


// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import Link from "next/link";
// import SearchBar from "./SearchBar";
// import { Sparkles, X } from "lucide-react";
// import { AnimatedLogo } from "./logo";

// function Header() {
//   return (
//     <div className="sticky top-0 left-0 w-full z-50 border-b bg-white/80 backdrop-blur-lg shadow-md">
//       {/* Announcement Banner */}
//       <div className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white overflow-hidden">
//         <div className="container flex items-center gap-x-3 px-4 py-2 text-sm font-medium md:px-6">
//           <Sparkles className="h-4 w-4 flex-shrink-0" />
//           <div className="relative w-full overflow-hidden">
//             <div className="animate-scroll whitespace-nowrap">
//               Introducing to KISTSYNC! Book your tickets in a minute. The website is under development, 
//               and some functionalities may not work. Stay tuned, we'll be back soon!
//             </div>
//           </div>
//           <X className="absolute right-4 h-4 w-4 cursor-pointer opacity-70 hover:opacity-100" />
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
//         <div className="flex items-center justify-between w-full lg:w-auto">
//           <AnimatedLogo />

//           {/* Mobile User Button */}
//           <div className="lg:hidden">
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//             <SignedOut>
//               <SignInButton mode="modal">
//                 <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
//                   Sign In
//                 </button>
//               </SignInButton>
//             </SignedOut>
//           </div>
//         </div>

//         {/* Search Bar - Full width on mobile */}
//         <div className="w-full lg:max-w-2xl">
//           <SearchBar />
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden lg:block ml-auto">
//           <SignedIn>
//             <div className="flex items-center gap-3">
//               <Link href="/seller">
//                 <button className="bg-green-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-green-700 transition">
//                   Sell Tickets
//                 </button>
//               </Link>

//               <Link href="/tickets">
//                 <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
//                   My Tickets
//                 </button>
//               </Link>
//               <UserButton />
//             </div>
//           </SignedIn>

//           <SignedOut>
//             <SignInButton mode="modal">
//               <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
//                 Sign In
//               </button>
//             </SignInButton>
//           </SignedOut>
//         </div>

//         {/* Mobile Action Buttons */}
//         <div className="lg:hidden w-full flex justify-center gap-3">
//           <SignedIn>
//             <Link href="/seller" className="flex-1">
//               <button className="w-full bg-green-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-green-700 transition">
//                 Sell Tickets
//               </button>
//             </Link>

//             <Link href="/tickets" className="flex-1">
//               <button className="w-full bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
//                 My Tickets
//               </button>
//             </Link>
//           </SignedIn>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
