import { environments } from "@components/environments";
import Link from "next/link";

const ScheduleFamilyButton = () => {
    return (
        <Link target="_blank" href={environments.whatsAppLink} className="btn btn-main-outline text-white scale ps-5 pe-5 p-2 fs-5 d-flex gap-2 justify-content-center align-items-center">
            <span className="text-uppercase text-main">QUERO FAZER PARTE DESSA FAMÍLIA</span>
        </Link>
    );
}

export default ScheduleFamilyButton;