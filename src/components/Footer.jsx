// src/components/Footer.jsx
export const Footer = () => {
    return (
        <footer className="text-center py-4 text-gray-500 text-sm">
            <p>Built and designed by Paulina Méndez</p>
            <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </footer>
    );
}