import Image from "next/image";
import ScheduleClubButton from "./Buttons/ScheduleClub";

const Differentials = () => {
    return (
        <section className="mt-5 pt-3">
            <h2 className="ff-onyx section-heading display-2 text-center ls-services w-100 mt-0 mb-5 pt-0 container mt-5">VANTAGENS IRMANDADE</h2>

            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="card-differentials d-flex flex-column gap-5">
                        <div className="d-flex gap-5 pb-5 mb-5">
                            <div className="d-flex flex-column gap-3 align-items-center">
                                <Image width={80} height={80} src="/favicon.png" alt="Ícone logo irmandade" />
                                <h3 className="text-center">CLUBE IRMANDADE</h3>
                            </div>
                            <div className="d-flex flex-column gap-3 align-items-center">
                                <Image width={80} height={80} src="/icons/tesoura.svg" alt="Ícone tesoura" />
                                <h3 className="text-center">VARIEDADE DE SERVIÇOS</h3>
                            </div>
                        </div>
                        <div className="d-flex gap-5">
                            <div className="d-flex flex-column gap-3 align-items-center">
                                <Image width={80} height={80} src="/icons/selo-qualidade.svg" alt="Ícone qualidade" />
                                <h3 className="text-center">QUALIDADE NAS ENTREGAS</h3>
                            </div>
                            <div className="d-flex flex-column gap-3 align-items-center">
                                <Image width={80} height={80} src="/icons/atendimento.svg" alt="atendimento" />
                                <h3 className="text-center">ATENDIMENTO DIFERENCIADO</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <ScheduleClubButton />
                </div>
            </div>
        </section>
    );
}

export default Differentials;