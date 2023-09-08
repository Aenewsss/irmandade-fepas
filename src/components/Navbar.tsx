'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ScheduleButton from "./Buttons/Schedule";

const Navbar = () => {

    const [backgroundColor, setBackgroundColor] = useState('transparent');

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setBackgroundColor('black')
            } else {
                setBackgroundColor('transparent')
            }
        })
    }

    return (
        <nav id="sidebar" style={{ backgroundColor }} className="pt-2 z-2 navbar navbar-expand-lg position-fixed w-100 m-0 p-0">
            <div className="container d-flex justify-content-around w-100 pb-3 pt-1 gap-3">
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <Image loading="lazy" width={40} height={40} src="/icons/menu.svg" alt="Ícone Menu" />
                </button>

                <Link className="navbar-brand navbar-brand m-0" href="/#">
                    <Image loading="lazy" fill id="img-navbar" className="img-fluid" style={{ maxHeight: '90px', maxWidth: '100px' }} src="/favicon.png" alt="logo.svg" />
                </Link>

                <div className="collapse navbar-collapse mt-md-0 mt-3 pt-2 " id="navbarNav">
                    <ul className="flex-wrap navbar-nav d-flex flex-row align-items-center justify-content-end gap-5 w-100">
                        <li className="nav-item" >
                            <Link role="button" className="nav-link text-white scale text-uppercase " href="#about">A Barbearia</Link>
                        </li>
                        <li className="nav-item">
                            <Link role="button" className="nav-link scale text-uppercase text-white" href="#services">Serviços</Link>
                        </li>
                        <li className="nav-item">
                            <Link role="button" className="text-premium fw-bold nav-link scale text-uppercase " href="">O Clube</Link>
                        </li>
                        <li className="nav-item">
                            <Link role="button" className="nav-link scale text-uppercase text-white" href="#differentials">Vantagens</Link>
                        </li>
                        <li className="nav-item">
                            <Link role="button" className="nav-link scale text-uppercase text-white" href="#contact">Contato</Link>
                        </li>
                        <li className="nav-item">
                            <ScheduleButton />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;