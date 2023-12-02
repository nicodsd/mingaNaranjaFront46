import ButtonWelcome from '../components/ButtonWelcome'

export default function Welcome() {
    return ( 
        <div className="flex px-4 items-center flex-col z-0 w-full lg:w-[24rem] sm:px-[10rem] lg:px-0 absolute sm:top-0 lg:relative">
            <div>
                <h1 className="text-white font-[600] text-[2.5rem] text-center lg:text-start lg:text-[2.4rem] mt-[7rem] lg:mt-0 mb-[1rem]">
                    Your favourite manga reader 😏
                </h1> 
                <p className="text-white font-[200] text-center text-sm p-[.4rem] lg:text-start lg:p-0 lg:w-[90%] lg:text-[12px]">
                    Is an exceptional app for all manga lovers. With
                    a wide range of titles available, from classics
                    to the latest releases, this app is perfect for
                    those who want to read manga anytime, anywhere.
                </p>
            </div>
                <ButtonWelcome/>
        </div>
    )
}
