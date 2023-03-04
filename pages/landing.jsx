import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import GAS from "../public/GAS.svg";
import GAS2 from "../public/GAS2.svg";

const landing = () => {
  return (
    <div className="bg-[#EDF9FF]">
      <Navbar />
      {/* Heroo Section Start */}
      <section
        id="home"
        className="
        back
        relative
        pt-36"
      >
        {/* <Back className="absolute top-0 le  " /> */}
        <div className="container h-[700px]">
          <div className="flex flex-wrap">
            <div className="w-full px-4 pt-20 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl ">
                Hello semua , Ini merupakan <span className="mt-1 block text-4xl font-bold text-dark lg:text-5xl">title kita</span>
              </h1>
              <h2 className="mb-5 text-lg font-medium text-slate-500 lg:text-2xl">
                ini merupakan
                <span className="text-dark"> landing heronya</span>
              </h2>
              <p className="mb-10 font-medium leading-relaxed text-slate-400">
                Ini adalah sebuah landing page dari website kita bukan? <span className="font-bold text-dark">bukan!</span>
              </p>

              <a href="#" className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg">
                Hubungi saya
              </a>
            </div>
            <div className="z-20 mb-10 w-full self-end px-4 lg:w-1/2">
              <div className="lg:right  mt-10 lg:mt-0">
                <Image src={"/gmbr.png"} width={761} height={600} className="z-30 mx-auto h-[531px] w-[360px] max-w-full rounded-xl" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <GAS className="absolute bottom-0 z-10 w-full bg-red-100" />
        {/* <GAS2 className="absolute bottom-0 -z-0 w-screen" /> */}
        {/* <Image src="/GAS.svg" width={100} height={300} alt="wave" className="absolute bottom-0 -z-0 w-full bg-black" /> */}
        {/* <svg className="absolute bottom-0 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#EDF9FF"
            fillOpacity="1"
            d="M0,256L80,234.7C160,213,320,171,480,165.3C640,160,800,192,960,176C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg> */}
      </section>
      {/* Heroo Section End */}
      <section className="container h-[200vh] w-full">
        This is it dasdas Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quaerat minus, dolore ea voluptatibus molestias doloremque cum in expedita reiciendis amet necessitatibus odit quos itaque et nulla nihil esse nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto harum quo perferendis ullam possimus, nobis similique quia modi rerum quod, explicabo commodi nam. Fugiat sint non, asperiores et id eligendi. Tempore
        nostrum officiis provident assumenda qui totam architecto ut suscipit vero sed. Aliquid nostrum amet quas eaque cupiditate provident enim eos, ullam laudantium nesciunt, tempora voluptas sit beatae? Deleniti voluptatum nobis vero
        quam illum nulla reprehenderit exercitationem enim quas repellendus, non omnis? Enim eligendi delectus repudiandae eius molestiae natus, saepe reiciendis officiis illum voluptas ut voluptatum velit atque vitae nam ad facilis nihil
        dolor. Ad dicta dolore expedita velit nobis voluptas excepturi accusantium eius veritatis, a facilis nisi provident adipisci quidem nemo quis recusandae, quisquam, repellendus explicabo est quibusdam labore omnis! Assumenda
        perspiciatis, cumque sunt corrupti expedita saepe! Rerum rem at eaque. Porro rem iste suscipit id, dolorum beatae ipsum perspiciatis, possimus quis velit soluta molestiae quasi recusandae ipsam repellendus unde alias. Ullam,
        quisquam. Temporibus qui itaque, nobis facere assumenda, sapiente error tempore a dignissimos ex, eos enim nemo sunt dolore. Commodi suscipit, non, expedita nostrum corporis aliquid accusantium ipsam deserunt obcaecati illum ullam.
        Eligendi debitis at facere sit rem minima quo, quaerat dolorum, id, dignissimos saepe repellat explicabo labore voluptatem quasi illum sequi. Porro accusantium asperiores vel sapiente quidem sed in doloremque, recusandae ipsa eum.
        Sint, dignissimos. Consequuntur perferendis maxime temporibus recusandae ratione illum saepe accusamus fugit, ea alias sint repellat iste, culpa qui cumque natus explicabo! Illo impedit nesciunt accusamus? Assumenda dolores alias
        iure reiciendis voluptatem distinctio tempore repellat minus architecto sunt culpa cum corporis doloremque ab beatae officia, labore officiis debitis illo quibusdam blanditiis eveniet ipsum? Laboriosam at labore assumenda ipsum!
        Nisi hic iste pariatur tempore consequuntur dolores debitis rem labore quam, dicta at, sapiente nobis doloremque. Magni cum laborum repudiandae nobis hic facilis repellat esse vitae cupiditate quaerat recusandae quas, ex neque porro
        illum quo dolor rem odio eius velit perspiciatis natus. Eum nesciunt nihil voluptatibus quod explicabo veniam obcaecati facere facilis ut, suscipit sed officia numquam optio, in asperiores hic eaque sapiente enim! Mollitia aliquam
        laborum, autem ducimus maiores perspiciatis odit iste nam inventore eligendi. Illo ipsum exercitationem maxime accusamus, nesciunt recusandae, dolorum odio aliquam fugit quam in repellendus adipisci eaque nulla non nisi eveniet.
        Assumenda perferendis aspernatur, dolor voluptates, doloremque facere vitae harum in delectus maxime doloribus magnam veniam, corrupti perspiciatis repellendus veritatis sed odit ad nesciunt laboriosam cum iste tempore excepturi.
        Distinctio culpa laborum et accusamus quasi. Incidunt repudiandae voluptatem, illum quo unde facilis sequi est officia praesentium quia veniam tempora, architecto ratione, excepturi dicta ullam cupiditate voluptate qui doloremque
        ab! Tenetur dolore necessitatibus officia. Laborum cumque, nobis quo dolorem similique nihil! Dicta deleniti illo, inventore voluptate libero numquam! Voluptatum dicta blanditiis, dolores odio quidem quo, error placeat minima
        voluptate atque repellendus suscipit impedit sed velit porro, esse perferendis harum quas sint voluptas iure sunt. Culpa delectus quae provident ex iusto esse, magni sit nulla nam corrupti cupiditate quibusdam, id praesentium? A
        molestias praesentium quis cum deleniti fugit necessitatibus ducimus totam harum, minima ullam sequi laboriosam cumque sed iusto amet in commodi quia. Harum voluptatem ut exercitationem enim, blanditiis magnam debitis porro
        distinctio perspiciatis architecto ratione, quibusdam iure veniam nam aspernatur! Commodi laudantium ab quos distinctio cupiditate inventore amet dolore deleniti ipsum ipsa, sit facere, pariatur perspiciatis eaque soluta enim minus
        repudiandae quidem repellat at! Neque excepturi distinctio deserunt. Nulla voluptatem possimus dignissimos et tempora temporibus quia hic? Ipsam est voluptatum sapiente. Ad deserunt ipsum harum pariatur rem, labore dolorem
        praesentium molestiae sunt sed numquam voluptatibus, deleniti nesciunt quis maiores voluptate cupiditate! Distinctio placeat provident temporibus repudiandae, soluta quae sit, aut nulla saepe facilis molestias officia quas
        aspernatur, minima illo quos esse repellat sed molestiae ut optio! Delectus, reiciendis. Error sapiente, blanditiis inventore quidem eaque illum nobis. Aut quam delectus voluptas officiis dolor recusandae ab reiciendis alias ullam
        nulla odio beatae aliquam sequi at ipsam quo tempore illo repellat debitis adipisci quod, porro iure soluta! Facere aliquam tempora odio, vero praesentium voluptatibus repellendus et impedit ratione id possimus quas distinctio, ex
        quam recusandae ad atque dolore a debitis? In nesciunt iste labore voluptas maxime nemo sunt ex cupiditate repellat esse natus vero facere, accusamus sed dignissimos optio est, aperiam beatae voluptatem tempore perspiciatis? Eveniet
        commodi dicta culpa ratione nostrum, magnam error, laborum voluptatum quibusdam suscipit optio ut in corrupti assumenda velit dolorem laudantium adipisci doloribus asperiores praesentium quam quod. Quidem iure laboriosam
        dignissimos? Iste consequatur numquam nesciunt, eaque veniam, cumque nulla libero excepturi commodi corporis temporibus, debitis praesentium beatae non sunt tempora? Eum voluptatem aspernatur eaque necessitatibus laboriosam,
        obcaecati optio consequuntur. Enim praesentium quam a ducimus perferendis minus nostrum. Ab recusandae ipsam nostrum. Unde minima maxime cumque, optio quo nostrum officia. Aliquid, obcaecati doloribus. Officia ullam neque quia
        doloremque nemo corrupti fuga commodi debitis iusto aliquid aperiam, nihil repellat voluptate aut ducimus suscipit illo, illum non ex minima atque architecto animi recusandae. Voluptas, fugiat nemo? Aspernatur, nesciunt incidunt.
        Qui, ab obcaecati excepturi repellendus nobis minus vitae, accusantium hic nostrum ut quasi eveniet culpa pariatur est earum ad maiores officiis. Quod, optio quidem quos voluptatibus atque corporis ipsa voluptate quas esse quo,
        fugiat qui! Saepe, vel praesentium eveniet expedita ipsum repellat eligendi iste in fugit placeat perspiciatis, laudantium iure, molestias nam atque rem quasi quos. Expedita temporibus nihil illum rem quae tenetur reprehenderit
        nostrum velit, natus illo quidem saepe officia ad molestias voluptatum, minima commodi. Nobis dolorum sit ducimus ut excepturi? Impedit, quam? Ut similique minus voluptates tenetur quas, quos obcaecati accusantium officiis placeat
        ratione, unde natus blanditiis pariatur sunt maxime quam soluta illum, mollitia illo itaque quis sequi quasi reiciendis vel? Illum fuga esse nulla, earum possimus cumque soluta quo sit ullam nobis explicabo neque harum consequatur?
        Impedit ipsa amet, autem eos officia blanditiis unde illum, provident sed porro optio et nulla? Ducimus adipisci at accusantium cumque odio beatae. Dolorum consequatur distinctio, voluptas culpa perspiciatis officia deserunt.
        Excepturi, voluptate, quas veniam repellendus alias odit delectus a optio voluptatem enim voluptatibus dolor repudiandae cumque deleniti ex voluptates nihil voluptas est in! Vitae, tempore?
      </section>
    </div>
  );
};

export default landing;
