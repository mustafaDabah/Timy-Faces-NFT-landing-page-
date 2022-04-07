import React, { useState } from 'react';
import Logo from '../Assets/logo.png'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Animated from "react-mount-animation";
import { mountAnimation, unmountAnimation } from '../utils/animotion';


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [connectedAccount, setConnectedAccount] = useState('');
  const { ethereum } = window;

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('please install metaMask');

      const account = await ethereum.request({ method: 'eth_requestAccounts' });
      setConnectedAccount(account[0])

    } catch (err) {
      console.log(err.message);

      throw new Error("No ethereum object");
    }
  }

  const shorterAddress = (address) => (`${address.slice(0, 5)}...${address.slice(address.length - 4)}`);

  const NavLink = ({ path, title, classProps }) => {
    return (
      <li className={` text-gray-800 text-lg ${classProps}`}><link className='text-lg' href={path}></link>{title}</li>
    )
  }

  const disConnectedWallet = () => {
    setConnectedAccount('');
  }

  return (
    <div className="container">
      <div className='flex justify-between items-center w-full text-center mt-4'>
        {/* --items -- */}
        <ul className='items-center justify-center flex-1 hidden md:flex md:justify-start'>
          {['Home', 'About', 'Contact us', 'Offers'].map(item => (
            <NavLink title={item} key={item} classProps="mr-5" />
          )
          )}
        </ul>
        {/* --logo-- */}
        <div className='flex-1 mt-1'>
          <h4 className='text-3xl text-primary font-[500] md:m-auto'>NFT TIMY </h4>
          {/* <img  src={Logo} alt="logo" /> */}
        </div>
        {/* --btn-- */}
        {connectedAccount.length > 0 ? (
          <div className='flex-1 hidden md:flex md:justify-end flex items-center'>
            <h4 className='mr-3'>HEY {shorterAddress(connectedAccount)} </h4>
            <button onClick={disConnectedWallet} className='bg-primary py-2 px-5 rounded-md text-white uppercase'> disconnect wallet</button>
          </div>
        ) : (
          <div className='flex-1 hidden md:flex  md:justify-end'>
            <button onClick={connectWallet} className='bg-primary py-2 px-5 rounded-md text-white uppercase'>connect wallet</button>
          </div>
        )}

        {/*--toggle menu --*/}
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose fontSize={28} className=" cursor-pointer md:hidden" onClick={() => setToggleMenu(false)} />
          ) : (<HiMenuAlt4 fontSize={28} className=" cursor-pointer md:hidden" onClick={() => setToggleMenu(true)} />)
          }
          <Animated.ul
            show={toggleMenu}
            className='list-items-phone'
            mountAnim={mountAnimation}
            unmountAnim={unmountAnimation}
          >
            <AiOutlineClose fontSize={28} className="text-white bg-primary rounded-md cursor-pointer md:hidden z-20 mb-20" onClick={() => setToggleMenu(false)} />
            {['Home', 'About', 'Contact us', 'Offers'].map(item => (
              <NavLink title={item} key={item} classProps="text-white text-center w-full mb-5" />
            )
            )}
          </Animated.ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

