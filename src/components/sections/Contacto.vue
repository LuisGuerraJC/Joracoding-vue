<template>
  <section id="Contacto" class="min-h-screen h-auto overflow-hidden flex w-full">
    <div class="w-full max-w-7xl my-14 mx-auto">
      <div class="max-w-4xl text-center mx-auto">
        <h1 class="text-black text-5xl font-semibold">
          <span class="text-yellowBase">¡Hola!</span> Muchas gracias
        </h1>
        <p class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quam atque saepe
          dolore recusandae in, adipisci Lorem, ipsum dolor sit amet consectetur
          adipisicing eli
        </p>
      </div>

      <div
        class="grid grid-cols-[50%_40%] box-border grid-rows-2 gap-y-2 gap-x-10 cols justify-center"
      >
        <div
          class="bg-yellowBase col-start-1 col-end-2 flex flex-col justify-center space-y-7 px-10 font-poppins"
        >
          <h3 class="text-3xl">¿Necesitas que te guiemos?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nostrum
            obcaecati eius dolore aliquid ab nam, non rem ea libero, voluptatum nemo. Id
            magni ducimus quisquam a, enim dolorum accusantium.
          </p>
          <button
            class="text-black rounded-lg px-5 py-3 bg-gray-200 w-fit font-semibold text-xl"
          >
            ¡Comencemos!
          </button>
        </div>

        <div
          class="bg-black text-white col-start-1 col-end-2 flex flex-col justify-center space-y-7 px-10 font-poppins"
        >
          <h3 class="text-3xl">¿Ya tienes claro lo que necesitas?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio at incidunt,
            officia laborum ipsum, accusantium, fugit voluptates aliquam unde maiores.
            Ducimus alias dolores
          </p>
          <button
            class="text-black rounded-lg px-5 py-3 bg-gray-200 w-fit font-semibold text-xl"
          >
            ¡Comencemos!
          </button>
        </div>

        <div
          class="col-start-2 col-end-3 row-start-1 row-end-3 flex flex-col justify-center items-center p-12 rounded-lg shadow-lg shadow-gray-300"
        >
          <div class="text-start w-full mb-4">
            <h2 class="w-full text-black text-5xl font-semibold">Contacto</h2>
          </div>
          <form class="grid grid-cols-2 gap-4 w-full space-y-5">
            <input
              class="bg-transparent border-b-2 border-gray-300 placeholder:text-gray-300 outline-none py-2 px-3 col-start-1 col-end-3"
              type="text"
              name=""
              id="Nombre-apellido"
              placeholder="Nombre y Apellidos"
            />

            <input
              class="bg-transparent border-b-2 border-gray-300 col-start-1 col-end-3 placeholder:text-gray-300 outline-none py-2 px-3"
              type="text"
              name=""
              id="Correo"
              placeholder="Correo"
            />
            <select
              name="Proyecto"
              class="outline-none col-start-1 col-end-3 border-b-2 border-gray-300 py-2 px-3 placeholder:text-gray-300 text-gray-300"
              id="Proyecto"
              placeholder="Proyecto"
            >
              <option class="outline-none text-black border-none py-2 px-3" value="1">
                oe mierda
              </option>
              <option class="outline-none text-black border-none py-2 px-3" value="2">
                ya no se
              </option>
              <option class="outline-none text-black border-none py-2 px-3" value="3">
                me para
              </option>
            </select>
            <textarea
              name=""
              id=""
              class="outline-none bg-transparent resize-none col-start-1 col-end-3 border-b-2 border-gray-300 px-3 placeholder:text-white h-32"
              placeholder="Mensaje"
            ></textarea>
            <div class="col-start-1 col-end-3 flex">
              <input
                type="submit"
                value="Enviar"
                class="bg-black font-semibold text-xl tracking-wide text-white py-4 w-full font-poppins rounded-lg"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
