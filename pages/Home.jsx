import Link from "next/link";
import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import CurrencyInput from "../components/CurrencyInput";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Select from "../components/Select";
import SelectIcon from "../components/SelectIcon";
import Text from "../components/Text";

const staticData = [
  {
    id: "USDAB",
    value: "Alibaba USD",
    rate: 15755,
    fee: 600000,
    detail_send: 4,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/alibaba.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "EURAD",
    value: "Andorra",
    rate: 16269,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/andorra.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "ARS",
    value: "Argentina",
    rate: 136.4,
    fee: 65000,
    detail_send: 1,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/argentina.png",
    type: "1",
    personal: 1,
    corporate: 0,
  },
  {
    id: "AUD",
    value: "Australia",
    rate: 10562,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/australia.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "EURAT",
    value: "Austria",
    rate: 16269,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/austria.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "BDT",
    value: "Bangladesh",
    rate: 146.6,
    fee: 50000,
    detail_send: 3,
    cut_off: null,
    flag: "https://mobile.api.adaremit.co.id/flag/bangladesh.png",
    type: "1",
    personal: 1,
    corporate: 0,
  },
  {
    id: "EURBE",
    value: "Belgium",
    rate: 16269,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/belgium.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "BRL",
    value: "Brazil",
    rate: 2921,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/brazil.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "EURBG",
    value: "Bulgaria",
    rate: 16274,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/bulgaria.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "KHR",
    value: "Cambodia",
    rate: 3.81,
    fee: 80000,
    detail_send: 3,
    cut_off: null,
    flag: "https://mobile.api.adaremit.co.id/flag/cambodia.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "CAD",
    value: "Canada",
    rate: 11773,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/canada.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "CNYAL",
    value: "China Alipay",
    rate: 2228,
    fee: 90000,
    detail_send: 2,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/china.png",
    type: "1",
    personal: 1,
    corporate: 0,
  },
  {
    id: "CNYUP",
    value: "China Union Pay",
    rate: 2228,
    fee: 90000,
    detail_send: 0,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/china.png",
    type: "1",
    personal: 1,
    corporate: 0,
  },
  {
    id: "EURHR",
    value: "Croatia",
    rate: 16269,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/croatia.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "EURCY",
    value: "Cyprus",
    rate: 16269,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/cyprus.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "EURCZ",
    value: "Czech Republic",
    rate: 16269,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/czech_republic.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "EURDK",
    value: "Denmark",
    rate: 16269,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/denmark.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "EUREE",
    value: "Estonia",
    rate: 16269,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/estonia.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "EUR",
    value: "Euro Worldwide",
    rate: 16308,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/euro.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "EURFI",
    value: "Finland",
    rate: 16269,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/finland.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "EURFR",
    value: "France",
    rate: 16269,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/france.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
  {
    id: "EURDE",
    value: "Germany",
    rate: 16269,
    fee: 65000,
    detail_send: 3,
    cut_off: "00:00",
    flag: "https://mobile.api.adaremit.co.id/flag/germany.png",
    type: "3",
    personal: 1,
    corporate: 1,
  },
];
const Home = () => {
  const [sebelum, setSebelum] = useState();
  const [sesudah, setSesudah] = useState();
  const [selected, setSelected] = useState();

  let rate = 10000;

  const handleSebelum = (res) => {
    setSebelum(res);
    setSesudah(res * rate);
  };

  const handleSesudah = (res) => {
    setSesudah(res);
    setSebelum(res / rate);
  };

  const [data, setData] = useState(staticData);

  const onSearch = (query) => {
    if (query === "") {
      setData(staticData);
    } else {
      const filtered = staticData.filter(
        (data) => data.value.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")) || data.id.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
      );
      setData(filtered);
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-20"></div>
      <hr className="my-6" />
      <div className="flex gap-3 px-5 bg-red-50">
        <Button type="outlined" isLoading={true} disabled={true} />
        <Button disabled={true} isLoading={true} onClick={() => console.log(2131321)} />
        <button disabled={true} onClick={() => console.log("first")}>
          DSasda
        </button>
      </div>
      <hr className="my-6" />
      <div className="px-5">
        <Text type="title">Ini adalah Title</Text>
        <Text type="h1">Ini adalah h1</Text>
        <Text type="h2">Ini adalah h2</Text>
        <Text type="subtitle">Ini adalah subtitle</Text>
        <Text type="h3">Ini adalah h3</Text>
        <Text type="h4">Ini adalah h4</Text>
        <Text type="h5">Ini adalah h5</Text>
        <Text type="span">Ini adalah text tipe span</Text>
        <Text>Ini adalah text tipe default/p</Text>
      </div>
      <hr className="my-6" />
      <div className="max-w-xl px-5">
        <CurrencyInput placeholder="Ini merupakan sebuah placeholder" value={sebelum} onValueChange={(res) => handleSebelum(res)} />
        <CurrencyInput label="sesudah" placeholder="Ini merupakan sebuah placeholder" value={sesudah} onValueChange={(res) => handleSesudah(res)} />
        <br />
        <br />
        <Select
          disabled
          value={selected}
          onChange={setSelected}
          data={data}
          //  optionKey="country"
          iconKey="flag"
          onSearch={onSearch}
          placeholder="Pilih Negara"
          label="Negara Tujuan"
        />
        <br />
        <br />
        <SelectIcon
          value={selected}
          onChange={setSelected}
          data={data}
          // optionKey="country"
          iconKey="flag"
          onSearch={onSearch}
          placeholder="Pilih Negara"
          label="Negara Tujuan"
        />
      </div>
      <hr className="my-6" />

      <div className="flex flex-col gap-4 px-10 bg-red-50">
        <Menu>
          {["Menu petermana", "Ini yang kedua", "terus ada juga 3 asdnkalsndkasndka nskldnaskndals"].map((item, i) => {
            return (
              <Link key={i} href="/gambar" className="menu-item">
                {item}
              </Link>
            );
          })}
        </Menu>
        <div className="flex flex-wrap justify-center gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores, non fugiat nemo ipsam nulla incidunt. Perspiciatis, dolores impedit eligendi, consequatur minus tenetur, totam voluptatum ab eveniet officia quos! Quae
          aliquam mollitia excepturi esse provident assumenda ipsa facilis perferendis vero, eum suscipit voluptas officiis ipsam voluptatum! Ea quaerat ut distinctio odit, nihil quam omnis id voluptas impedit excepturi! Fugiat nisi quae
          doloribus ratione harum aut hic quis id earum debitis! Maxime ab, dicta sequi natus, explicabo voluptate assumenda labore iusto ipsa libero qui vero deserunt voluptatem. Minima enim inventore voluptas in sint veritatis nemo odio
          sit, perferendis ab maxime nulla a maiores cum qui voluptates aut fuga ratione incidunt ipsum repellendus? Quibusdam quisquam minima exercitationem ad. Sit aut animi recusandae nesciunt architecto exercitationem ab, tenetur dicta
          quidem repellat inventore numquam aliquid harum. Quisquam, nulla debitis qui ullam, cum, dolore doloremque quae explicabo deleniti beatae vel! Quos vero dolorum mollitia officia, blanditiis cum iste aliquid a, cumque accusantium
          quis. Animi facilis provident ad praesentium possimus repellendus ipsum corrupti, cupiditate odit voluptate nihil, laudantium quasi sapiente, tempora adipisci alias quae vel distinctio eveniet nulla? Repellendus suscipit facilis
          eos sint eaque doloribus incidunt, perferendis illo quo ullam saepe dolorem? Alias non error consectetur molestias dolor sint quisquam sequi cupiditate consequuntur architecto neque eos, ipsum animi aliquid eaque? Explicabo quis
          quae iusto nobis enim aspernatur corporis delectus ducimus libero. Adipisci rerum tenetur quia dolore, numquam a hic modi natus, excepturi dignissimos obcaecati fugit! Perferendis libero architecto error, accusamus doloribus modi
          reiciendis dolores atque voluptatum officia, fuga nam quia provident minus dolore quasi consequatur accusantium cumque molestiae illum. Quas culpa mollitia nam sit minus rem delectus hic magnam quidem iure autem praesentium
          facilis deserunt error asperiores adipisci laudantium consectetur ea aut optio recusandae, voluptate nesciunt numquam qui. Quibusdam cupiditate id reprehenderit impedit quas! Placeat, numquam consequatur magnam aspernatur,
          repellat, officia debitis suscipit natus repellendus dolore sunt necessitatibus ut cumque incidunt voluptates error recusandae nobis earum aperiam alias iure soluta quam! Consectetur optio fugit odio magnam et blanditiis inventore
          impedit distinctio perferendis rem esse, nostrum eos porro fuga! Porro id sequi labore vel reiciendis? Exercitationem maiores, minus quae aliquam ipsa nam dolorum! Libero consectetur placeat in mollitia explicabo incidunt tempore
          accusantium qui vel minima! Omnis nisi ad veniam porro ratione natus nostrum quasi qui nobis, nam atque, incidunt perferendis aut quos officia nihil quaerat aliquid eligendi possimus quam. Officiis ad repellat laborum ullam! Magni
          labore dolore quasi dolorem fugiat asperiores cupiditate dolorum omnis praesentium laborum repellendus possimus eaque pariatur vitae aperiam, aut in provident sapiente ab est. Cupiditate eum cum tempora beatae nemo fugiat
          possimus. Voluptatum nulla cupiditate officia rerum harum! Non, possimus dolores nulla iste eius tempora at molestias, maxime rerum suscipit numquam assumenda. Nesciunt debitis iure corporis dolor autem quaerat vero in beatae
          maxime, nostrum, sapiente ipsa laboriosam, unde perspiciatis officia expedita quisquam suscipit delectus aperiam doloribus voluptate quos minus. Corporis neque nobis ducimus! Vitae, minima facere voluptas eligendi eveniet nisi
          quidem iusto fuga odit ut doloremque magni obcaecati cum, est, magnam aliquam sint.
          <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere numquam, quod accusantium ut dolore quia vel. Eum a corporis, excepturi mollitia officia dolorum perspiciatis iste repudiandae illo, labore earum ex? Sapiente
          illum corporis earum aliquid libero eaque? Non vel eveniet quidem eius assumenda culpa, labore natus eaque, hic quo aliquam molestias eligendi, necessitatibus quia quasi nesciunt. Similique nostrum nobis deserunt ipsam cum officia
          repudiandae recusandae enim dolor, magnam voluptatum officiis reprehenderit ratione esse earum! Aliquid delectus autem ex ipsam perspiciatis quidem aspernatur, aliquam nihil suscipit amet eius sed exercitationem odit iure maiores
          deserunt inventore quos tempora error quam quo, alias veniam? Doloremque, assumenda officia perferendis magni recusandae corporis quod rem quaerat repudiandae quia tempora odio eligendi? Qui, quibusdam commodi accusamus quae
          voluptatem neque! Assumenda, odit ad doloribus nihil, repudiandae delectus velit earum omnis quos libero possimus commodi blanditiis maiores in labore? Error, obcaecati! Nostrum eos, autem, amet provident asperiores, at
          dignissimos expedita iusto illo consequuntur ut error harum. Ducimus exercitationem debitis tempore necessitatibus ex expedita voluptatem, minus odit est laborum voluptate quas libero inventore quidem alias vero nobis neque?
          Dolorum esse eum assumenda mollitia aperiam, quaerat tempore odio quasi excepturi accusamus voluptates consequuntur cupiditate inventore facilis dolorem officia ducimus eos sint aspernatur perferendis! Veritatis voluptatum omnis
          facere, assumenda porro nisi. Harum quibusdam quod doloribus voluptate aut ex perferendis dolor aliquam? Facilis odio voluptatem vitae iure obcaecati ab dicta dignissimos. Eligendi at doloribus, omnis delectus a vitae similique
          labore praesentium obcaecati, voluptatibus nobis numquam expedita maiores accusantium illo vero velit! Iure, veritatis velit. Maxime necessitatibus officia dolor doloribus fugit recusandae eligendi cupiditate fuga blanditiis
          dolorum ducimus quis omnis eos aliquid, quaerat sequi sunt fugiat modi vitae consequatur, a doloremque quas. Iusto, ex nihil excepturi modi assumenda corporis voluptatum aliquam repudiandae recusandae quis aut atque quod fugit
          aspernatur non incidunt officia libero magnam unde rem laborum ratione? Quisquam dolorum voluptas ea error dolorem enim ullam dolor sapiente nihil in quaerat perferendis sunt molestiae, blanditiis tenetur maiores itaque maxime
          possimus? At, vel. Quidem praesentium eius provident soluta deserunt eaque dolore assumenda temporibus iste quam adipisci numquam, vel totam accusantium accusamus est eligendi, eveniet non nesciunt incidunt dolorem modi! At ullam
          voluptates esse ea nisi alias numquam illo explicabo inventore eum reprehenderit labore quasi possimus magni adipisci cupiditate deleniti, enim assumenda mollitia ut modi accusamus ipsam fugiat eos? Laboriosam quaerat libero
          facilis nostrum, nihil aspernatur blanditiis odio dolore inventore dolor odit, numquam, at fugit dolorem porro? Placeat, atque eveniet nesciunt eius libero fuga voluptatibus autem facere dolore explicabo laudantium ipsa nobis sit
          iure excepturi hic officia quisquam. Praesentium soluta ipsa hic culpa consequatur suscipit numquam vitae. Animi accusamus laboriosam, nobis tenetur accusantium nam doloremque fugiat quas maxime eveniet harum quibusdam earum
          repellat saepe libero architecto ea recusandae? Odit laudantium quo omnis architecto obcaecati ipsum odio itaque exercitationem saepe quasi, quibusdam beatae in excepturi id cumque culpa unde quam recusandae numquam voluptates!
          Deleniti pariatur modi, veritatis est eum eius, consequuntur molestiae similique iste soluta, hic totam enim quod reiciendis placeat velit nostrum amet ratione expedita cum culpa. Eos voluptatem omnis similique, aliquid nisi
          beatae fuga culpa tempore amet optio temporibus tenetur voluptates deserunt quaerat. Ducimus saepe suscipit, dolores repudiandae libero accusamus eius dolore voluptatibus assumenda commodi quasi repellat velit officiis eum quo,
          non quis! Facere nihil quidem delectus doloribus distinctio nisi mollitia inventore nam consequuntur velit quae recusandae asperiores harum laudantium, commodi tempora? Doloribus odio beatae ullam iure facere veniam maiores eius
          non dolorum rerum fugiat, quo porro quam. Eum, animi. Fuga, officia adipisci. Quidem aspernatur excepturi doloremque ab modi quaerat enim vero fugit nam. Consequuntur dolore minus sit earum commodi nam hic, quidem dolorem
          molestiae quasi! Tempora, consequuntur architecto. Itaque alias ullam laborum? Odio cum, nemo voluptatem non dolorum labore. Sit sunt corporis officia earum accusamus necessitatibus quia, hic iste, unde quod inventore aut id neque
          molestiae. Blanditiis, iure sit a ea quaerat temporibus eum enim consequatur totam aperiam maiores eveniet hic inventore officia eligendi fuga numquam iusto delectus est aliquam rem pariatur nulla sunt. Quaerat quis facilis, vero
          alias culpa consequatur labore numquam rerum laborum veritatis, itaque, ullam nesciunt ratione ut reiciendis. Vero beatae accusamus deserunt quam, possimus quis mollitia tenetur dignissimos nemo molestiae dolor ut necessitatibus
          debitis. Nobis minima hic sunt, eos id ea odio atque esse maxime nisi suscipit. Dolores magnam ipsum nulla ea quam praesentium minus natus? Corporis voluptatem natus nemo sed dignissimos saepe, unde nulla rerum numquam incidunt
          quibusdam, ipsam voluptatibus eum quisquam accusantium nesciunt sint ullam laboriosam nihil iure praesentium. Minus repellat quis, quae explicabo eum, eius amet dolor nostrum quia dolores expedita rem fugiat aliquid reiciendis a
          in, repellendus nobis excepturi quod? Aperiam eius nostrum vitae et tempora, sed vel accusamus praesentium reiciendis a cum totam voluptatibus debitis excepturi quas atque error commodi corrupti quia! Dolorum vero, quisquam iure
          expedita ipsum alias laudantium vel illo autem quo excepturi quasi obcaecati repudiandae ab quia aut? Libero ab aliquam inventore eveniet, sint, quod sit consectetur voluptates assumenda dicta quae totam, eius autem cupiditate.
          Sunt repudiandae adipisci ex ullam minima recusandae quisquam aperiam, explicabo et eveniet enim, dolore quod eum ipsam cupiditate doloremque unde consequatur ea vero quis. Magni, beatae dicta. Sed iure corrupti, quis dignissimos
          eos earum. Adipisci non odit mollitia consequuntur libero! Ducimus in alias sequi tempore, ut rerum? Corrupti, animi voluptatem eum laborum laboriosam, reiciendis id commodi fugiat sapiente nesciunt nisi ad consequuntur repellat!
          Sed iusto fugit cupiditate similique magni beatae excepturi numquam est illo doloribus, aliquam error architecto laborum vel facilis ducimus possimus voluptatum rem, repudiandae ipsa quia molestiae, expedita obcaecati? Iure,
          itaque! Nihil commodi eos voluptate sapiente! Nostrum, repellat, laborum aperiam magnam accusamus similique earum provident dolorem numquam pariatur dolorum reiciendis enim aspernatur vitae quia incidunt accusantium aliquam cumque
          explicabo dignissimos. Delectus nulla reiciendis dolore at nobis vero ab, cumque fuga ut facere pariatur eligendi, sequi dolor? Illo dolor natus corporis numquam est optio cumque quia voluptatibus magnam provident dolorem
          repudiandae deleniti, ipsam corrupti rerum iure laudantium nobis fugiat accusamus sit aliquid! Iste obcaecati nobis, eum tempora nemo ipsum incidunt fugiat quidem laboriosam asperiores!
        </p>
      </div>
      <hr className="my-6" />
      <div className="overflow-clip">
        <div className="container flex py-10 mx-auto ">
          <div className="w-1/2 my-10 ">
            <h3 className="text-4xl font-bold text-slate-800 sm:text-5xl md:text-6xl">
              Landing <span className="text-sky-500">Page</span>ku
            </h3>
            <p className="mt-2 text-slate-600 sm:mt-4 sm:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id eius ut provident maxime commodi architecto delectus, fugit autem esse veniam, animi facilis et quibusdam, saepe error aperiam officia pariatur distinctio!
            </p>
          </div>
          <div className="block w-1/2 px-4">
            <div className="w-[1000px] ">
              <img src="https://source.unsplash.com/random/950x360" className="object-cover"></img>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6" />

      <div className="container max-w-md px-6 mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0">
        <div className="lg:p-12 lg:flex-1">
          <h3 className="text-4xl font-bold text-slate-800 sm:text-5xl md:text-6xl">
            Testing Tail<span className="text-sky-500">wind</span>
          </h3>
          <img src="https://source.unsplash.com/random/1280x960" className="mt-4 shadow-xl rounded-xl sm:mt-6 sm:h-64 sm:w-full sm:object-cover lg:hidden"></img>
          <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:mt-8 sm:text-4xl">Ini adalah coba coba tailwind</h2>
          <p className="mt-2 text-slate-600 sm:mt-4 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias debitis voluptates accusantium tempora consequatur dicta. Vero, eius. Fugiat perferendis illum voluptatibus cumque quisquam necessitatibus corporis unde, nemo
            pariatur.
          </p>
          <div className="mt-4 sm-mt-6">
            <a href="#" className="inline-block px-5 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-red-600 rounded-lg shadow-lg sm:text-base">
              Coba Click disiniaja
            </a>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 ">
          <img src="https://source.unsplash.com/random/1280x960" className="object-cover rounded-l-full"></img>
        </div>
      </div>
    </>
  );
};

export default Home;

{
  /* <div className="container max-w-md px-6 mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0">
        <div className="lg:p-12 lg:flex-1">
          <h3 className="text-4xl font-bold text-slate-800 sm:text-5xl md:text-6xl">
            Testing Tail<span className="text-sky-500">wind</span>
          </h3>
          <img src="https://source.unsplash.com/random/1280x960" className="mt-4 shadow-xl rounded-xl sm:mt-6 sm:h-64 sm:w-full sm:object-cover lg:hidden"></img>
          <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:mt-8 sm:text-4xl">Ini adalah coba coba tailwind</h2>
          <p className="mt-2 text-slate-600 sm:mt-4 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias debitis voluptates accusantium tempora consequatur dicta. Vero, eius. Fugiat perferendis illum voluptatibus cumque quisquam necessitatibus corporis unde, nemo
            pariatur.
          </p>
          <div className="mt-4 sm-mt-6">
            <a href="#" className="inline-block px-5 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-red-600 rounded-lg shadow-lg sm:text-base">
              Coba Click disiniaja
            </a>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 ">
          <img src="https://source.unsplash.com/random/1280x960" className="object-cover rounded-l-full"></img>
        </div>
      </div>
      <hr className="my-36" />
      <div className="container mx-auto bg-red-200">
        <div className="flex">
          <div className="lg:p-12 w-full max-w-[650px] bg-blue-500">
            <h3 className="text-4xl font-bold text-slate-800 sm:text-5xl md:text-6xl">
              Testing Tail<span className="text-sky-500">wind</span>
            </h3>
            <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:mt-8 sm:text-4xl">Ini adalah coba coba tailwind</h2>
            <p className="mt-2 text-slate-600 sm:mt-4 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias debitis voluptates accusantium tempora consequatur dicta. Vero, eius. Fugiat perferendis illum voluptatibus cumque quisquam necessitatibus corporis unde, nemo
              pariatur.
            </p>
            <div className="mt-4 sm-mt-6">
              <a href="#" className="inline-block px-5 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-red-600 rounded-lg shadow-lg sm:text-base">
                Coba Click disiniaja
              </a>
            </div>
          </div>
          <div className=" bg-red-50">
            <div className=" gap-3 h-ful flex w[500px] bg-black">
              <img src="https://source.unsplash.com/random/1280x960" className="object-cover w-[200px] h-[200px]  m-auto"></img>
              <img src="https://source.unsplash.com/random/1280x960" className="object-cover w-[200px] h-[200px] m-auto"></img>
              <img src="https://source.unsplash.com/random/1280x960" className="object-cover w-[200px] h-[200px] m-auto"></img>
              <img src="https://source.unsplash.com/random/1280x960" className="object-cover w-[200px] h-[200px] m-auto"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-64"></div>      */
}
