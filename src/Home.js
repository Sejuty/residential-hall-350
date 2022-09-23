import React from "react";
import Navbar from "./components/Navbar";
import style from "../src/css/Home.module.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";

const Home = () => {
  return (
    <div>
      <img className={style.img1} src={img1} alt="shahporan hall" srcset="" />
      <Navbar />
      <img className={style.img2} src={img2} alt="shahporan hall" srcset="" />
      <div className={style.btn}>
        <button>Apply now</button>
        <button>Log In</button>
      </div>
      <div className={style.about}>
        <div className={style.about_title}>About</div>
        <div className={style.about_des}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio placeat, ad repudiandae, eius nulla nobis eaque perferendis harum nihil reiciendis repellendus doloribus cupiditate. Cum, natus? Voluptatibus magni modi voluptatum dignissimos non inventore veritatis, ipsa amet earum, mollitia fugit. Error quo unde facilis nostrum totam neque fuga ut maxime obcaecati iure praesentium, repudiandae fugiat aliquam nemo eius, numquam sint in, earum temporibus sequi porro laudantium aperiam harum. Sunt corporis iusto voluptates ratione nulla repudiandae quasi pariatur iure, illo corrupti harum maiores, quisquam veritatis quis aliquam ipsam, itaque saepe. Beatae unde a itaque quia aspernatur nostrum debitis at neque modi? Maiores reprehenderit cum, quos sunt laudantium ea minus molestias omnis culpa obcaecati exercitationem distinctio doloremque atque saepe nemo vero explicabo voluptate facilis quaerat sapiente iure voluptas quo! Veniam reiciendis dolorem quod earum esse, fugit facilis maxime quibusdam quasi velit! Commodi, maxime atque. Dolorem commodi magnam inventore totam odio quidem dolore voluptas iure provident. Praesentium molestias est numquam cupiditate quia fugit. Assumenda aliquid doloribus, et tempora id sit placeat perferendis inventore repellendus delectus nam ut expedita molestiae officiis totam laboriosam, incidunt hic atque nesciunt voluptatum officia laudantium sapiente quasi. Minima vel quis, non fuga incidunt hic? Doloremque ea consequatur vitae? Assumenda, quibusdam aspernatur!
        </div>
      </div>
    </div>
  );
};

export default Home;
