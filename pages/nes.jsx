import React from "react";

const nes = () => {
  return (
    <div className="container relative bg-sky-100">
      <div className="grid h-[300px] grid-cols-1 grid-rows-4 gap-4 overflow-hidden lg:grid-cols-5 lg:grid-rows-1">
        <div className="flex h-full items-center justify-center bg-red-100 lg:col-span-2 lg:justify-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illum corporis corrupti doloribus quaerat dicta consequuntur. Omnis dolorem dignissimos nam commodi sint molestiae. Aspernatur necessitatibus numquam sint alias ipsa
          sunt porro adipisci assumenda dolorum
        </div>
        <div className="flex h-full items-center justify-center bg-red-100 lg:justify-start">Ini merupakan sebuah aoaa</div>
        <div className="flex h-full items-center justify-center bg-red-100 lg:justify-start">Hello WOrld this ins isnad asda dasda</div>
        <div className="flex h-full flex-wrap items-center justify-center bg-red-100 lg:justify-start">tes</div>
      </div>
      {/* <div className="absolute h-full w-1/2 border-r-4 border-dashed border-emerald-600 bg-black"></div> */}
    </div>
  );
};

export default nes;
