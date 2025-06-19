import React from "react";
import DotBtn from "./DotBtn";
import ReasonToBuy from "./ReasonToBuy";
import TaggedImage from "./TaggedImage";
import ProductCard from "./ProductCard";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Button from "./Button";
import Faq from "./Faq";

const Main = () => {
  return (
    <main className=" bg-primary text-accent font-inter pt-[4.4vh] pl-[5vw] pr-[5vw]">
      <section className="pt-[4.4vh] pb-[4.4vh] pl-[5vw] pr-[5vw]">
        <p className="text-4xl tracking-tight leading-[1.5em]">
          Experience the ultimate in skincare with our expertly formulated
          products, crafted to nourish, protect, and rejuvenate your skin.
          Combining the finest natural ingredients with advanced science, our
          collection ensures every skin type can achieve a radiant, healthy
          glow. Embrace your beauty with confidence every day. Experience the
          ultimate in skincare with our expertly formulated products, crafted to
          nourish, protect, and rejuvenate your skin.
        </p>
      </section>

      <section className="pt-[4.4vh] pb-[4.4vh] pl-[5vw] pr-[5vw] mt-[10vh] flex justify-between gap-40">
        <div className="flex flex-col max-w-[39%] justify-between">
          <DotBtn text="Why Our Products" />
          <h2 className="text-4xl">YOUR SKIN DESERVES THE BEST CARE.</h2>
          <p className="text-[0.8em]">
            Discover a curated collection of skincare products designed to
            rejuvenate, protect, and pamper your skin. Explore our rage crafted
            with love backed by science, and inspired by nature.
          </p>
          <ReasonToBuy
            no="01"
            title="Bio Ingredients"
            text="Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin."
          />
          <ReasonToBuy
            no="02"
            title="Everything Natural"
            text="Pure ingredients for pure skin. The Perfect solution for your skin care needs."
          />
          <ReasonToBuy
            no="03"
            title="All Handmade"
            text="Made with love and care. Just for you. Give your skin the tender loving care it deserves."
          />
        </div>
        <div className="flex flex-col justify-between gap-2">
          <TaggedImage
            imgUrl="..\src\assets\images\ChatGPT Image Jun 15, 2025, 11_52_20 PM 1.png"
            tagUrl="..\src\assets\svg\award.svg"
            text="Best Skin Care Product Award Winning"
          />
          <div className="flex justify-between">
            <p>SINCE 2001</p>
            <p>LEARN MORE</p>
          </div>
        </div>
      </section>

      <section className="pt-[4.4vh] pb-[4.4vh] pl-[5vw] pr-[5vw]">
        <div className="flex justify-between items-center mt-[7.5vw] mb-[5vw]">
          <DotBtn text="Best Selling Products" />
          <h2 className="text-4xl max-w-[40%]">
            Skincare That Brings Out Your Natural Radiance
          </h2>
          <div className="flex gap-[60px]">
            <LeftArrow />
            <RightArrow />
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <ProductCard
            imgUrl="..\src\assets\images\Mask group.png"
            text="ALYA SKIN CLEANSER."
            price="FROM $29.99"
          />
          <ProductCard
            imgUrl="..\src\assets\images\Mask group (1).png"
            text="RITUAL OF SAKURA."
            price="FROM $27.99"
          />
          <ProductCard
            imgUrl="..\src\assets\images\Mask group (2).png"
            text="THE BODY LOTION."
            price="FROM $19.99"
          />
        </div>
      </section>

      <section className="pt-[4.4vh] pb-[4.4vh] pl-[5vw] pr-[5vw] mt-[10vh] relative">
        <img className="" src="..\src\assets\images\model.png" alt="" />
        <div className="flex flex-col items-center gap-7 max-w-[55%] absolute bottom-[12vh] left-[22vw]">
          <h2 className="text-5xl text-primary leading-[1.2em] text-center">
            Feel Beautiful Inside and Out with Every Product.
          </h2>
          <Button text="Shop Now" />
        </div>
      </section>

      <section className="pt-[4.4vh] pb-[4.4vh] pl-[5vw] pr-[5vw] flex flex-col items-center gap-[5vh]">
        <h2 className="text-4xl max-w-[45%] text-center mt-[7.5vh] tracking-wide leading-[1.2em]">
          Feel Beautiful Inside and Out with Every Product.
        </h2>
        <div className="flex gap-3">
          <Button text="NEW ARRIVAL" />
          <Button text="CLEANSING" />
          <Button text="ACNE FIGHTER" />
          <Button text="ANTI AGING" />
        </div>
        <div className="flex justify-between gap-3">
          <ProductCard
            imgUrl="..\src\assets\images\Mask group.png"
            text="ALYA SKIN CLEANSER."
            price="FROM $29.99"
          />
          <ProductCard
            imgUrl="..\src\assets\images\Mask group (1).png"
            text="RITUAL OF SAKURA."
            price="FROM $27.99"
          />
          <ProductCard
            imgUrl="..\src\assets\images\Mask group (2).png"
            text="THE BODY LOTION."
            price="FROM $19.99"
          />
        </div>
      </section>

      <section className="pt-[4.4vh] pb-[10vh] pl-[5vw] pr-[5vw] mt-[10vh] flex justify-between gap-35">
        <div>
        <TaggedImage
          imgUrl="..\src\assets\images\Mask group (3).png"
          tagUrl="..\src\assets\svg\headphone.svg"
          text="24/7 We’re Here to Help You"
        />
        </div>
        <div className="max-w-[35%] flex flex-col justify-between">
          <DotBtn text="Frequently Asked Question" />
          <h2 className="text-4xl leading-[1.2em]">
            Answers to Your Skincare Questions, All in One Place.
          </h2>
          <div>
            <Faq
              q="Are your products safe for sensitive skin?"
              a="Yes, our products are dermatologist-tested and formulated to be gentle on sensitive skin."
            />
            <Faq
              q="Are your products cruelty-free?"
              a="Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics."
            />
            <Faq
              q="What’s your return policy?"
              a="We offer a 30-day return policy for unused or gently used products—no questions asked."
            />
            <Faq
              q="Do you ship internationally?"
              a="Yes, we ship worldwide! Shipping times and fees vary by location."
            />
            <Faq
              q="How do i choose the right product?"
              a="Use our skincare quiz or contact our experts for personalized recommendations."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
