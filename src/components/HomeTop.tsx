import Image from "next/image";

const HomeTop = () => {
    return (
        <section className="home-top pt-5">
            <div className="container pt-5 d-flex align-items-center h-100 justify-content-center">
                <div className="row">
                    <div className="col-md-8 d-flex align-items-center">
                        <h1 className="ff-onyx display-1 text-white fw-light text-left fst-italic">
                            Mais que uma barbearia
                            <br />
                            <br />
                            Uma irmandade
                        </h1>
                    </div>
                    <div className="col-md-4 d-md-flex justify-content-end align-items-center d-none">
                        <Image className="img-fluid " fill src="/favicon.png" alt="Logo Irmandade Fépas"/>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HomeTop;
