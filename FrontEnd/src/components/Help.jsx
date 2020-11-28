import React from 'react';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
export default function Help() {
    return (
        <div className="h-screen">
          <div className="flex justify-center items-center h-1/5">
            <h1 className="page_header text-6xl mb-md">Help Page</h1>
          </div>
          <Accordion className="h-4/5 overflow-y-scroll" allowZeroExpanded='true'>
            <AccordionItem>
              <AccordionItemHeading className="bg-dark_blue text-center text-white text-3xl">
                <AccordionItemButton className="py-md">
                  Getting Started
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-lg py-md px-md bg-gray-100">
                  This is the placeholder text for the instructions to get started with this application.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading className="bg-med_blue text-center text-white text-3xl">
                <AccordionItemButton className="py-md">
                  Camera Basics
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-lg py-md px-md bg-gray-100">
                  This is the placeholder text for all the information about the Camera that you need to know before you get started.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading className="bg-light_blue text-center text-white text-3xl">
                <AccordionItemButton className="py-md">
                  Using the Camera
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-lg py-md px-md bg-gray-100">
                  This is the placeholder text for the instructions on how to use the Camera that we have implemented.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading className="bg-grey text-center text-white text-3xl">
                <AccordionItemButton className="py-md">
                  No label?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-lg py-md px-md bg-gray-100">
                  This is the placeholder text for the instructions that follow if the item you are trying to categorize has no label.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
    );
}
