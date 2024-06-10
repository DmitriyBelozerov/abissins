import Image from "next/image"
import Logo from "../img/2024-06-10_22-12-31.png"

export default function Header() {
    return (
        <header className="flex justify-between p-5">
            <div>
                <Image
                    src={Logo}
                    alt='Лого'
                    width={150}
                    // height={20}
                />
            </div>
            <div className="flex flex-row gap-4 font-semibold text-base">
                <p>Услуги</p>
                <p>Преимущества</p>
                <p>Контакты</p>
                <p>8 (981) 822-20-99</p>
            </div>

        </header>

    )
}