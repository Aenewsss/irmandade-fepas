import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-100 mt-5 pt-5">
            <div className="bg-black p-4">
                <div className="row d-flex justify-content-center gap-md-0 gap-3">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <Image loading="lazy" width={140} height={42} src="/favicon.png" alt="transparente.svg" />
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                        <h6 className="text-main fw-bold mb-0 d-md-flex d-none">A DESCART</h6>
                        <Link target="_blank" href="https://www.google.com/maps/place/AdescartDF/@-15.8442562,-48.0489506,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3332649dbb4b:0x1cbbf4eedea6c382!8m2!3d-15.8442563!4d-48.0440797!16s%2Fg%2F11l1xf_p72?hl=en&entry=ttu" className="d-flex align-items-center gap-2 mt-3">
                            <Image loading="lazy" width={20} height={20} src="/icons/house.svg" alt="transparente.svg" />
                            <div className="text-white">
                                <p className="mb-0 fs-10">
                                    Avenida San Diego, 96 - Loja 10
                                </p>
                                <p className="fs-10 mb-0">
                                    Jardim Botânico - Brasília DF
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 d-flex d-flex align-items-center justify-content-center">
                        <div className="text-white ">
                            <h6 className="text-main fw-bold mb-0">REDES SOCIAIS</h6>
                            <div className="d-flex flex-column gap-2 mt-3">
                                <Link target="_blank" href="https://api.whatsapp.com/send?phone=5561991855178&text=Olá, estou entrando em contato pelo site e gostaria de saber mais sobre a Irmandade Fépas Barbearia!" className="d-flex gap-2 fs-10 text-white mb-0">
                                    <Image loading="lazy" width={20} height={20} src="/icons/whatsapp.svg" alt="transparente.svg" />
                                    <span>(61) 99185-5178</span>
                                </Link>
                                <Link target="_blank" href="https://www.instagram.com/irmandadefepas/" className="d-flex gap-2 fs-10 text-white mb-0">
                                    <Image loading="lazy" width={20} height={20} src="/icons/instagram.svg" alt="transparente.svg" />
                                    <span>irmandadefepas</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-3">
                <Link className="text-dark" href="https://aenamartinelli.com.br">
                    <p className="text-center mb-0 fs-10 ">
                        Copyright © 2023 All rights reserved | Site desenvolvido por
                        &nbsp;
                        <span className="text-main">
                            aenamartinelli.com.br
                        </span>
                    </p>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;