import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";


const SliderLeft = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  
 
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation ">
      <div className="!py-12 !px-6  ">
        <ul className="list-none">
          <li className="!py-4" onClick={toggleDrawer(false)}>
            <a href="#Features">Features</a>
          </li>
          <li className="!py-4" onClick={toggleDrawer(false)}>
            <a href="#Workflow">Workflow</a>
          </li>
          <li className="!py-4" onClick={toggleDrawer(false)}>
            <a href="#Pricing">Pricing</a>
          </li>
          <li className="!py-4" onClick={toggleDrawer(false)}>
            <a href="#Test">Testimonials</a>
          </li>
        </ul>
        <div className="flex gap-4 !py-4">
          <button
            type="button"
            className="link w-full cursor-pointer border rounded-sm !px-1 !py-1 text-[13px] font-medium  "
          >
            Sign In
          </button>
          <button
            type="button"
            class="text-white w-full text-[12px] btnColor border font-medium rounded-sm !px-3 !py-[5.5px] text-center inline-flex items-center cursor-pointer "
          >
            Create an account
          </button>
        </div>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer
        open={props.isOpenCatPanel}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#101010",
            color: "white",
            height: 580,
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
};

export default SliderLeft;
