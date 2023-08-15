import {
  NotificationsOutlined,
  Language,
  Settings,
  Menu,
  TimerOutlined,
  QuestionAnswerOutlined,
  SettingsOutlined,
  ControlPointDuplicateRounded,
} from "@mui/icons-material";
import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Navbar = ({ setShowSidebar }) => {
  const { loggedUser } = useSelector((state) => state.user);

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="flex flex-col sticky w-full sm:h-[4rem] h-[7rem] md:sticky bg-white top-0 z-[2000] border-b-[1px] border-b-gray-300">
      <div className="wrapper sm:h-full h-[4rem] md:px-[24px] sm:px-[1rem] px-[8px] flex items-center justify-between sm:border-none border-b-[1px] border-gray-300 sm:shadow-none ">
        {/* left section */}
        <div className="flex justify-start gap-[4px] mt-1">
          <IconButton
            onClick={() => setShowSidebar((pre) => !pre)}
            className="md:hidden flex cursor-pointer hover:text-red-400">
            <Menu />
          </IconButton>
          <div>
            <p className="text-red-400 mt-1 text-xl">
              <TimerOutlined className="mb-1" /> {date.toLocaleTimeString()}
            </p>
          </div>
        </div>

        {/* right section */}
        <div className="flex gap-[8px] mt-1">
          {/* icons */}
          <div className="sm:flex items-center hidden gap-[8px] ">
            <Tooltip title="Timer" arrow placement="bottom">
              <IconButton className="h-fit hover:text-red-400" size="small" aria-label="menu">
                <TimerOutlined />
              </IconButton>
            </Tooltip>

            <Tooltip title="Timer" arrow placement="bottom">
              <IconButton className="h-fit hover:text-red-400" size="small" aria-label="menu">
                <QuestionAnswerOutlined />
              </IconButton>
            </Tooltip>

            <Tooltip title="Settings" arrow placement="bottom">
              <IconButton className="h-fit hover:text-red-400" size="small" aria-label="menu">
                <SettingsOutlined />
              </IconButton>
            </Tooltip>

            <Tooltip title="Add User" arrow placement="bottom">
              <IconButton className="h-fit hover:text-red-400" size="small" aria-label="menu">
                <ControlPointDuplicateRounded />
              </IconButton>
            </Tooltip>

            <Tooltip title="Language" arrow placement="bottom">
              <IconButton className="h-fit hover:text-red-400" size="small" aria-label="menu">
                <Language />
              </IconButton>
            </Tooltip>
          </div>
          {/* profile */}
          <div className="flex items-center ">
            <span className="capitalize ">{loggedUser?.username}</span>
            <Tooltip title="Profile" arrow placement="bottom">
              <Avatar className="m-2 cursor-pointer capitalize ">{loggedUser?.username[0]}</Avatar>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex-[4] px-[1rem] py-[1rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
