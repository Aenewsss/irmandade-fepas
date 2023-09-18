import Image from "next/image";
import Link from "next/link";

const ScheduleClubButton = () => {
    return (
        <Link target="_blank" href="https://api.whatsapp.com/send?phone=5561991855178&text=Olá, estou entrando em contato pelo site e gostaria de saber mais sobre a Irmandade Fépas Barbearia!" className="btn btn-main w-100 text-white scale ps-5 pe-5 p-2 fs-5 d-flex gap-2 justify-content-center align-items-center">
            <Image width={30} height={30} src="/favicon.png" alt="Ícone logo irmandade"/>
            <span className="text-uppercase text-white">FAZER PARTE DO CLUBE</span>
        </Link>
    );
}

export default ScheduleClubButton;