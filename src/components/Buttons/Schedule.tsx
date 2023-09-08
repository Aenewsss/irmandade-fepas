import Link from "next/link";

const ScheduleButton = () => {
    return (
        <Link target="_blank" href="https://api.whatsapp.com/send?phone=5561991855178&text=Olá, estou entrando em contato pelo site e gostaria de saber mais sobre a Irmandade Fépas Barbearia!" className="btn btn-main text-white scale fs-5 d-flex gap-2 justify-content-center align-items-center">
            <span>QUERO AGENDAR</span>
        </Link>
    );
}

export default ScheduleButton;