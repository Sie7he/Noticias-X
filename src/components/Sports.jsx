/* eslint-disable react/prop-types */

const Sports = ({ sport }) => {
  return (
    <main className="bg-gray-100 w-full p-4">
      {sport ? (
        sport.map((sp) => (
          <div className="mt-6 ml-20 md:ml-52 xl:ml-0" key={sp.id}>
            <div className="md:max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md w-full">
              <div className="flex items-center justify-between">
                <span className="font-light text-gray-600">{sp.fecha}</span>
                <a
                  href="#"
                  className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                >
                  {sp.deporte}
                </a>
              </div>
              <div className="mt-2">
                <a
                  href="#"
                  className="text-2xl font-bold text-gray-700 hover:underline"
                >
                  {sp.titulo}
                </a>
                <p className="mt-2 text-gray-600">{sp.contenido}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <a href="#" className="text-blue-500 hover:underline">
                  Ver más
                </a>
                <div>
                  <a href="#" className="flex items-center">
                    <img
                      src={sp.imagen}
                      alt="avatar"
                      className="hidden object-cover w-20 h-20 mx-4 rounded-full sm:block"
                    />
                    <h1 className="font-bold text-gray-700 hover:underline">
                      {sp.fuente}
                    </h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <span>Nada por aca</span>
      )}
    </main>
  );
};

export default Sports;
