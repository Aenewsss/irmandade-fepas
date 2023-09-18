import Image from "next/image";
import ScheduleButton from "./Buttons/Schedule";

const Contact = () => {
    return (
        <section className="container pt-5 mt-5" id="contact">

            <div className="bg-black">
                <div className="row">
                    <div className="col-md-6">
                        <div className="w-100">
                            <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Avenida%20San%20Diego,%2096%20-%20Loja%2010%20-%20Jardim%20Bot%C3%A2nico+(Irmandade%20F%C3%A9pas%20Barbearia)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.maps.ie/population/">Calculate population in area</a>
                            </iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="ff-onyx section-heading display-2 ls-services w-100 mt-0 mb-5 pt-0 container mt-5">Contato & horários</h2>

                        <h5 className="fw-light mt-5 line-after">Terça a Qui: 9h às 19:30  Sex: 9h às 20h Sáb: 9h às 18h</h5>

                        <h5 className="fw-light mt-5 line-after">Avenida San Diego, 96 - Loja 10 - Jardim Botânico</h5>

                        <h5 className="fw-light d-flex justify-content-between mt-5 line-after">
                            <span><Image width={30} height={30} src="/icons/instagram.svg" alt="Ícone instagram" /> irmandade_fepas</span>
                            <span><Image width={30} height={30} src="/icons/whatsapp.svg" alt="Ícone telefone" /> (61) 99185-5178</span>
                        </h5>

                        <div className="mt-5 w-50">
                            <ScheduleButton />
                        </div>

                    </div>
                </div>
            </div>

        </section >
    );
}

export default Contact;