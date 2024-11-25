import Header from "@/components/Header"
import Paragraph from "@/components/Paragraph"
import Image from "@/components/Image"
import RedButton from "@/components/RedButton"

const ToyCatalog: React.FC = () => {
    return (
        <section className="px-4 py-10 flex flex-col items-center justify-center gap-10 min-h-[90vh]">
            <Header text="Catálogo de Juguetes" color="blue"></Header>

            <article className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-7xl mx-auto my-5">
                <div className="flex flex-col gap-5 lg:w-1/2 text-center lg:text-left">
                    <Paragraph text="Explora nuestro catálogo de juguetes cuidadosamente seleccionados para todos los niños. Desde muñecos y vehículos hasta juegos educativos y rompecabezas, cada juguete está diseñado para traer diversión y fomentar la imaginación."></Paragraph>

                    <Paragraph text="Nuestra colección incluye opciones para todas las edades, promoviendo habilidades creativas, sociales y cognitivas. ¡Descubre el regalo perfecto para esta Navidad o cualquier ocasión especial!"></Paragraph>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <RedButton text="Ver todos los juguetes" clicked={'/catalogo'}></RedButton>
                        <RedButton text="Más información" clicked={'/catalogo'}></RedButton>
                    </div>
                </div>

                <div id="toy-gallery" className="grid grid-cols-2 gap-6 items-center lg:w-2/5 max-w-full">
                    <Image route="/toy1.png" alternativeDesc="Pop-It" width="200" height="200"></Image>
                    <Image route="/toy2.png" alternativeDesc="Comida de Madera" width="200" height="200"></Image>
                    <Image route="/toy3.png" alternativeDesc="Bebe Comilón" width="200" height="200"></Image>
                    <Image route="/toy4.png" alternativeDesc="Lego Star Wars" width="200" height="200"></Image>
                    <Image route="/toy5.png" alternativeDesc="Pistola NERF" width="200" height="200"></Image>
                    <Image route="/toy6.png" alternativeDesc="Cubo de Rubik" width="200" height="200"></Image>
                    <Image route="/toy7.png" alternativeDesc="Mini Pizarra Mágica" width="200" height="200"></Image>
                    <Image route="/toy8.png" alternativeDesc="Pizarra Grande" width="200" height="200"></Image>
                </div>
            </article>
        </section>
    )
}
//holi
export default ToyCatalog