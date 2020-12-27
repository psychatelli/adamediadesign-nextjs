
import Image from 'next/image'

const MainNav = () => {

    return (
        <div className='MainNav'>
            <div className='leftNavItems'>
            <Image
                src="/../public/Adamedia-Design-Logo.png"
                alt="Picture of the author"
                width={35}
                height={35}
            />
            </div>

            <div className='rightNavItems'>
                Right
            </div>

        </div>
    )
}




export default MainNav;
