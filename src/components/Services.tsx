import Image from "next/image";
import ScheduleFamilyButton from "./Buttons/ScheduleFamily";

const Services = () => {
    return (
        <section className="products-bg pt-5 mt-5" id="services">

            <h2 className="ff-onyx section-heading display-2 text-start w-100 mt-0 mb-5 pt-0 ls-services container">SERVIÇOS</h2>

            <div className="d-flex flex-wrap">
                <div className="d-flex flex-column w-md-50 w-sm-100">
                    <div className="d-flex">
                        <div className="w-50 position-relative hover-service">
                            <Image role="button" className="object-fit-cover h-100" fill src="/images/services/sobrancelha.png" alt="Sobrancelha" />
                            <h3 className="opacity-0 text-uppercase position-absolute bottom-0 w-100 text-center">Sobrancelha</h3>
                        </div>
                        <div className="w-50 position-relative hover-service">
                            <Image role="button" className="object-fit-cover h-100" fill src="/images/services/dermoterapia.png" alt="Dermoterapia" />
                            <h3 className="opacity-0 text-uppercase position-absolute bottom-0 w-100 text-center">Dermoterapia</h3>
                        </div>
                    </div>
                    <div className="w-100 position-relative hover-service" >
                        <Image role="button" fill src="/images/services/barboterapia.png" alt="Barboterapia" />
                        <h3 className="opacity-0 text-uppercase position-absolute bottom-0 w-100 text-center">Barboterapia</h3>
                    </div>
                </div>

                <div className="w-md-50 w-sm-100 d-flex">
                    <div className="w-50 position-relative hover-service">
                        <Image role="button" className="h-100 object-fit-cover" fill src="/images/services/cabelo.png" alt="Corte de cabelo" />
                        <h3 className="opacity-0 text-uppercase position-absolute bottom-0 w-100 text-center">Corte de cabelo</h3>
                    </div>

                    <div className="d-flex flex-column w-50">
                        <div className="position-relative hover-service flex-grow-1">
                            <Image role="button" className="h-100" fill src="/images/services/progressiva.png" alt="Progressiva" />
                            <h3 className="opacity-0 text-uppercase position-absolute bottom-0 w-100 text-center">Progressiva</h3>
                        </div>
                        <div className="position-relative hover-service flex-grow-1">
                            <Image role="button" className="h-100" fill src="/images/services/barba.png" alt="Barba" />
                            <h3 className="opacity-0 text-uppercase position-absolute bottom-0 w-100 text-center">Barba</h3>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="ff-onyx section-heading display-2 text-end w-100 mt-5 pt-0 ls-services container">IRMANDADE</h2>

            <div className="d-flex justify-content-center mt-5 pt-5 container">
                <ScheduleFamilyButton />
            </div>
        </section >
    );
}

export default Services;