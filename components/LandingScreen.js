import { useEffect } from "react";
import "../styles/LandingScreen.css";
import anime from "animejs";
import Image from "next/image";

export default function LandingScreen() {
  useEffect(() => {
    var textWrapper = document.querySelector(".text");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: ".text .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: ".letter:hover",
        scale: [1, 5],
        easing: "easeOutExpo",
        duration: 950,
      });
  }, []);

  return (
    <div className="landingScreen">
      {/* <Image src="/LPbg.jpg" alt="bg image" fill={true} style={{ objectFit: "cover" }}></Image> */}
      <div className="glass">
        <div className="textContainer">
          <div className="text">Hi, I'm ATHARV SINGH</div>
          <div className="description">I’m a UX/UI designer, game and full-stack developer</div>
        </div>
      </div>
    </div>
  );
}
