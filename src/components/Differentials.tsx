import Image from "next/image";
import ScheduleClubButton from "./Buttons/ScheduleClub";

const Differentials = () => {
    return (
        <section className="mt-5 pt-3" id="differentials">
            <h2 className="ff-onyx section-heading display-2 text-center ls-services w-100 mt-0 mb-5 pt-0 container mt-5">VANTAGENS IRMANDADE</h2>

            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="card-differentials d-flex flex-column gap-5">
                        <div className="d-flex gap-5 justify-content-between pb-5 mb-5 pt-5">
                            <div className="d-flex flex-column w-50 gap-3 align-items-center">
                                <Image width={80} height={80} src="/favicon.png" alt="Ícone logo irmandade" />
                                <h3 className="text-center">CLUBE<br />IRMANDADE</h3>
                            </div>
                            <div className="d-flex flex-column w-50 gap-3 align-items-center">
                                <Image width={80} height={80} src="/icons/tesoura.svg" alt="Ícone tesoura" />
                                <h3 className="text-center">VARIEDADE<br />DE SERVIÇOS</h3>
                            </div>
                        </div>
                        <div className="d-flex gap-5 justify-content-between pb-5">
                            <div className="d-flex flex-column w-50 gap-3 align-items-center">
                                <Image width={80} height={80} src="/icons/selo-qualidade.svg" alt="Ícone qualidade" />
                                <h3 className="text-center">QUALIDADE<br />NAS ENTREGAS</h3>
                            </div>
                            <div className="d-flex flex-column w-50 gap-3 align-items-center">
                                <Image width={80} height={80} src="/icons/atendimento.svg" alt="atendimento" />
                                <h3 className="text-center">ATENDIMENTO DIFERENCIADO</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-between">
                    <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item p-5 active">
                                <div className="d-flex flex-column p-5 m-5 border-main">
                                    <p className="fst-italic fs-5">Atendimento incrivel. Profissionais de qualidade que, com pouco tempo de atendimento, você já os tem como amigos pessoais. Para quem está procurando uma barbearia de qualidade, pode ir sem medo!!</p>
                                    <h4 className="text-uppercase text-start">- Maxwell B</h4>
                                </div>
                            </div>
                            <div className="carousel-item p-5">
                                <div className="d-flex flex-column p-5 m-5 border-main">
                                    <p className="fst-italic fs-5">Atendimento diferenciado, corte muito bom, profissionais qualificados. Sempre corto cabelo nesse lugar, melhor agendar antes. Preço bom! Tem fliperama e cerveja gelada!</p>
                                    <h4 className="text-uppercase text-start">- Ladislau B</h4>
                                </div>
                            </div>
                            <div className="carousel-item p-5">
                                <div className="d-flex flex-column p-5 m-5 border-main">
                                    <p className="fst-italic fs-5">O barbeiro é muito educado, atencioso e sabe o que está fazendo. A experiência foi tão boa que aderi ao plano anual do clube</p>
                                    <h4 className="text-uppercase text-start">- Brunno P</h4>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="w-100 ps-5 pe-5">
                        <div className="ps-5 pe-5">

                        <ScheduleClubButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Differentials;