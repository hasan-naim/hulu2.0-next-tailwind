import React from "react";
function HeaderIcon({ Icon, title }) {
  return (
    <div className="group flex flex-col items-center justify-center cursor-pointer w-12 sm:w-20 hover:text-white duration-1000 transition">
      <Icon
        className="mb-1 group-hover:animate-bounce duration-1000 transition  text-slate-100 group-hover:text-white"
        sx={{ fontSize: 30 }}
      />
      <p className="tracking-widest text-sm hidden transition duration-1000  group-hover:block">
        {title}
      </p>
    </div>
  );
}

HeaderIcon.propTypes = {};

export default HeaderIcon;
