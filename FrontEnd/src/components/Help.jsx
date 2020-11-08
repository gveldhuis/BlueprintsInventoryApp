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
        <div>
          <h1 className="page_header text-6xl">Help Page</h1>
          <Accordion allowZeroExpanded='true' className="h-screen">
                <AccordionItem>
                    <AccordionItemHeading className="bg-dark_blue text-center text-white text-3xl">
                        <AccordionItemButton className="py-md">
                            Getting Started
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                          This is the placeholder text for the instructions to get started with this application.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          Camera Basics
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                        This is the placeholder text for all the information about the Camera that you need to know before you get started.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          Using the Camera
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                        This is the placeholder text for the instructions on how to use the Camera that we have implemented.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          No label?
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                        This is the placeholder text for the instructions that follow if the item you are trying to categorize has no label.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
          </Accordion>
        </div>
    );
}
