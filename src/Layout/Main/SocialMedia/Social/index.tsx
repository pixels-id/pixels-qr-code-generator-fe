import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaEllipsisV } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { Heading } from "../../../../Typography";
import AddMore from "./addMore";
import IconField from "./iconField";

const Social = ({ fields, register, remove, append, swap }) => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    swap(result.source.index, result.destination.index);
  };
  return (
    <div>
      <Heading type="h2">
        <HiOutlinePresentationChartLine className="w-6 h-6 inline -mt-1 mr-1 text-slate-600" />
        Social Media
      </Heading>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {fields.map((field, index) => (
                <Draggable key={field.id} draggableId={field.id} index={index}>
                  {(provided) => (
                    <div
                      className="mt-2 flex place-items-center -ml-3"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="flex-none">
                        <FaEllipsisV className="text-green-900" />
                      </div>
                      <section
                        className="bg-green-800/20 p-2 rounded-lg flex-auto"
                        key={field.id}
                      >
                        <button
                          className="float-right"
                          type="button"
                          onClick={() => remove(index)}
                        >
                          <TiDelete className="w-6 h-6 text-center text-green-800 hover:text-green-900" />
                        </button>
                        <label>
                          <span className="text-sm font-semibold">
                            <IconField field={field} />
                            {field.type}
                          </span>
                          <input
                            placeholder="https://www.remoter.id"
                            {...register(`socialMedia.${index}.link` as const, {
                              required: true,
                            })}
                            className="border-b-4 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                          />
                        </label>
                        <label>
                          <input
                            placeholder="Enter Your Text"
                            type="text"
                            {...register(`socialMedia.${index}.text` as const, {
                              required: true,
                            })}
                            className="border-b-4 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                          />
                        </label>
                      </section>
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AddMore append={append} />
    </div>
  );
};

export default Social;
