import { WhatsApp } from "@mui/icons-material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black shadow-[0_17px_27px_10px_rgba(0,0,0,0.25)] items-start md:flex justify-evenly p-8 sm:grid sm:gap-4 ">
      <div className="text-center">
        <a
          className="text-white"
          href="https://www.google.com/maps/place/R.+Rio+Grande+do+Norte,+70+-+Pomp%C3%A9ia,+Santos+-+SP,+11065-460/@-23.964619,-46.3434245,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce03167b6c07b3:0x1c53c3a6d9721452!8m2!3d-23.9646239!4d-46.3412358"
        >
          <h3 className="font-semibold">LOCALIZAÇÃO</h3>
          <p className="font-medium">Rua Rio Grande do Norte 70, Sala 4F.</p>
          <p className="font-medium">Santos,Sp</p>
        </a>
      </div>

      <div className="text-center mt-4 md:mt-0">
        <a
          className="flex flex-col items-center text-white"
          href="https://api.whatsapp.com/send?phone=13988626005&text=Olá%20Estou%20interessado%20em%20um%20imóvel"
        >
          <h3 className="font-semibold">CONTATO</h3>
          <div className="flex items-center mt-1">
            <WhatsApp />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
