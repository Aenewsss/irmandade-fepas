import Image from "next/image";
import ScheduleButton from "./Buttons/Schedule";
import Link from "next/link";
import { environments } from "@components/environments";

const Contact = () => {
    return (
        <section className="container pt-5 mt-5" id="contact">
            <div className="bg-shadow mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="w-100">
                            <iframe width="100%" height="440" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=440&amp;hl=en&amp;q=Irmandade%20F%C3%A9pas+(Irmandade%20F%C3%A9pas)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="ff-onyx section-heading display-2 ls-services w-100 mt-md-0 mt-3 mb-5 pt-0 container">Contato & horários</h2>

                        <h5 className="fw-light mt-5 line-after">Terça a Qui: 9h às 19:30  Sex: 9h às 20h Sáb: 9h às 18h</h5>

                        <Link target="_blank" href={environments.mapsLink}>
                            <h5 className="fw-light mt-5 line-after">Avenida San Diego, 96 - Loja 10 - Jardim Botânico</h5>
                        </Link>

                        <h5 className="fw-light d-flex gap-4 mt-5 line-after">
                            <Link target="_blank" href={environments.instagramLink}>
                                <span className="d-flex gap-2 align-items-center"><Image width={30} height={30} src="/icons/instagram.svg" alt="Ícone instagram" /> irmandade_fepas</span>
                            </Link>
                            <Link target="_blank" href={environments.whatsAppLink}>
                                <span className="d-flex gap-2 align-items-center"><Image width={30} height={30} src="/icons/whatsapp.svg" alt="Ícone telefone" /> (61) 99185-5178</span>
                            </Link>
                        </h5>

                        <div className="mt-5 w-50 mb-md-0 mb-3">
                            <ScheduleButton />
                        </div>

                    </div>
                </div>
            </div>

        </section >
    );
}

export default Contact;