import Image from "next/image";

const About = () => {
    return (
        <section className="container" id="about">
            <div className="bg-main">
                <div className="row">
                    <div className="col-md-7 p-4">
                        <h2 className="ff-onyx display-2 text-white fw-light text-left ">Quem somos?</h2>
                        <p className="d-flex flex-column gap-3 fw-light p-2">
                            <span>
                                A Irmandade Fépas é uma barbearia contemporânea fundada por dois irmãos, Ramon Fépas e
                                Lucas Pereira. Assim surgiu o nome IRMANDADE.
                            </span>

                            <span>
                                Somos uma barbearia conceitual com uma atmosfera familiar, de respeito e alegria que combina valores tradicionais com o estilo moderno .
                            </span>

                            <span>
                                A IRMANDADE é feita de energia alto astral e pensamentos inovadores, composta por um espaço para pessoas que têm um bom gosto e muito estilo.
                            </span>

                            <span>
                                As pessoas sempre perguntam de onde saiu o "FÉPAS"
                                rsrsrs. É apenas a junção do sobrenome do Ramon. O Lucas deu a honra ao  irmão mais velho de ter o seu sobrenome na fachada e logo marca da Barbearia.
                            </span>

                            <span>
                                Seja muito bem vindo à IRMANDADE FÉPAS.
                                Você já faz parte da nossa família!
                            </span>

                            <span>
                                Um forte abraço,
                                <span className="fst-italic">
                                    <br />
                                    IRMANDADE
                                </span>
                            </span>
                        </p>
                    </div>
                    <div className="col-md-5 p-4 d-flex align-items-center">
                        <Image fill src="/images/time.jpg" alt="Time Irmandade Fépas Barbearia" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;