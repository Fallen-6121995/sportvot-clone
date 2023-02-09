import React from "react";

const SidebarRow = ({ selected, Icon, title, status }) => {
  // useEffect(() => {}, []);
  return (
    <>
      <style jsx>
        {`
          .sidebarRow {
            display: flex;
            align-items: center;
            padding: 8px 16px;
            transition: background-color 0.75s ease 0s;
            margin: 0px 0px 8px;
          }
         
          .sidebarRow:hover {
            background-color: rgba(255, 255, 255, 0.15);
          }
         
          .sidebarRow__icon {
            color: #fff;
            font-size: 1.4rem !important;
          }

          .sidebarRow__title {
            flex: 1;
            margin-left: 18px;
            font-size: 1rem;
            font-weight: 500;
          }
          .selected {
            color: #ff2120;
          }
          .sidebarRow:hover {
            cursor: pointer;
          }

         
        `}
      </style>
      <>
        <div className={`sidebarRow ${selected && "selected"}`}>
          {status ? <Icon className="sidebarRow__icon" /> : null}
          <h2 className="sidebarRow__title text-white">{title}</h2>
          {/* {MenuItems.map((items, index) => {
      {
        items.dropdown && (
          <>
            <Link key={index} to={items.url}>
              <h3 className="sidebarRow__title">{items.title}</h3>
            </Link>
          </>
        );
      }
    })} */}
        </div>
      </>
    </>
  );
};

export default SidebarRow;
