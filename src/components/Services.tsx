import Image from "next/image";
import ScheduleFamilyButton from "./Buttons/ScheduleFamily";

const Services = () => {
    return (
        <section className="products-bg pt-5 mt-5">

            <h2 className="ff-onyx section-heading display-2 text-start w-100 mt-0 mb-5 pt-0 ls-services container">SERVIÇOS</h2>

            <div className="d-flex">
                <div className="d-flex flex-column w-50">
                    <div className="d-flex">
                        <Image className="w-50 object-fit-cover" fill src="/images/services/sobrancelha.png" alt="Sobrancelha" />
                        <Image className="w-50 object-fit-cover" fill src="/images/services/dermoterapia.png" alt="Dermoterapia" />
                    </div>
                    <Image className="w-100" fill src="/images/services/barboterapia.png" alt="Barboterapia" />
                </div>

                <div className="w-50 d-flex">
                    <Image className="w-50 object-fit-cover" fill src="/images/services/cabelo.png" alt="Corte de cabelo" />

                    <div className="d-flex flex-column w-50">
                        <Image fill src="/images/services/progressiva.png" alt="Progressiva" />
                        <Image fill src="/images/services/barba.png" alt="Barba" />
                    </div>
                </div>
            </div>

            <h2 className="ff-onyx section-heading display-2 text-end w-100 mt-5 pt-0 ls-services container">IRMANDADE</h2>

            <div className="d-flex justify-content-center mt-5">
                <ScheduleFamilyButton />
            </div>
        </section >
    );
}

export default Services;