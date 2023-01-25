import React from 'react'
export default function Header() {
  return (
    <div>
        <header className='flex justify-between items-center px-3 max-w-6xl'>
          
            <div>
                <img src={"./Gadgetify.png"} alt="logo"  width={150} class="cursor-pointer" />
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>Offers</li>
                <li>Contact</li>
              </ul>
            </div>
        </header>
    </div>
  )
}
