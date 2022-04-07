import React from 'react';
import footerImage from '../Assets/images/footer.png';
import NewsLine from './NewsLine';

function FooterSection() {
    return (
        <div className='section'>
            <NewsLine />
            <div className='bg-forth h-[60%] py-5 relative mt-0'>
                <div className='container'>
                    <h2 className='text-4xl text-white md:text-8xl text-center md:text-left uppercase font-bold space-x-2 tracking-widest ... '>Lorem ipsum dolor sit.</h2>
                    <div className="grid-system items-center mt-5 lg:-mt-24">
                        <p className='text-2xl text-white text-center md:text-left  text-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio ad expedita tenetur et, cum facilis aperiam non optio quisquam, maiores autem voluptatibus, neque quas qui quibusdam vero molestias exercitationem Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis ratione soluta accusantium suscipit incidunt culpa doloremque minima alias hic exercitationem, ea enim est aliquam, corporis eveniet vero voluptatum voluptas?</p>
                        <img src={footerImage} alt="" className='m-auto' />
                    </div>
                </div>
                <footer className='bg-third p-5 text-center uppercase text-white font-light absolute bottom-0 left-0 w-full'>
                    mustafa Dabah 2022
                </footer>
            </div>
        </div>
    )
}

export default FooterSection