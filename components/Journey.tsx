import { Disclosure } from "@headlessui/react";
import { RiArrowUpSLine, RiCalendarLine } from "react-icons/ri";
import { TbSchool, TbCode } from "react-icons/tb";

function Journey() {
  return (
    <div className="w-full">
      <h3 className="font-medium text-primary underline text-xl text-center">
        My Journey
      </h3>
      <div className="mx-auto w-full rounded-2xl bg-white p-2 mt-5">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-primary text-md flex">
                  <span className="mr-2 mt-0.5 text-lg">
                    <TbSchool />
                  </span>
                  Education
                </span>
                <RiArrowUpSLine
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className="flex flex-col justify-center py-6 lg:py-12">
                  <div className="w-full mx-auto lg:max-w-4xl">
                    <div className="relative">
                      <div className="absolute hidden w-px h-2/3 transform -translate-x-1/2 bg-mainred lg:block left-1/2"></div>
                      <div className="space-y-12 lg:space-y-8">
                        <div>
                          <div className="flex flex-col items-center">
                            <div className="flex items-center justify-start w-full mx-auto">
                              <div className="w-full lg:w-1/2 lg:pr-8">
                                <div className="p-4 text-primary bg-white rounded shadow-lg border-mainred border shadow-cyan-300">
                                  <p className="text-lg font-semibold text-mainred">
                                    Computer & Network Engineering
                                  </p>
                                  <p className="text-md text-secondary font-semibold">
                                    SMK N 1 Adiwerna
                                  </p>
                                  <p className="text-sm flex mt-2 text-secondary">
                                    <span className="mt-1 mr-2">
                                      <RiCalendarLine />
                                    </span>
                                    Jul 2014 - May 2017
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-mainred border-2 border-mainred rounded-full left-1/2 sm:translate-y-0"></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex flex-col items-center">
                            <div className="flex items-center justify-end w-full mx-auto">
                              <div className="w-full lg:w-1/2 lg:pl-8">
                                <div className="p-4 text-primary bg-white rounded shadow-lg border-mainred border shadow-cyan-300">
                                  <p className="text-lg font-semibold text-mainred">
                                    Computer Science
                                  </p>
                                  <p className="text-md text-secondary font-semibold">
                                    Universitas Mercu Buana
                                  </p>
                                  <p className="text-sm flex mt-2 text-secondary">
                                    <span className="mt-1 mr-2">
                                      <RiCalendarLine />
                                    </span>
                                    Aug 2018 - Present
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-mainred border-2 border-mainred rounded-full left-1/2 sm:translate-y-0"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-2">
                <span className="text-primary text-md flex">
                  <span className="mr-2 mt-0.5 text-lg">
                    <TbCode />
                  </span>
                  Work Experience
                </span>
                <RiArrowUpSLine
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className="flex flex-col justify-center py-6 lg:py-12">
                  <div className="w-full mx-auto lg:max-w-4xl">
                    <div className="relative">
                      <div className="absolute hidden w-px h-5/6 transform -translate-x-1/2 bg-mainred lg:block left-1/2"></div>
                      <div className="space-y-12 lg:space-y-8">
                        <div>
                          <div className="flex flex-col items-center">
                            <div className="flex items-center justify-start w-full mx-auto">
                              <div className="w-full lg:w-1/2 lg:pr-8">
                                <div className="p-4 text-primary bg-white rounded shadow-lg border-mainred border shadow-cyan-300">
                                  <p className="text-lg font-semibold text-mainred">
                                    Intern IT Support
                                  </p>
                                  <p className="text-md text-secondary font-semibold">
                                    Dishubkominfo Kota Tegal
                                  </p>
                                  <p className="text-sm flex mt-2 text-secondary">
                                    <span className="mt-1 mr-2">
                                      <RiCalendarLine />
                                    </span>
                                    Jul 2016 - Sep 2016
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-mainred border-2 border-mainred rounded-full left-1/2 sm:translate-y-0"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col items-center">
                            <div className="flex items-center justify-end w-full mx-auto">
                              <div className="w-full lg:w-1/2 lg:pl-8">
                                <div className="p-4 text-primary bg-white rounded shadow-lg border-mainred border shadow-cyan-300">
                                  <p className="text-lg font-semibold text-mainred">
                                    Front End Developer
                                  </p>
                                  <p className="text-md text-secondary font-semibold">
                                    Clapping Ape
                                  </p>
                                  <p className="text-sm flex mt-2 text-secondary">
                                    <span className="mt-1 mr-2">
                                      <RiCalendarLine />
                                    </span>
                                    Apr 2018 - Sep 2020
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-mainred border-2 border-mainred rounded-full left-1/2 sm:translate-y-0"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col items-center">
                            <div className="flex items-center justify-start w-full mx-auto">
                              <div className="w-full lg:w-1/2 lg:pr-8">
                                <div className="p-4 text-primary bg-white rounded shadow-lg border-mainred border shadow-cyan-300">
                                  <p className="text-lg font-semibold text-mainred">
                                    Freelance Frontend
                                  </p>
                                  <p className="text-md text-secondary font-semibold">
                                    Fazztrack
                                  </p>
                                  <p className="text-sm flex mt-2 text-secondary">
                                    <span className="mt-1 mr-2">
                                      <RiCalendarLine />
                                    </span>
                                    Jun 2022 - Aug 2022
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-mainred border-2 border-mainred rounded-full left-1/2 sm:translate-y-0"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col items-center">
                            <div className="flex items-center justify-end w-full mx-auto">
                              <div className="w-full lg:w-1/2 lg:pl-8">
                                <div className="p-4 text-primary bg-white rounded shadow-lg border-mainred border shadow-cyan-300">
                                  <p className="text-lg font-semibold text-mainred">
                                    Front End Developer
                                  </p>
                                  <p className="text-md text-secondary font-semibold">
                                    Koinworks
                                  </p>
                                  <p className="text-sm flex mt-2 text-secondary">
                                    <span className="mt-1 mr-2">
                                      <RiCalendarLine />
                                    </span>
                                    Sep 2020 - Present
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-mainred border-2 border-mainred rounded-full left-1/2 sm:translate-y-0"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default Journey;
