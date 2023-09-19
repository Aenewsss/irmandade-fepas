import { environments } from "@components/environments";
import Link from "next/link";

const ScheduleButton = () => {
    return (
        <Link target="_blank" href={environments.whatsAppLink} className="btn btn-main text-white scale fs-5 d-flex gap-2 justify-content-center align-items-center">
            <span>QUERO AGENDAR</span>
        </Link>
    );
}

export default ScheduleButton;