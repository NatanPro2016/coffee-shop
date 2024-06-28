import React from "react";
import contents from "../contents.json";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-6 place-items-center">
      {contents.map((content) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 3 }}
          key={content.id}
          className="relative"
        >
          {content.popular && (
            <p className="absolute top-2 left-2 bg-[#F6C768] font-semibold text-[#111315] px-2 text-[10px] rounded-full">
              Popular
            </p>
          )}
          <img src={content.image} alt={content.image} className="rounded" />
          <div className="flex justify-between my-3">
            <p>{content.name}</p>
            <p className=" bg-[#BEE3CC] font-semibold text-[#111315] text-[14px] px-2 rounded">
              {content.price}
            </p>
          </div>
          <div className="flex align-center gap-1 justify-between">
            <div className="flex ">
              <img
                src={content.votes ? "/Star_fill.svg" : "/Star.svg"}
                alt=""
              />
              <p>
                {content.rating}
                <span className="text-[#6F757C]">({content.votes})</span>
              </p>
            </div>
            <p className="text-[#ED735D]">{!content.available && "Sold Out"}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Products;
