import Image from "next/image";
import Link from "next/link";
import CallWhatsApp from "./Buttons/Schedule";

const Products = () => {
    return (
        <section className="products-bg pt-5">

            <h2 className="ff-onyx section-heading display-2 text-center w-100 mt-0 pt-0">SERVIÇOS</h2>

            <div className="container d-flex justify-content-center">

                <div className="row mt-5 pt-2 d-flex justify-content-center">
                    <div className="col-xl-4 mt-xl-0 mt-4 overflow-hidden position-relative d-flex justify-content-center">
                      
                    </div>
                    <div className="col-xl-4 mt-xl-0 mt-4 overflow-hidden position-relative d-flex justify-content-center">
                     
                    </div>
                    <div className="col-xl-4 mt-xl-0 mt-4 overflow-hidden position-relative d-flex justify-content-center">
                        
                    </div>

                    <div className="col-xl-12 d-flex flex-column align-items-center mt-5 gap-4">
                        <Link href="/catalogo" className="btn btn-main text-white scale fs-4">CATÁLOGO COMPLETO</Link>
                        <CallWhatsApp />
                    </div>
                </div>

            </div>

        </section >
    );
}

export default Products;