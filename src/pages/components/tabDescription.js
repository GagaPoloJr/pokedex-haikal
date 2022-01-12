import styled from '@emotion/styled';

import React from "react";
const HeadingAbout = styled.div`
font-weight:700;
font-size:16px;
text-transform: capitalize; 
`
const HeadingDesc = styled.div`
font-size:12px;
color: #adadad;
`

const SubHeading = styled.div`
font-weight:500;
font-size:14px;
text-transform: capitalize; 
`
const BadgeAbility = styled.div`
font-size:10px;
`

const ColorFont = styled.div`
font-size:12px;
color:#eab308;
text-align:center;
`

const TabDescription = (props) => {
  const [openTab, setOpenTab] = React.useState(3);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 shadow-lg rounded-full block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-yellow-500 border-2 border-yellow-500"
                    : "text-white-600 bg-transparent border-2 border-yellow-500")

                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                About
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 shadow-lg rounded-full block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-yellow-500 border-2 border-yellow-500"
                    : "text-white-600 bg-transparent border-2 border-yellow-500")

                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Abilities
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 shadow-lg rounded-full block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-yellow-500 border-2 border-yellow-500"
                    : "text-white-600 bg-transparent border-2 border-yellow-500")

                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Moves
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-5">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 shadow-lg rounded-full block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-yellow-500 border-2 border-yellow-500"
                    : "text-white-600 bg-transparent border-2 border-yellow-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Base Stats
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 3 ? "block" : "hidden"} id="link1">
                  <p className="text-center font-bold">Base Experience: <span className="text-yellow-500">{props.pokemon.base_experience}</span></p>
                  {props.pokemon.stats.map((x) => (
                    <>
                      <div className="flex flex-col">
                        <p className="text-sm text-slate-300" key={x.stat.name}>{x.stat.name}  <span className={x.base_stat < 50 ? "text-yellow-600" : x.base_stat > 89 ? "text-red-500" : "text-green-500"}>({x.base_stat})</span></p>
                        <div className="w-full bg-gray-200 rounded-full h-1 mb-6">
                          <div className={`${x.base_stat < 50 ? "bg-yellow-500" : x.base_stat > 89 ? "bg-red-500" : "bg-green-500"} h-1`} style={{ width: `${x.base_stat / 1.7}%` }}></div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex flex-wrap">
                    {props.pokemon.moves.slice(0, 19).map((x) => (
                      // <>
                      //   <p className="text-sm text-slate-300" key={x.move.name}>{x.move.name}, &nbsp;</p>
                      // </>
                      <BadgeAbility className="mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full py-1 px-4 mr-2">
                        {x.move.name}
                      </BadgeAbility>
                    ))}
                  </div>
                </div>
                <div className={openTab === 1 ? "block" : "hidden"} id="link3">
                  <div className="flex flex-wrap">
                    {props.pokemon.abilities.map((x) => (
                      <div className="mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full py-2 px-5 text-sm mr-3">
                        {x.ability.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <HeadingAbout>
                    {props.pokemon.name}
                  </HeadingAbout>
                  <HeadingDesc>
                    This is a pokemon named {props.pokemon.name}. you can catch it by pressing the catch pokemon button with a 50% success rate and 50% fail rate.
                  </HeadingDesc>
                  <div className="my-4 flex justify-around items-center">
                    <div>
                      <SubHeading>height</SubHeading>
                      <ColorFont>{props.pokemon.height}"</ColorFont>
                    </div>
                    <div>
                      <SubHeading>Weight</SubHeading>
                      <ColorFont>{props.pokemon.weight} lbs</ColorFont>
                    </div>
                  </div>
                  <HeadingAbout>
                    Held Items
                  </HeadingAbout>
                  <div className="mt-3 flex flex-wrap">
                    {props.pokemon.held_items.length === 0 ? <HeadingDesc className="ml-2">No held items</HeadingDesc> :
                      (
                        <>
                          {props.pokemon.held_items.map((x) => (
                            <div className="mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full py-2 px-5 text-sm mr-3">
                                {x.item.name}
                            </div>
                          ))}
                        </>
                      )

                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabDescription;
