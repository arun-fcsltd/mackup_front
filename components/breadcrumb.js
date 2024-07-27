// page banner


const Breadcrumb = ({ title }) => {

    return (
        <>
        <div className="py-8 md:py-12 bg-cover bg-right bg-no-repeat" style={{ backgroundImage: 'url(../images/artist_bg.svg)' }}>
                <div className="container mx-auto px-4">
                    <h4 className="uppercase font-semibold text-sm text-white">Discover</h4>
                    <h1 className="ctheme text-2xl md:text-4xl text-semibold font-normal uppercase mt-3">{title}</h1>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb