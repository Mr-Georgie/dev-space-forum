import React from 'react'

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 px-16">
      <div className="flex flex-col items-center">
        <p>© DevSpace 2022</p>
        <div className="grid grid-cols-3 gap-8 mt-4">
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
          <span>Contact Us</span>
        </div>
      </div>
    </footer>
  )
}
