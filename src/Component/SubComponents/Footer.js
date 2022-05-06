import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-64 border-t pt-8">
      <div className="flex flex-col items-center">
        <p>© DevSpace 2022</p>
        <div className="grid grid-cols-3 gap-8 mt-4">
          <span>Privacy Policy</span>
          <span>Terms {"&"} Conditions</span>
          <span>Contact Us</span>
        </div>
        <p className="pt-5 font-bold">Made with <span>❤️</span> by <a href="https://twitter.com/GeorgeIsiguzo" className=" text-blue-500"> Georgie</a></p>
      </div>
    </footer>
  )
}
