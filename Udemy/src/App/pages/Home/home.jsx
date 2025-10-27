import Layout from "@components/Layout/Layout";
export default function Home(){
    return(
        <>
            <h1 style={{textAlign: "center", marginTop: "2rem"}}>Bienvenido a la página de inicio</h1>
            <Layout>
                    <div>
                        <img src="https://reactiveprogramming.io/_next/image?url=%2Ffigures%2Freact%2Fweb-components.png&w=1920&q=75" alt="React Logo" width="500" />
                    </div>
                    <div>
                        <h4>
                            ¿Qué es React?
                        </h4>
                        <p>
                            React es una biblioteca de JavaScript de código abierto, creada por Facebook, que se utiliza para construir interfaces de usuario interactivas (UI) y aplicaciones web de una sola página (SPA). Se basa en el concepto de componentes reutilizables, lo que permite a los desarrolladores crear interfaces complejas de manera más eficiente. 
                        </p>
                    </div>
            </Layout>
        </>
    );
}