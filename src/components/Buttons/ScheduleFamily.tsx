import Link from "next/link";

const ScheduleFamilyButton = () => {
    return (
        <Link target="_blank" href="https://api.whatsapp.com/send?phone=5561991855178&text=Olá, estou entrando em contato pelo site e gostaria de saber mais sobre a Irmandade Fépas Barbearia!" className="btn btn-main-outline text-white scale ps-5 pe-5 p-2 fs-5 d-flex gap-2 justify-content-center align-items-center">
            <span className="text-uppercase text-main">QUERO FAZER PARTE DESSA FAMÍLIA</span>
        </Link>
    );
}

export default ScheduleFamilyButton;