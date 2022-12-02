import React from "react";
import { classNames } from "../../utils/JoinClassName";
import { companiesWorked } from "./utils/CompaniesWorkedOn";
import "animate.css";
import { useMediaQuery } from "../hooks/useMediaQuery";
import ScrollContainer from "react-indiana-drag-scroll";

interface CompaniesListType {
  name: string;
  id: number;
  openTab: number;
  setOpenTab: (tab: number) => void;
}

export function Experience() {
  const [openTab, setOpenTab] = React.useState(1);
  const isBreakPoint = useMediaQuery(768);

  return (
    <section id="Experience" className="desktop:h-[60vh]">
      <div className="flex flex-col  pt-[16px] mt-[100px]  px-[24px]">
        <h3 className="items-center justify-center text-2xl font-bold desktop:flex text-lightState bg">
          <span className="text-xl text-leaf pr-[12px]"> 0.3</span> Where
          I&lsquo;ve worked
        </h3>
        <div className=" desktop:w-[500px] mr-[44px] flex relative ">
          {/* <div className="absolute align-middle border-b-[1px] border-gray-700 w-44 right-14 top-4 "></div> */}
        </div>

        <div className="flex flex-col desktop:flex-row justify-center items-center  pt-[16px] desktop:pt-[100px]">
          <div className="pb-4 desktop:ml-32 desktop:border-l border-heig border-gray-700 desktop:h-[225px] ">
            {isBreakPoint ? (
              <ScrollContainer>
                <ul
                  className="flex flex-row w-[325px]  text-white"
                  role="tablist"
                >
                  {companiesWorked.map((company, id) => {
                    return (
                      <div key={id}>
                        <CompaniesList
                          name={company.name}
                          id={company.id}
                          openTab={openTab}
                          setOpenTab={setOpenTab}
                        />
                      </div>
                    );
                  })}
                </ul>
              </ScrollContainer>
            ) : (
              <ul className="flex flex-col text-white" role="tablist">
                {companiesWorked.map((company, id) => {
                  return (
                    <div key={id}>
                      <CompaniesList
                        name={company.name}
                        id={company.id}
                        openTab={openTab}
                        setOpenTab={setOpenTab}
                      />
                    </div>
                  );
                })}
              </ul>
            )}
          </div>
          {companiesWorked.map((company, index) => {
            return (
              <div key={index}>
                <CompanyExperience
                  name={company.name}
                  link={company.link}
                  id={company.id}
                  role={company.role}
                  startDate={company.startDate}
                  endDate={company.endDate}
                  thingsWorkedOn={company.thingsWorkedOn}
                  openTab={openTab}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CompaniesList({ name, id, openTab, setOpenTab }: CompaniesListType) {
  return (
    <li>
      {" "}
      <a
        className={classNames(
          openTab === id
            ? "border-l-2 border-leaf bg-lightNavy text-leaf"
            : "text-slate-400",
          "inline-block p-4  transition transition-duration-300ms  hover:text-leaf hover:border-leaf "
        )}
        id="profile-tab"
        data-toggle="tab"
        href={`#link${id}`}
        role="tablist"
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(id);
        }}
      >
        {name}
      </a>
    </li>
  );
}

function CompanyExperience({
  name,
  link,
  id,
  role,
  startDate,
  endDate,
  thingsWorkedOn,
  openTab,
}: any) {
  return (
    <div id="myTabContent">
      <div
        className={classNames(
          openTab === id ? "block" : "hidden",
          " p-4 rounded-lg animate__animated animate__fadeIn "
        )}
        id={`#link${id}`}
      >
        <div className="flex flex-col">
          <p className="text-xl text-lightState">
            {" "}
            {role}{" "}
            <span className="text-leaf">
              @{" "}
              <a
                className="transition-all duration-100 delay-100 border-b-0 hover:border-b-2 border-leaf"
                target="_blank"
                rel="noreferrer"
                href={link}
              >
                {name}
              </a>{" "}
            </span>
          </p>
          <p className="font-extralight text-slate-400">
            {startDate} - {endDate}
          </p>
          <ul className="mt-2 ml-8 list-disc text-slate-400 desktop:w-[500px] list-disc-blue marker:text-leaf">
            {thingsWorkedOn.map((task: string, index: number) => {
              return (
                <li className="my-2" key={index}>
                  {task}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
