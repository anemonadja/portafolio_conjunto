import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
}