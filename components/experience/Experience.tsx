import React from "react";
import { classNames } from "../../utils/JoinClassName";
import { companiesWorked } from "./utils/CompaniesWorkedOn";

interface CompaniesListType {
  name: string;
  id: number;
  openTab: number;
  setOpenTab: (tab: number) => void;
}

export function Experience() {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <section id="Experience ">
      <div className="flex flex-row">
        <div className="pb-4 ml-32 border-l border-gray-700 ">
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
        </div>

        <div id="myTabContent">
          <div
            className={classNames(
              openTab === 1 ? "block" : "hidden",
              " p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            )}
            id="link1"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Profile tabs associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className={classNames(
              openTab === 2 ? "block" : "hidden",
              " p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            )}
            id="link2"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Dashboard tabs associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
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
          openTab === id ? "border-l-2 border-gray-300" : "",
          "inline-block p-4  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        )}
        id="profile-tab"
        data-toggle="tab"
        href="#link1"
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
